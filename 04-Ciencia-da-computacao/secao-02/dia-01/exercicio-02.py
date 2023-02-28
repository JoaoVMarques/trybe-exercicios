import statistics

class Estatistica:
    def __init__(self, numeros):
        self.__numeros = list()
        self.__numeros = numeros

    def __str__(self):
        return f"""
        - Media: {self.media()}
        - Mediana: {self.mediana()}
        - Moda: {self.moda()}
        ------------------
        """

    def media(self):
        sum = 0
        for n in self.__numeros:
            sum += n
        media = sum / len(self.__numeros)
        return f"A media é: {media}"
    
    def mediana(self):
        mediana = statistics.median(self.__numeros)
        return f"A mediana dos valores é: {mediana}"
    
    def moda(self):
        moda = statistics.mode(self.__numeros)
        return f"A moda dos valores é: {moda}"

# estatistica = Estatistica([1, 2, 3, 4])
# print(estatistica)