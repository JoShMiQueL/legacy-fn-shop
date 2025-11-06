// @vitest-environment jsdom
import { describe, expect, it } from "vitest"

// A simple function to test
function sum(a: number, b: number): number {
  return a + b
}

describe("Basic Test Suite", () => {
  it("should add two numbers correctly", () => {
    // Arrange
    const a = 2
    const b = 3
    const expected = 5

    // Act
    const result = sum(a, b)

    // Assert
    expect(result).toBe(expected)
  })

  it("should handle negative numbers", () => {
    expect(sum(-1, 1)).toBe(0)
  })
})
