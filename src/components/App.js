import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//components
import Header from './header';
import Footer from './footer';
import Home from './home';
import Project from './projects';
import Contact from './contact';

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact activeClassname="is-active" path ="/portoflio" component={Project}/>
                    <Route exact activeClassname="is-active" path ="/" component={Home}/>
                    <Route exact activeClassname="is-active" path ="/contact" component={Contact}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;