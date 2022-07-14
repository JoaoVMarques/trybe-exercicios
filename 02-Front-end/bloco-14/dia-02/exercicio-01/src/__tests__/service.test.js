const service = require('../services/service');
const API = require('../services/API');

describe('1 - Testando função randomNumber', () => {
  it('ver se função foi chamada.', () => {
    service.randomNumber = jest.fn();
    service.randomNumber();

    expect(service.randomNumber).toHaveBeenCalled();
  });

  it('retorno da função é 10, e se foi chamado somente uma vez', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    const number = service.randomNumber();

    expect(number).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
})

describe('2 - Receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
  it('a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => (a / b));
    const number = service.randomNumber(4, 2);

    expect(service.randomNumber).toHaveBeenCalled();
    expect(number).toBe(2);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
})

describe('3 - Receber tres parâmetros e retornar a multiplicação dos parametros.', () => {
  it('a função foi chamada e a nova implementação de multiplicação foi aplicada.', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => (a * b * c));
    const number = service.randomNumber(3, 2, 2);

    expect(service.randomNumber).toHaveBeenCalled();
    expect(number).toBe(12);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })

  it('função que recebe um parâmetro e retorna seu dobro.', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber = jest.fn().mockImplementation((a) => (a * 2));
    const number = service.randomNumber(8);

    expect(service.randomNumber).toHaveBeenCalled();
    expect(number).toBe(16);
  })
})

describe('4 - testando implementações com o Mock.', () => {
  it('A função upperCaseText: agora ela deve retornar a string em caixa baixa.', () => {
    jest.spyOn(service, "upperCaseText").mockImplementation(a => a.toLowerCase());
    const text = 'SoU uMa frase CoM CAPS e sem!'
    const lower = service.upperCaseText(text);

    expect(lower).toBe('sou uma frase com caps e sem!');
    expect(service.upperCaseText).toHaveBeenCalledTimes(1);
  })

  it('A função firstLetter: agora ela deve retornar a string última letra de uma string.', () => {
    jest.spyOn(service, "firstLetter").mockImplementation((text) => text.slice(-1));
    const text = 'Banana'
    const lastLetter = service.firstLetter(text);

    expect(lastLetter).toBe('a');
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
  })

  it('A função concatString: agora ela deve retornar a string 3 strings concatenadas.', () => {
    jest.spyOn(service, "concatString").mockImplementation((first, second, third) => `${first} ${second} ${third}`);
    const expectedText = 'Sopa lasanha pizza'
    const text = service.concatString('Sopa', 'lasanha', 'pizza');

    expect(text).toBe(expectedText);
    expect(service.concatString).toHaveBeenCalledTimes(1);
  })

  it("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
    service.upperCaseText.mockRestore();
    const text = 'lowerCase';
    const upperText = service.upperCaseText(text);

    expect(upperText).toBe('LOWERCASE')
  })
})

describe('testando a requisição a API', () => {
  API.fetchDog = jest.fn();
  afterEach(API.fetchDog.mockReset);

  it('testando requisição caso a promise resolva', async () => {
    API.fetchDog.mockResolvedValue('request success')

    API.fetchDog();
    expect(API.fetchDog).toHaveBeenCalled();
    expect(API.fetchDog).toHaveBeenCalledTimes(1);
    await expect(API.fetchDog()).resolves.toBe("request success");
    expect(API.fetchDog).toHaveBeenCalledTimes(2);
  })

  it('testando requisição caso a promise seja rejeitada', async () => {
    API.fetchDog.mockRejectedValue("request failed");

    await expect(API.fetchDog()).rejects.toMatch("request failed");
    expect(API.fetchDog).toHaveBeenCalledTimes(1);
  })
})