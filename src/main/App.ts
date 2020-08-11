import { injectable, inject } from "inversify";
import TestService from "./services/TestService";
import { WINDOW } from "./consts/tokens";

@injectable()
export class App {
  private _test: TestService;
  private _win: Window;

  public constructor(test: TestService, @inject(WINDOW) win: Window) {
    console.log(test);
    this._test = test;
    this._win = window;
  }

  public doIt(): void {
    this._test.sayHi();
    console.log(`Count: ${this._test.count}`);
  }

  public printNavigator(): void {
    console.log(this._win.navigator.userAgent);
  }
}

export default App;
