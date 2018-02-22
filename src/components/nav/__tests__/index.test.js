import preact from "preact";
import render from "preact-render-to-json";

import Nav from "../index.js";

const DEFAULT_OPTIONS = {
  makers: {}
};
const MOCK_OPTIONS = {
  name: "TEST_NAME",
  version: "1.0",
  makers: {
    name: "TEST_NAME",
    email: "a@b.com",
    url: "http://"
  }
};

describe("Nav", () => {
  it("renders default attributes", () => {
    const sut = render(Nav(DEFAULT_OPTIONS));

    expect(sut).toMatchSnapshot();
  });
  it("renders all provided attributes", () => {
    const sut = render(Nav(MOCK_OPTIONS));

    expect(sut).toMatchSnapshot();
  });
});
