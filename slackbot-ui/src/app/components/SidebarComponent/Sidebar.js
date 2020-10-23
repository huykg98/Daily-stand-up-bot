import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { inject, observer } from 'mobx-react';

@inject("LanguageStore")
@observer
class SidebarComponent extends Component {

    constructor(props){
        super(props);
        this.lang = this.props.LanguageStore.locale.locale
    }
    
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
    }

    render() {
        const logoStyle= {
            width: "100%",
            height: "100%"
        };

        return (
            <div >
                <nav className="side-navbar">
                    <div className="side-navbar-wrapper">
                        {/* <!-- Sidebar Header    --> */}
                        <div className="sidenav-header d-flex align-items-center justify-content-center">
                            {/* <!-- User Info--> */}
                            <div className="sidenav-header-inner text-center"><img style={logoStyle} src={`${process.env.PUBLIC_URL}/hrm-ui/img/code88-logo.png`} alt="logo" className="img-fluid logo-sidebar" />

                            </div>
                            {/* <!-- Small Brand information, appears on minimized sidebar--> */}
                            {/* <div className="sidenav-header-logo"><a href="index.html" className="brand-small text-center"> <strong>B</strong><strong className="text-primary">D</strong></a></div> */}
                        </div>
                        {/* <!-- Sidebar Navigation Menus--> */}
                        <div className="main-menu">
                            <h5 className="sidenav-heading">Main</h5>
                            <ul id="side-main-menu" className="side-menu list-unstyled">
                                <li><a href="index.html"> <i className="icon-home"></i>Home</a></li>
                                <li><a href="#formsDropdown" aria-expanded="false" data-toggle="collapse"> <i className="fa fa-clipboard"></i>Leave </a>
                                    <ul id="formsDropdown" className="collapse list-unstyled ">
                                        <li><Link to={`/${this.lang}/apply-leave`}><i className="fa fa-edit"></i>Apply</Link></li>

                                        <li><Link to={`/${this.lang}/leave-summary`}><i className="icon-grid" />Leave Summary</Link></li>
                                        <li><Link to={`/${this.lang}/my-leave`}><i className="fa fa-bus"></i>My Leave</Link></li>
                                        <li><Link to={`/`}><i className="fa fa-list-ul"></i>Leave List</Link></li>
                                    </ul>
                                </li>
                                <li><a href="#chartsDropdown" aria-expanded="false" data-toggle="collapse"> <i className="fa fa-calendar"></i>Time </a>
                                    <ul id="chartsDropdown" className="collapse list-unstyled ">
                                        <li><a href="charts.html">Charts</a></li>
                                        <li><a href="charts-gauge-sparkline.html">Gauge + Sparkline</a></li>
                                    </ul>
                                </li>
                                <li><a href="#tablesDropdown" aria-expanded="false" data-toggle="collapse"> <i className="fa fa-gift"></i>Benefits </a>
                                    <ul id="tablesDropdown" className="collapse list-unstyled ">
                                        <li><a href="tables.html">Bootstrap tables</a></li>
                                        <li><a href="tables-datatable.html">Datatable</a></li>
                                    </ul>
                                </li>
                                <li><a href="#componentsDropdown" aria-expanded="false" data-toggle="collapse"> <i className="fa fa-users"></i>ESS </a>
                                    <ul id="componentsDropdown" className="collapse list-unstyled ">
                                        <li><a href="components-cards.html">Cards</a></li>
                                        <li><a href="components-calendar.html">Calendar</a></li>
                                        <li><a href="components-gallery.html">Gallery</a></li>
                                        <li><a href="components-loading-buttons.html">Loading buttons</a></li>
                                        <li><a href="components-map.html">Maps</a></li>
                                        <li><a href="components-notifications.html">Notifications</a></li>
                                        <li><a href="components-preloader.html">Preloaders</a></li>
                                    </ul>
                                </li>
                                <li><a href="#pagesDropdown" aria-expanded="false" data-toggle="collapse"> <i className="fa fa-bug"></i>Bug Tracker </a>
                                    <ul id="pagesDropdown" className="collapse list-unstyled ">
                                        <li><a href="pages-contacts.html">Contacts</a></li>
                                        <li><a href="pages-invoice.html">Invoice</a></li>
                                        <li><a href="login.html">Login page</a></li>
                                        <li><a href="login-2.html">Login v.2 <span className="badge badge-info">New</span></a></li>
                                        <li><a href="pages-profile.html">Profile</a></li>
                                        <li><a href="pages-pricing.html">Pricing table</a></li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                        
                    </div>
                </nav>
            </div>
        );
    }
}


export default SidebarComponent;