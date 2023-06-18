import { render } from "@testing-library/react";
import { Button } from "./index";

describe("components/Button", () => {
  it("should render component", () => {
    const { getByRole } = render(<Button>Test text</Button>);
    expect(getByRole("button")).toHaveTextContent("Test text");
  });
  it("should match snapshot", () => {
    const { container } = render(<Button>Test text</Button>);
    expect(container).toMatchSnapshot();
  });
});
