import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import useAuth from ".";
describe(`useAuth`, () => {
  it("shoulds return defalut values", () => {
    const { result } = renderHook(() => useAuth());

    console.log(result.current);
  });
});
