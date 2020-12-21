import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className} style={{ color: "white" }}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <span
              style={{
                fontSize: "40px",
                color: "white",
                fontWeight: "800",
                margin: "30px 0px",
                display: "inline-block",
                fontVariant: "small-caps",
              }}
            >
              Need a Developer?
            </span>
            <h5 style={{ color: "#d3d3d3", fontWeight: "0px" }}>
              Looking for a co-op student for the Fall 2021 term? Please reach
              out!
            </h5>
            <hr
              style={{
                maxWidth: "100px",
                borderWidth: "2px",
                borderColor: "#11ABB0",
                margin: "auto",
                marginTop: "50px",
                marginBottom: "50px",
                background: "#11ABB0",
              }}
            ></hr>
            <ul className="social-links">{networks}</ul>
            <ul className="copyright">
              <li style={{ color: "white" }}>
                Copyright &copy;
                {" " + new Date().getFullYear()}
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
