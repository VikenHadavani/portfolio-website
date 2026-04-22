/**
 * SplitText shim — provides the same API surface as GSAP's premium
 * SplitText plugin, splitting text into individual span elements
 * for animation purposes.
 */
export class SplitText {
  elements: HTMLElement[];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];

  constructor(
    target: string | string[] | HTMLElement | HTMLElement[],
    config?: { type?: string; linesClass?: string; charsClass?: string; wordsClass?: string }
  ) {
    // Resolve target elements
    if (typeof target === "string") {
      this.elements = Array.from(document.querySelectorAll(target));
    } else if (Array.isArray(target)) {
      if (target.length > 0 && typeof target[0] === "string") {
        this.elements = (target as string[]).flatMap((selector) =>
          Array.from(document.querySelectorAll(selector))
        );
      } else {
        this.elements = target as HTMLElement[];
      }
    } else {
      this.elements = [target];
    }

    const types = (config?.type || "chars,words,lines").split(",").map((t) => t.trim());

    this.elements.forEach((el) => {
      const text = el.textContent || "";
      el.innerHTML = "";

      if (types.includes("lines")) {
        const lineEl = document.createElement("div");
        lineEl.className = config?.linesClass || "split-line";
        lineEl.style.overflow = "hidden";

        const words = text.split(/\s+/);
        words.forEach((word, i) => {
          if (types.includes("words") || types.includes("chars")) {
            const wordSpan = document.createElement("span");
            wordSpan.className = config?.wordsClass || "";
            wordSpan.style.display = "inline-block";
            wordSpan.style.whiteSpace = "nowrap";

            if (types.includes("chars")) {
              word.split("").forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.className = config?.charsClass || "";
                charSpan.style.display = "inline-block";
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
                this.chars.push(charSpan);
              });
            } else {
              wordSpan.textContent = word;
            }

            lineEl.appendChild(wordSpan);
            this.words.push(wordSpan);

            if (i < words.length - 1) {
              lineEl.appendChild(document.createTextNode(" "));
            }
          }
        });

        el.appendChild(lineEl);
        this.lines.push(lineEl);
      } else {
        const words = text.split(/\s+/);
        words.forEach((word, i) => {
          if (types.includes("words") || types.includes("chars")) {
            const wordSpan = document.createElement("span");
            wordSpan.className = config?.wordsClass || "";
            wordSpan.style.display = "inline-block";

            if (types.includes("chars")) {
              word.split("").forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.className = config?.charsClass || "";
                charSpan.style.display = "inline-block";
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
                this.chars.push(charSpan);
              });
            } else {
              wordSpan.textContent = word;
            }

            el.appendChild(wordSpan);
            this.words.push(wordSpan);

            if (i < words.length - 1) {
              el.appendChild(document.createTextNode(" "));
            }
          }
        });
      }
    });
  }

  revert() {
    this.elements.forEach((el) => {
      const text = el.textContent;
      el.innerHTML = text || "";
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}
