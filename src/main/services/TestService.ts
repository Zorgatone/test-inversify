import { injectable } from "inversify";

@injectable()
export class TestService {
  private _count: number;

  public constructor() {
    console.log("TestService");
    this._count = 0;
  }

  public sayHi(): void {
    console.log("Hi!");
    ++this._count;
  }

  public get count() {
    return this._count;
  }
}

export default TestService;
