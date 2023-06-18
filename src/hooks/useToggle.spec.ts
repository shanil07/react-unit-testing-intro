import { renderHook } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";
import { act } from "@testing-library/react";

describe("hooks/useToggle", () => {
  it("should initialize with active undefined", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.active).toBeFalsy();
  });

  it("should initialize with correct value", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.active).toBeTruthy();
  });

  it("should change active when toggle called", async () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.active).toBeFalsy();

    act(() => {
      result.current.toggle();
    });
    expect(result.current.active).toBeTruthy();

    act(() => {
      result.current.toggle();
    });
    expect(result.current.active).toBeFalsy();
  });
});
