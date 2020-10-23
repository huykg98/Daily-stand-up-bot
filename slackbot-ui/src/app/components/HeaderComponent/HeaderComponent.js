import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HeaderComponent extends Component{

    componentDidMount(){
        let scripts = [
            { src: `${process.env.PUBLIC_URL}/hrm-ui/js/front.js` }
        ]
        //Append the script element on each iteration
        scripts.map(item => {
            const script = document.createElement("script")
            script.src = item.src
            script.async = true
            document.body.appendChild(script)
        });

        //Fix main content width not sync with sidebar
        let sidebar = document.getElementsByClassName('side-navbar')
        let page = document.getElementsByClassName('page');
        if(sidebar[0].classList.contains('shrink')){
            page[0].classList.add("active");
        }
        if(sidebar[0].classList.contains('show-sm') && window.innerWidth < 1999){
            page[0].classList.add("active-sm");
        }
        
    }


    render(){

        const menuBtn = {
            cursor: 'pointer'
        }
        
        return(
        <div >
            <header className="header">
                <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-holder d-flex align-items-center justify-content-between">
                    <div className="navbar-header">
                        <a id="toggle-btn" className="menu-btn" style={menuBtn}>
                            <i className="icon-bars"></i></a>
                        <div className="brand-text d-none d-md-inline-block">
                            <strong className="text-white">Slack bot Management</strong>
                        </div>
                    </div>
                    <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                       
                        {/* <!-- Log out--> */}
                        <li className="nav-item">
                            <Link to="/login"> 
                                <span className="d-none d-sm-inline-block">Logout</span>
                                <i className="fa fa-sign-out"></i>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </header>
        </div>
        )
    }

}

export default HeaderComponent;