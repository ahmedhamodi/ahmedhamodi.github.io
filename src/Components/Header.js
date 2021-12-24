import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    if (this.props.data) {
      var linkedin = this.props.data.linkedin;
      var github = this.props.data.github;
      var firstName = this.props.data.firstname;
      var lastName = this.props.data.lastname;
      var description = this.props.data.description;
      var currentRoles = this.props.data.currentroles;
      var previousRoles = this.props.data.prevroles;
    }

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <div>
              <h1 className="responsive-headline">
                <span>
                  <span style={{ color: "lightgray" }}>{firstName}</span>{" "}
                  <span style={{ color: "#11abb0" }}>{lastName}</span>
                </span>
              </h1>
              <h3>
                <span style={{ backgroundColor: "black", padding: 5 }}>
                  <span style={{ padding: 5 }}>
                    <em>{description}</em>
                  </span>
                  <br />
                  <span style={{ padding: 5 }}>
                    <em>Currently: {currentRoles}</em>
                  </span>
                  <br />
                  <span style={{ padding: 5 }}>
                    <em>Previously: {previousRoles}</em>
                  </span>
                </span>
              </h3>
              <hr />
              <ul className="social">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button btn project-btn"
                >
                  <i className="fa fa-linkedin"></i>LinkedIn
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button btn github-btn"
                >
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
