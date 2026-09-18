import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "../container";

describe("Container", () => {
  it("renders children inside a data-container element", () => {
    render(
      <Container>
        <p>Content</p>
      </Container>
    );
    const el = screen.getByText("Content").closest("[data-container]");
    expect(el).not.toBeNull();
  });

  it("defaults to the default size and honours explicit sizes", () => {
    const { container, rerender } = render(<Container>x</Container>);
    expect(container.querySelector("[data-container]")?.getAttribute("data-container")).toBe(
      "default"
    );

    rerender(
      <Container size="wide">
        x
      </Container>
    );
    expect(container.querySelector("[data-container]")?.getAttribute("data-container")).toBe("wide");
  });

  it("forwards a className", () => {
    render(
      <Container className="my-class">
        x
      </Container>
    );
    expect(screen.getByText("x").closest(".my-class")).not.toBeNull();
  });
});
