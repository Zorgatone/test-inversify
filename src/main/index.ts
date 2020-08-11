import { Container } from "inversify";

import App from "./App";
import TestService from "./services/TestService";
import { WINDOW } from "./consts/tokens";

const cont = new Container();

cont.bind(TestService).toSelf().inSingletonScope();
cont.bind<Window>(WINDOW).toConstantValue(window);

const app1 = cont.resolve(App);
const app2 = cont.resolve(App);

app1.doIt();
app2.doIt();

app1.printNavigator();
