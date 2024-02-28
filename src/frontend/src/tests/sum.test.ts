import { describe, expect, test } from "@jest/globals";
import { sum } from "../utils/sum";

describe('Number tests', ()=>{
  test("should be 3", ()=> {
    const result = sum(1,2);
    expect(result).toBe(3)
  })
  test("should be 4", ()=> {
    const result = sum(2,2);
    expect(result).toBe(4)
  })
})

describe('Number tests 2', ()=>{
  test("should be 3", ()=> {
    const result = sum(66,2);
    expect(result).toBe(68)
  })
  test("should be 4", ()=> {
    const result = sum(22,2);
    expect(result).toBe(24)
  })
})