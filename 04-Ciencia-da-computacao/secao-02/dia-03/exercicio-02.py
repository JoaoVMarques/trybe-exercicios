from abc import ABC, abstractmethod

VERDE = "\033[92m"
RESET = "\033[0m"

class Alarme:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotinas(self, rotina):
        self.__rotinas.append(rotina)

    def acionar_rotinas(self):
        for rotinas in self.__rotinas:
            rotinas.adicionar()
    
    def despertar(self):
        print(f"{VERDE}*Despertador está tocando*{RESET}")
        self.acionar_rotinas()

class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        pass

class AcionarLuz(Acionador):
    def __init__(self):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print(f"{VERDE} Luzes ligadas {RESET}")

class AcionadorComputador(Acionador):
    def __init__(self):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Ligar o computador")


alarme = Alarme()
alarme.despertar()