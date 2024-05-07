function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

describe('Test sumOfTwoNumber function', () => {
  it('equals true', () => {
    expect(sumOfTwoNumbers(1, 2)).toBe(3);
  });
});
