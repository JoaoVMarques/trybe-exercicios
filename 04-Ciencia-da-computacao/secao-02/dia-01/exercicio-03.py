from abc import abstractmethod
from math import PI

class FiguraGeometrica:
    @abstractmethod
    def area(self):
        return NotImplementedError
    
    def perimetro(self):
        return NotImplementedError

class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.__lado = lado

    def area(self):
        return self.__lado * self.__lado
    
    def perimetro(self):
        return self.__lado * 4
    
class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.__base = base
        self.__altura = altura

    def area(self):
        return (self.__base * self.__altura) / 2
    
    def perimetro(self):
        return (self.__base * 2) + (self.__altura * 2)
    
class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.__raio = raio

    def area(self):
        return PI * self.__raio * self.__raio
    
    def perimetro(self):
        return 2 * PI * self.__raio
    
