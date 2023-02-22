import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("group test", () => {
  test("greet by saying hello", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("hello by name", () => {
    render(<Greet name="anoop" />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});
