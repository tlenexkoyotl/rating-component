/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../rating-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<rating-component></rating-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
