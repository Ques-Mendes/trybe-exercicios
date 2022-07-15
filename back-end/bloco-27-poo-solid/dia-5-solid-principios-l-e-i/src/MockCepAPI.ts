import IFooCepAPI from "./interfaces/fooCepAPI.interface";

class MockCepAPI implements IFooCepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço mocado para o "CEP:${cep}, n°:${number}" é "endereço mocado"`;
  }
  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP mocado para: "${address}, n°: ${number}" é "CEP mocado"`;
  }
}

export default MockCepAPI;