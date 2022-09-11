const supertest = require("supertest");

const server = require("../../app");

describe("Calculate", () => {
  it("POST /calculate: action: sum ", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "sum",
      num1: 10,
      num2: 20,
    });

    expect(response.status).toBe(200);
    const actualResult = response.text;
    const expectedResult = JSON.stringify({ result: 30 });
    expect(actualResult).toBe(expectedResult);
  });
  it("POST /calculate: action: subtract ", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "subtract",
      num1: 30,
      num2: 10,
    });

    expect(response.status).toBe(200);
    const actualResult = response.text;
    const expectedResult = JSON.stringify({ result: 20 });
    expect(actualResult).toBe(expectedResult);
  });
  it("POST /calculate: action: divide ", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "divide",
      num1: 30,
      num2: 10,
    });

    expect(response.status).toBe(200);
    const actualResult = response.text;
    const expectedResult = JSON.stringify({ result: 3 });
    expect(actualResult).toBe(expectedResult);
  });
  it("POST /calculate: action: multiply ", async () => {
    const response = await supertest(server).post("/calculate").send({
      action: "multiply",
      num1: 10,
      num2: 20,
    });

    expect(response.status).toBe(200);
    const actualResult = response.text;
    const expectedResult = JSON.stringify({ result: 200 });
    expect(actualResult).toBe(expectedResult);
  });
});
