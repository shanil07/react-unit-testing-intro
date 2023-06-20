import { render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { UserDetails } from "./index";

describe("scenes/UserDetails", () => {
  const server = setupServer(
    rest.get("/user/5", (_, res, ctx) => {
      return res(ctx.json({ firstName: "John", lastName: "Doe" }));
    })
  );
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should normally", async () => {
    const { container, findByText } = render(<UserDetails id="5" />);

    expect(container).toHaveTextContent("Loading...");
    await findByText("First Name:");

    expect(container).toHaveTextContent("John");
    expect(container).toHaveTextContent("Doe");
  });
  it("should handle error response", async () => {
    server.use(
      rest.get("/user/6", (_, res, ctx) => {
        return res(ctx.status(404), ctx.json({}));
      })
    );
    const { container, findByText } = render(<UserDetails id="6" />);

    expect(container).toHaveTextContent("Loading...");
    await findByText("Error occurred while loading");
  });
  it("should display error message when if present", async () => {
    server.use(
      rest.get("/user/6", (_, res, ctx) => {
        return res(ctx.status(404), ctx.json({ message: "User not found" }));
      })
    );
    const { container, findByText } = render(<UserDetails id="6" />);

    expect(container).toHaveTextContent("Loading...");
    await findByText("Error occurred while loading User not found");
  });
});
