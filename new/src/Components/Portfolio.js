import React, { Component } from "react";
import Projects from "./SpotlightProjects.js";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = Projects.map(function (projects) {
        var projectImage = projects.image;

        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} target="_blank" title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check out my 3 spotlight projects</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
