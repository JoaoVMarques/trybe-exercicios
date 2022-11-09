class student {
  private _matricula: string;
  private _nome: string;
  private _notaProvas: number[];
  private _notaTrabalhos: number[];

  constructor(matricula: string, nome: string) { 
    this._matricula = matricula;
    this._nome = nome;
    this._notaProvas = [];
    this._notaTrabalhos = [];
  }

  calcularNotas(): number {
    const totalNotes = [...this._notaProvas, ...this._notaTrabalhos];
    return totalNotes.reduce((sum, current) => sum + current, 0)
  }

  calcularMedia(): number {
    const notas = this.calcularNotas();
    const divider = this._notaProvas.length + this._notaTrabalhos.length;
    return Math.round(notas / divider);
  }

  set notasProvas(value: number[]) {
    if(value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this._notaProvas = value;
  }

  set notasTrabalhos(value: number[]) {
    if(value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    }
    this._notaTrabalhos = value;
  }

}

const student1 = new student('40444', 'João Marques');
student1.notasProvas = [4, 6, 4, 8];
student1.notasTrabalhos = [2, 4];
console.log(student1);
console.log(student1.calcularMedia());