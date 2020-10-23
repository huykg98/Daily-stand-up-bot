import React, { Component } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import {} from "react-bootstrap";

@inject("LanguageStore")
@observer
class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.lang = this.props.LanguageStore.locale.locale;
  }

  render() {
    const logoStyle = {
      width: "100%",
      height: "100%",
    };

    return (
      <div>
        <nav className="side-navbar">
          <div className="side-navbar-wrapper">
            <div className="sidenav-header d-flex align-items-center justify-content-center">
              <div className="sidenav-header-inner text-center">
                <img
                  style={logoStyle}
                  src={`${process.env.PUBLIC_URL}/hrm-ui/img/code88-logo.png`}
                  alt="logo"
                  className="img-fluid logo-sidebar"
                />
              </div>
            </div>
            <div className="main-menu">
              <h5 className="sidenav-heading">Main</h5>
              <ul id="side-main-menu" className="side-menu list-unstyled">
                {/* <li><a href="index.html"> <i className="icon-home"></i>Home</a></li> */}
                <li>
                  <a
                    href="#formsDropdown"
                    aria-expanded="false"
                    data-toggle="collapse"
                  >
                    <i className="fa fa-clipboard"></i>Daily Standup
                  </a>
                  <ul id="formsDropdown" className="collapse list-unstyled ">
                    <li>
                      <Link to={`/`}>
                        <i className="fa fa-list-ul"></i>Summary Standup
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${this.lang}/my-standups`}>
                        <i className="fa fa-list-ul" />
                        My Standups{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${this.lang}/questions-template`}>
                        <i className="icon-grid"></i>Questions template
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${this.lang}/report`}>
                        <i className="icon-grid"></i>Report
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#chartsDropdown"
                    aria-expanded="false"
                    data-toggle="collapse"
                  >
                    <i className="fa fa-calendar"></i>Time{" "}
                  </a>
                  <ul
                    id="chartsDropdown"
                    className="collapse list-unstyled "
                  ></ul>
                </li>
                <li>
                  <a
                    href="#tablesDropdown"
                    aria-expanded="false"
                    data-toggle="collapse"
                  >
                    <i className="fa fa-gift"></i>Benefits{" "}
                  </a>
                  <ul
                    id="tablesDropdown"
                    className="collapse list-unstyled "
                  ></ul>
                </li>
                <li>
                  <a
                    href="#componentsDropdown"
                    aria-expanded="false"
                    data-toggle="collapse"
                  >
                    <i className="fa fa-users"></i>ESS{" "}
                  </a>
                  <ul
                    id="componentsDropdown"
                    className="collapse list-unstyled "
                  ></ul>
                </li>
                <li>
                  <a
                    href="#pagesDropdown"
                    aria-expanded="false"
                    data-toggle="collapse"
                  >
                    <i className="fa fa-bug"></i>Bug Tracker{" "}
                  </a>
                  <ul
                    id="pagesDropdown"
                    className="collapse list-unstyled "
                  ></ul>
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
