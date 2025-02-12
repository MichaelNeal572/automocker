import { DependencyClass } from './DependencyClass'

export class ParentClass {
  constructor(private dependency: DependencyClass) {}

  sum() {
    return 1 + this.dependency.returnRandomNumber()
  }

  async sumWithAsyncStep() {
    return 1 + (await this.dependency.returnRandomNumberAsynchronously())
  }
}
