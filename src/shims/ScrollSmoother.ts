import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollSmoother shim — provides the same API surface as GSAP's premium
 * ScrollSmoother plugin, but falls back to native smooth scrolling.
 * This allows the portfolio to build and run without the gsap-trial
 * private registry dependency.
 */
export class ScrollSmoother {
  private static instance: ScrollSmoother | null = null;
  private _paused = false;

  static isTouch = "ontouchstart" in window;

  static create(_config: {
    wrapper: string;
    content: string;
    smooth?: number;
    speed?: number;
    effects?: boolean;
    autoResize?: boolean;
    ignoreMobileResize?: boolean;
  }) {
    const instance = new ScrollSmoother();

    // Let the document body handle the scrolling so ScrollTrigger works natively
    document.documentElement.style.scrollBehavior = "smooth";

    ScrollSmoother.instance = instance;
    return instance;
  }

  static get() {
    return ScrollSmoother.instance;
  }

  static refresh(_hard?: boolean) {
    ScrollTrigger.refresh();
  }

  scrollTop(value?: number) {
    if (value !== undefined) {
      window.scrollTo(0, value);
    }
    return window.scrollY || 0;
  }

  scrollTo(
    target: string | null,
    smooth?: boolean,
    _position?: string
  ) {
    if (!target) return;
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
    }
  }

  paused(value?: boolean) {
    if (value !== undefined) {
      this._paused = value;
      document.body.style.overflow = value ? "hidden" : "auto";
    }
    return this._paused;
  }

  kill() {
    ScrollSmoother.instance = null;
  }
}
