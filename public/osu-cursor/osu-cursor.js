const anime = window.anime;

export default class osuCursor {
	constructor(options) {
		this.options = options || {};
		this.options.rotate ??= true;
		this.init();
	}

	injectHtml(html, el) {
		let div = document.createElement("div");
		div.innerHTML = html;
		while (div.children.length > 0) {
			el.appendChild(div.children[0]);
		}
		return el.lastChild;
	}

	init() {
		this.dragState = 0;
		this.visible = false;
		this.dragStartPos = { x: 0, y: 0 };
		this.rotateState = {
			isInAnimation: false,
			degrees: 0,
		};
		this.isTouch = false;

		// ✅ Tambahkan CSS kuat agar cursor tidak ketutupan elemen lain
		const globalCSS = document.createElement("style");
		globalCSS.textContent = `
      #osu-cursor {
        position: fixed !important;
        pointer-events: none !important;
        z-index: 999999999 !important;
        transform: translate(-50%, -50%) !important;
      }
    `;
		document.head.appendChild(globalCSS);

		// load CSS dari file public
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "/osu-cursor/style.css";
		link.onload = () => console.log("osu!cursor CSS loaded ✅");
		link.onerror = () => console.error("❌ osu!cursor CSS failed to load");
		document.head.appendChild(link);

		if (document.querySelector("#osu-cursor")) {
			console.warn("osuCursor: element already exists, skipping init()");
			return;
		}

		this.cursor = this.injectHtml(
			`
		<div class='osu-cursor' id='osu-cursor'>
			<div class='cursor-inner'>
				<img class='cursor-fg' src='/osu-cursor/cursor.png'/>
				<img class='cursor-additive' src='/osu-cursor/cursor-additive.png'/>
			</div>
		</div>`,
			document.body
		);

		this.cursor.style.display = "none";
		this.cursor.style.top = "-500px";
		this.cursor.style.left = "-500px";

		this.cursorInner = this.cursor.querySelector(".cursor-inner");
		this.cursorFg = this.cursor.querySelector(".cursor-fg");
		this.cursorAdditive = this.cursor.querySelector(".cursor-additive");

		this.mouseMoveFunc = this.mouseMove.bind(this);
		this.mouseOverFunc = this.mouseOver.bind(this);
		this.mouseDownFunc = this.mouseDown.bind(this);
		this.mouseUpFunc = this.mouseUp.bind(this);
		this.mouseLeaveFunc = this.mouseLeave.bind(this);
		this.dragFunc = this.drag.bind(this);
		this.dragEndFunc = this.dragEnd.bind(this);
		this.touchFunc = this.touch.bind(this);

		// ✅ Gunakan hanya window untuk event mousemove agar tidak tumpang tindih
		window.addEventListener("mousemove", this.mouseMoveFunc, { passive: true });
		document.addEventListener("mouseover", this.mouseOverFunc, { passive: true });
		document.addEventListener("mousedown", this.mouseDownFunc, { passive: true });
		document.addEventListener("touchstart", this.touchFunc, { passive: true });
		document.addEventListener("touchmove", this.touchFunc, { passive: true });
		document.addEventListener("mouseup", this.mouseUpFunc, { passive: true });
		document.addEventListener("mouseleave", this.mouseLeaveFunc, { passive: true });
		document.addEventListener("drag", this.dragFunc, { passive: true });
		document.addEventListener("dragend", this.dragEndFunc, { passive: true });

		// ✅ Debug test (hapus nanti)
		setTimeout(() => {
			this.cursor.style.top = "200px";
			this.cursor.style.left = "200px";
			this.cursor.style.display = "block";
			console.log("osu!cursor visible test ✅");
		}, 500);
	}

	getParentAttribute(element, attributeName) {
		let value = element.getAttribute(attributeName);
		if (value) return value;
		let parent = element.parentElement;
		if (parent) {
			return this.getParentAttribute(parent, attributeName);
		}
		return null;
	}

	getCurrentCursorStyle(target) {
		let origCursor = this.getParentAttribute(target, "orig-cursor");
		if (origCursor) return origCursor;
		let cursorStyle = getComputedStyle(target).cursor;
		return cursorStyle;
	}

