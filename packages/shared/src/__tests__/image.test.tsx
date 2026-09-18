import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// next/image pulls in Next.js internals; render a plain <img> for the test.
vi.mock("next/image", () => ({
  default: (props: {
    src: string;
    alt: string;
    fill?: boolean;
    priority?: boolean;
    loading?: string;
  }) => (
    <img
      src={props.src}
      alt={props.alt}
      data-fill={props.fill ? "true" : undefined}
      data-priority={props.priority ? "true" : undefined}
      data-loading={props.loading}
    />
  ),
}));

import { Img } from "../image";

describe("Img", () => {
  it("renders the image with its alt text", () => {
    render(<Img src="/room.jpg" alt="A quiet room" />);
    expect(screen.getByAltText("A quiet room")).toBeInTheDocument();
  });

  it("wraps the image in a block with a reserved aspect ratio", () => {
    const { container } = render(<Img src="/room.jpg" alt="" />);
    const wrapper = container.querySelector("span");
    expect(wrapper).not.toBeNull();
    expect(wrapper?.getAttribute("style")).toContain("aspect-ratio");
  });

  it("defaults to a 4:3 ratio and honours a custom ratio", () => {
    const { container: a } = render(<Img src="/a.jpg" alt="" />);
    expect(a.querySelector("span")?.getAttribute("style")).toContain("1.3333333333333333");

    const { container: b } = render(<Img src="/b.jpg" alt="" ratio={16 / 9} />);
    expect(b.querySelector("span")?.getAttribute("style")).toContain("1.7777777777777777");
  });

  it("is lazy by default and eager when asked", () => {
    const { rerender } = render(<Img src="/x.jpg" alt="" />);
    expect(screen.getByAltText("")).toHaveAttribute("data-loading", "lazy");

    rerender(<Img src="/x.jpg" alt="" eager />);
    expect(screen.getByAltText("")).toHaveAttribute("data-loading", "eager");
    expect(screen.getByAltText("")).toHaveAttribute("data-priority", "true");
  });
});
