const service = require("./service");

test("Verfica se a função foi chamada, qual seu retorno e quantas vezes foi chamada e com dois parametros", () =>{
    service.randomNumber = jest.fn().mockImplementationOnce((a,b) => a/b);

    expect(service.randomNumber(20,2)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(20,2);
});