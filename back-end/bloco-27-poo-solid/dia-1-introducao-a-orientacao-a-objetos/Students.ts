// Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina.
// Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class Student {
  private _enrollment: string;  
  private _name: string;
  private _examsGrades: number[] = Array(); 
  private _worksGrades: number[] = Array();
 

  constructor(enrollment: string, name: string, examsGrade: number[],worksGrade: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = examsGrade;
    this.worksGrades = worksGrade;
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

   public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

   public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if(value.length !== 4) {
      throw new Error("Student should have 4 exams grade");      
    }
    this._examsGrades = value;
  }

   public get worksGrades(): number[] {
    return this._worksGrades;
  }
  public set worksGrades(value: number[]) {
    if(value.length !== 2) {
      throw new Error("Student should have 2 works grade");      
    }
    this._worksGrades = value;
  }
}

const student1 = new Student('kasfdksnf', 'Quesia', [9, 9, 10, 10], [9, 9]);
console.log(student1);

const student2 = new Student('erbtbvbrw', 'Que', [10, 10, 10, 10], [10, 10]);
console.log(student2);
