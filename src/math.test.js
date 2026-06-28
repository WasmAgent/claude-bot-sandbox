import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { add, subtract, multiply } from "./math.js";

describe("math", () => {
  it("add", () => assert.equal(add(2, 3), 5));
  it("subtract", () => assert.equal(subtract(5, 3), 2));
  it("multiply", () => assert.equal(multiply(3, 4), 12));
});
