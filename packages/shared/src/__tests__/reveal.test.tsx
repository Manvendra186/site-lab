import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Reveal } from "../reveal";

describe("Reveal", () => {
  it("renders its children with the data-reveal marker and forwards className", () => {
    render(
      <Reveal className="copy">
        <p>Hello</p>
      </Reveal>
    );
    const el = screen.getByText("Hello").closest("[data-reveal]");
    expect(el).not.toBeNull();
    expect(el).toHaveClass("copy");
  });

  it("renders as a custom element when `as` is set", () => {
    render(
      <Reveal as="section">
        <p>Section content</p>
      </Reveal>
    );
    expect(screen.getByText("Section content").closest("section")).not.toBeNull();
  });

  it("is visible (opacity 1) once in view, since jsdom has no IntersectionObserver", () => {
    // useInView falls back to inView=true when IntersectionObserver is undefined,
    // so the element should be in its visible state.
    render(
      <Reveal>
        <p>Fallback visible</p>
      </Reveal>
    );
    const el = screen.getByText("Fallback visible").closest("[data-reveal]") as HTMLElement;
    expect(el.style.opacity).toBe("1");
  });
});