	mouseMove(e) {
		if (this.isTouch) {
			this.isTouch = false;
			return;
		}

		// ✅ Hapus offset scroll agar posisi tepat
		this.cursor.style.top = `${e.clientY}px`;
		this.cursor.style.left = `${e.clientX}px`;

		if ((this.dragState == 1 || this.dragState == 2) && this.options.rotate) {
			const deltaX = e.clientX - this.dragStartPos.x;
			const deltaY = e.clientY - this.dragStartPos.y;

			if (deltaX * deltaX + deltaY * deltaY > 900) this.dragState = 2;
			else return;

			let degrees = Math.atan2(-deltaX, deltaY) * (180 / Math.PI) + 24.3;

			let diff = (degrees - this.rotateState.degrees) % 360;
			if (diff < -180) diff += 360;
			if (diff > 180) diff -= 360;
			this.rotateState.degrees += diff;

			anime.remove(this.cursor);
			this.cursor.style.transition = "transform 0.15s";
			this.cursor.style.transform = `rotate(${this.rotateState.degrees}deg)`;
		}
	}

	mouseDown(e) {
		if (this.isTouch) {
			this.isTouch = false;
			return;
		}
		if (this.visible) {
			this.dragStartPos.x = e.clientX;
			this.dragStartPos.y = e.clientY;
			this.rotateState.degrees = 0;
			this.cursor.classList.add("active");
			anime.remove(this.cursorInner);
			anime({
				targets: this.cursorInner,
				scale: 0.9,
				duration: 800,
				easing: () => (t) => (t - 1) ** 3 + 1,
			});
			anime.remove(this.cursorAdditive);
			anime({
				targets: this.cursorAdditive,
				opacity: this.dragState == 3 ? 1 : [0, 1],
				duration: 800,
				easing: () => (t) => (t - 1) ** 5 + 1,
			});
			this.dragState = 1;
		}
	}

	mouseUp(e) {
		if (this.visible) {
			if (this.dragState == 2) {
				anime.remove(this.cursor);
				this.rotateState.isInAnimation = true;
				this.cursor.style.removeProperty("transition");
				anime({
					targets: this.cursor,
					rotate: 0,
					duration: 600 * (1 + Math.abs(this.rotateState.degrees / 720)),
					easing: () => (t) =>
						Math.pow(2, -10 * t) *
							Math.sin((0.5 * t - 0.075) * 20.9439) +
						1 -
						0.00048828125 * t,
					complete: () => {
						this.rotateState.isInAnimation = false;
						new Event("click");
					},
				});
				this.rotateState.degrees = 0;
			}
			this.dragState = 0;
			this.cursor.classList.remove("active");
			anime.remove(this.cursorInner);
			anime({
				targets: this.cursorInner,
				scale: 1,
				duration: 500,
				easing: () => (t) =>
					Math.pow(2, -10 * t) *
						Math.sin((t - 0.075) * 20.9439) +
					1 -
					0.00048828125 * t,
			});
			anime.remove(this.cursorAdditive);
			anime({
				targets: this.cursorAdditive,
				opacity: [1, 0],
				duration: 500,
				easing: () => (t) => (t - 1) ** 5 + 1,
			});
		}
	}

	mouseLeave() {
		this.visible = false;
		this.cursor.style.display = "none";
	}

	mouseOver(e) {
		if (this.dragState == 1 || this.dragState == 2) return;

		const currentCursor = this.getCurrentCursorStyle(e.target);

		// ✅ Tambah “text” agar tetap muncul di area teks
		if (["default", "auto", "none", "text"].includes(currentCursor)) {
			this.visible = true;
			this.cursor.style.display = "block";
			document.documentElement.style.cursor = "none";
		} else {
			this.visible = false;
			this.cursor.style.display = "none";
			document.documentElement.style.removeProperty("cursor");
		}
	}

	drag() {
		this.visible = false;
		this.cursor.style.display = "none";
		this.dragState = -1;
	}

	dragEnd() {
		this.cursor.style.display = "block";
		this.cursor.classList.remove("active");
		anime.remove(this.cursorAdditive);
		this.cursorAdditive.style.opacity = 0;
		anime.remove(this.cursor);
		this.cursor.style.transform = "rotate(0)";
		anime.remove(this.cursorInner);
		this.cursorInner.style.transform = "scale(1)";
		this.visible = true;
		this.dragState = 0;
	}

	touch() {
		this.isTouch = true;
	}

	stop() {
		window.removeEventListener("mousemove", this.mouseMoveFunc);
		document.removeEventListener("mouseover", this.mouseOverFunc);
		document.removeEventListener("mousedown", this.mouseDownFunc);
		document.removeEventListener("touchstart", this.touchFunc);
		document.removeEventListener("touchmove", this.touchFunc);
		document.removeEventListener("mouseup", this.mouseUpFunc);
		document.removeEventListener("mouseleave", this.mouseLeaveFunc);
		document.removeEventListener("drag", this.dragFunc);
		document.removeEventListener("dragend", this.dragEndFunc);
		if (this.cursor) {
			this.cursor.remove();
			this.cursor = null;
		}
	}
}