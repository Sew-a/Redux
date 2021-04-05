import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";

import Header from './Header';
import "./style/main.scss";

const App = () => {
    return (
        <main>
           <Router>
           <Header />
            <div>
             <Route path="/" exact component={StreamList} />
             <Route path="/streams/new" component={StreamCreate} />
             <Route path="/streams/edit" component={StreamEdit} />
             <Route path="/streams/delete" component={StreamDelete} />
             <Route path="/streams/show" component={StreamShow} />
            </div>
           </Router>
        </main>
    )
}

export default App
