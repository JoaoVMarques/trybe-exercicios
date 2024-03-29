VERDE = "\033[92m"
VERMELHO = "\033[91m"
LARANJA = "\033[93m"
RESET = "\033[0m"

class Log:
    def dispara_log(self, message):
        return message
    
class LogSuccess:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{self.log.dispara_log(message)}{RESET}"
    
class LogWarning:
    def __init__(self, log):
        self.log = log
    
    def dispara_log(self, message):
        return f"{LARANJA}{self.log.dispara_log(message)}{RESET}"

class LogError:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{self.log.dispara_log(message)}{RESET}"

log = Log()
print(LogSuccess(log).dispara_log("O sistema esta funcionando!"))
print(LogWarning(log).dispara_log("O sistema está lento!"))
print(LogError(log).dispara_log("O sistema está com erros!"))
