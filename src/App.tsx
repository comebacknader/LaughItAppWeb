import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Root from "./Root";
import Home from './components/Home';

class App extends React.Component<any, any> {
    render() {
        return (
            <>
                <Router>
                    <Switch> 
                        <Route exact path="/" component={Home} />
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