import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./css/theme";
import App from "./containers/app";
import { kPaths } from "./helpers/constants";
import reduxStore from "./store/index";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={reduxStore}>
            <BrowserRouter>
                <Route path={kPaths.HOME} component={App} />
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
