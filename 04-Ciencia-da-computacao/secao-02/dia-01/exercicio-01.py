class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        self.__volume += 1
    
    def diminuir_volume(self):
        self.__volume -= 1

    def modificar_canal(self, canal):
        if 0 < canal < 100:
            self.__canal = canal
            return
        raise ValueError("O canal deve ser entre 1 e 99")
    
    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self):
        return f"""
        - Volume: {self.__volume}
        - Canal: {self.__canal}
        - Tamanho: {self.__tamanho}
        - Ligada? {self.__ligada}
        ------------------
        """

# tv = TV("10")
# print(tv)
# tv.ligar_desligar()
# print(tv)