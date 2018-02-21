import sinon from "sinon";

import memoize from "../memoize";

const COMPLEX_EQUALITY_CHECK_FUNC = (first, second) => {
  return first.id === second.id;
};

describe("memoize", () => {
  it("calls memoized function only once if called with the same arguments", () => {
    const spy = sinon.spy();
    const memoizedFunction = memoize(spy);

    memoizedFunction(1);
    memoizedFunction(1);

    expect(spy.callCount).toEqual(1);
  });
  it("calls memoized function twice if called with different arguments", () => {
    const spy = sinon.spy();
    const memoizedFunction = memoize(spy);

    memoizedFunction(1);
    memoizedFunction(2);

    expect(spy.callCount).toEqual(2);
  });
  it("calls memoized function only once with used custom equalityCheck function", () => {
    const spy = sinon.spy();
    const memoizedFunction = memoize(spy, COMPLEX_EQUALITY_CHECK_FUNC);

    memoizedFunction({
      id: 1
    });
    memoizedFunction({
      id: 1
    });

    expect(spy.callCount).toEqual(1);
  });
  it("calls memoized function twice with used custom equalityCheck function", () => {
    const spy = sinon.spy();
    const memoizedFunction = memoize(spy, COMPLEX_EQUALITY_CHECK_FUNC);

    memoizedFunction({
      id: 1
    });
    memoizedFunction({
      id: 2
    });

    expect(spy.callCount).toEqual(2);
  });
});
