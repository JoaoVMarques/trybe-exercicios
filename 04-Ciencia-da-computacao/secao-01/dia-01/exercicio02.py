def name_ladder(name):
    loop = len(name)
    for letter in name:
        print(name[:loop])
        loop -= 1



if __name__ == "__main__":
    name = input("Digite seu nome: ")   
    name_ladder(name)