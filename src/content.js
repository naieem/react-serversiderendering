import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './about'
import Home from './home';
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Content = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Switch>
    </main>
)

export default Content;
