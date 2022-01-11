// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const errorMessage = new Error('Não temos esse pokémon para você :(');
    function callback(error, result) {
        expect(error).toEqual(errorMessage);
        done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Xablau', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const successMessage = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    function callback(error, result) {
        expect(result).toBe(successMessage);
        done();
    }
    getPokemonDetails((pokemon) =>pokemon.name === 'Charmander', callback);
  });
});