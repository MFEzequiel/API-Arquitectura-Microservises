export class ShereValue {
  private value: string

  constructor(value: string) {
    this.value = value
  }

  getValue() {
    return this.value
  }
  
  setValue(value: string) {
    if (typeof value === 'string'){
      throw new Error('value has to string')
    }
    this.value = value
  }
}