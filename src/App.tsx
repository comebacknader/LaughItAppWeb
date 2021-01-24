import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Root from "./Root";
import Impressions from './components/Impressions';

class App extends React.Component<any, any> {
    render() {
        return (
            <>
                <Router>
                    <Switch> 
                        <Route exact path="/" component={Impressions} />
                    </Switch>
                </Router>
            </>
        );
    }
}

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById("root") || document.createElement("div")
);



export default App; 