import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";


import home from "./home";
import profile from "./profile";
import contact from "./contact";
import login from "./login";
import register from "./register";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>PSYCHOGRAM</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
						<li><NavLink to="/login">Login</NavLink></li>
						<li><NavLink to="/register">Register</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={home}/>
                        <Route path="/profile" component={profile}/>
                        <Route path="/contact" component={contact}/>
						<Route path="/login" component={login}/>
						<Route path="/register" component={register}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;