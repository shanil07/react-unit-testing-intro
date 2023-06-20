import { render, fireEvent } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("should render primary variant correctly", () => {
    const { getByRole } = render(<Button variant="primary">Test</Button>);
    expect(getByRole("button")).toHaveTextContent("Test");
    expect(getByRole("button")).toHaveClass("primary");
  });

  it("should render secondary variant correctly", () => {
    const { getByRole } = render(<Button variant="secondary">Test</Button>);
    expect(getByRole("button")).toHaveTextContent("Test");
    expect(getByRole("button")).toHaveClass("secondary");
  });

  it("should call handle onClick correctly", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button variant="secondary" onClick={onClickMock}>
        Test text
      </Button>
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledWith("test");
  });

  it("should match snapshot", () => {
    const { container } = render(<Button variant="primary">Test text</Button>);
    expect(container).toMatchSnapshot();
  });
});
