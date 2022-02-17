const service = require("./service");
describe("Testes de implementações", () => {
  test("Com mock função recebe 3 parâmetros e retorna a multiplicação dos mesmos", () =>{
    service.randomNumber = jest.fn().mockImplementationOnce((a,b,c) => a * b * c);

    expect(service.randomNumber(2,4,6)).toBe(48);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2,4,6);
  });

  test("Com mock função recebe 1 parâmetro e retorna o dobro", () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber.mockImplementation(a => a * 2);

    expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2);
  });
});