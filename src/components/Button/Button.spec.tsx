import { fireEvent, render } from "@testing-library/react";
import { Button } from "./index";

describe("components/Button", () => {
  it("should render component", () => {
    const { getByRole } = render(<Button variant="primary">Test text</Button>);
    expect(getByRole("button")).toHaveTextContent("Test text");
    expect(getByRole("button")).toHaveClass("primary");
  });

  it("should render correctly for secondary variant", () => {
    const { getByRole } = render(
      <Button variant="secondary">Test text</Button>
    );
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
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should match snapshot", () => {
    const { container } = render(<Button variant="primary">Test text</Button>);
    expect(container).toMatchSnapshot();
  });
});
