import { findByText, render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { UserDetails } from "./index";

describe("scenes/UserDetails", () => {
  const server = setupServer(
    rest.get("/user/5", (req, res, ctx) => {
      return res(ctx.json({ firstName: "John", lastName: "Doe" }));
    })
  );
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should normally ", async () => {
    const { container, findByText } = render(<UserDetails id="5" />);

    expect(container).toHaveTextContent("Loading...");
    await findByText("First Name:");

    expect(container).toHaveTextContent("John");
    expect(container).toHaveTextContent("Doe");
  });
});
