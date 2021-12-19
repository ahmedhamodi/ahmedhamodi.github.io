import React, { Component } from "react";
import Projects from "./SpotlightProjects.js";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check out my 3 spotlight projects</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {Projects.map((projects) => (
                <div key={projects.title} className="columns portfolio-item">
                  <a
                    href={projects.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={projects.title}
                  >
                    <div className="item-wrap">
                      <img
                        alt={projects.title}
                        src={projects.image}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "175px",
                        }}
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{projects.title}</h5>
                          <p>{projects.category}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
