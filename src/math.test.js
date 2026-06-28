import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { add, subtract, multiply, divide } from "./math.js";

describe("math", () => {
  it("add", () => assert.equal(add(2, 3), 5));
  it("add zero and zero", () => assert.equal(add(0, 0), 0));
  it("add negative numbers", () => assert.equal(add(-1, -1), -2));
  it("subtract", () => assert.equal(subtract(5, 3), 2));
  it("multiply", () => assert.equal(multiply(3, 4), 12));
  it("multiply floating point", () => assert.equal(multiply(0.1, 0.2), 0.02));
  it("multiply by zero", () => assert.equal(multiply(0, 5), 0));
  it("multiply negative by positive", () => assert.equal(multiply(-2, 3), -6));
  it("divide normal case", () => assert.equal(divide(10, 2), 5));
  it("divide by zero throws", () => {
    assert.throws(() => divide(5, 0), { message: 'division by zero' });
  });
});
