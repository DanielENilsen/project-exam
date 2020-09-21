import React from 'react';
import HomePage from "../Home/HomePage";
import ViewAll from "../viewAll/ViewAll";
import LoginPage from "../login/LoginPage"
import Logo from "../../img/Logo.png";
import PageFooter from "../footer/Footer";



import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";



function HeaderLayout () {   
    return(     
        <div>  
            <Router>
                <header className="headerSection">                  
                    <div className="imageIcon">
                         <img src={Logo}  to="/" className="imageIcon__image"/>
                    </div>
                    <div class = "inner">
                        <NavLink className = "inner__link" to="/">Home</NavLink>
                        <NavLink className = "inner__link" to="/viewall">View All</NavLink>
                        <NavLink className = "inner__link" to="login">Login</NavLink>
                    </div>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/viewall" exact component={ViewAll} />
                        <Route path="/login" exact component={LoginPage} />
                    </Switch>       
                </header>
            </Router>
        <PageFooter />
    </div> 
    );
}

export default HeaderLayout;