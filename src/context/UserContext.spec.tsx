import { renderHook } from "@testing-library/react";
import { UserContextProvider, useUserContext } from "./UserContext";
import { ReactNode } from "react";
import { act } from "react-dom/test-utils";

describe("UserContext", () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <UserContextProvider>{children}</UserContextProvider>
  );

  it("should throw error if not under User context scope", () => {
    expect(() => renderHook(() => useUserContext())).toThrowError(
      "useUserContext must be used withing UserContextProvider"
    );
  });

  it("should update state correctly ", () => {
    const user = {
      dateOfBirth: "1996-03-25",
      firstName: "John",
      lastName: "Doe",
      id: "test-id",
    };

    const { result } = renderHook(() => useUserContext(), { wrapper });
    expect(result.current.user).toBeNull();

    act(() => {
      result.current.updateUser(user);
    });

    expect(result.current.user).toEqual(user);
  });
});
