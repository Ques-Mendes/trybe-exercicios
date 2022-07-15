class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  
  public get name() : string {
    return this._name;
  }  
  public set name(v : string) {
    this.validateName(v);
    this._name = v;
  }

  
  public get birthDate() : Date {
    return this._birthDate;
  }  
  public set birthDate(v : Date) {
    this.validateBirthDate(v);
    this._birthDate = v;
  }
  
  private validateName(value: string): void {
    if (value.length < 3) throw new Error('Name should have at least 3 characters.');
  }
    
  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('Invalid BirthDate')
  }
  
}

export default Person;