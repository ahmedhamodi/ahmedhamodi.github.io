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
              Looking to Hire?
            </span>
            <h5
              style={{
                color: "#d3d3d3",
                fontWeight: "0px",
                width: 500,
                margin: "auto",
              }}
            >
              Looking for a contractor or freelance developer? Looking to hire a
              SWE or PM for a full time position? Please reach out below!
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
            />
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
