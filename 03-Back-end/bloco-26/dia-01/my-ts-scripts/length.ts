const unidades: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(valor: number, unidadeBase: string, unidadeAConverter: string) {
  const uniBaseIndex = unidades.indexOf(unidadeBase);
  const uniAConverterIndex = unidades.indexOf(unidadeAConverter);
  const expoente:number = (uniAConverterIndex - uniBaseIndex);

  return valor * Math.pow(10, expoente);
}

console.log(convert(1, 'm', 'km'));