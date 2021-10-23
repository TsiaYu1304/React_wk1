import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";

function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/ProductDetail" component={ProductDetail}/>

        </Switch>
        </BrowserRouter>


    );
}

export default App;
