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

describe("Teste de implementações com mock ex 4", () => {
  test("Ao receber uma str a retorna em caixa baixa", () => {
    const firstFunction = jest.spyOn(service, "firstF").mockImplementation(a => a.toLowerCase());

    expect(firstFunction("UPPERCASE")).toBe("uppercase");
    expect(service.firstF).toHaveBeenCalledWith("UPPERCASE");
  })
  test("Ao receber uma str retorna a última letra", () => {
      // índice do último caractere em uma string declarada 'length-1'
      const secondFunction = jest.spyOn(service, "secondF").mockImplementation(a => a.charAt(a.length - 1));

      expect(secondFunction("letter")).toBe("r");
      expect(service.secondF).toHaveBeenCalledWith("letter");
  })
  test("Ao receber 3 str deve concatená-las", () => {
      const thirdFunction = jest.spyOn(service, "thirdF").mockImplementation((a, b, c) => a.concat(b, c));

      expect(thirdFunction("Que", "si", "a")).toBe("Quesia");
      expect(service.thirdF).toHaveBeenCalledWith("Que", "si", "a");
  });
  test("Restaura a primeira função e vrifica se ela retorna caixa alta", () => {
      service.firstF.mockRestore();

      expect(service.firstF("lowercase")).toBe("LOWERCASE");
  })
});

describe("Testes para a api dog pictures", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("Teste se a promisse for resolvida", async () => {
    service.fetchDog.mockResolvedValue("request sucess");
    service.fetchDog();

    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request sucess");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });
   test("Teste se a promisse for rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
   });  
});
