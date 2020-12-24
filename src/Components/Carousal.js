import React, { Component } from "react";
import { css } from "emotion";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Swipeable } from "react-swipeable";
import Projects from "./Projects.js";

const useStyles = makeStyles((theme) => ({
  rightArrow: {
    cursor: "pointer",
    position: "absolute",
    align: "left",
  },
  leftArrow: {
    cursor: "pointer",
    position: "absolute",
  },
  testimonialSmall: {
    "@media (min-width: 960px)": { display: "None" },
  },
  testimonialLarge: {
    "@media (max-width: 959px)": { display: "None" },
  },
  picture: {
    width: "400px",
    height: "250px",
    "@media (max-width: 480px)": {
      width: "150px",
      height: "150px",
    },
    justify: "left",
    borderRadius: "10%",
  },
  header: {
    fontFamily: "Nunito Sans",
    fontSize: "22px",
    "@media (max-width: 480px)": {
      fontSize: "15px",
    },
    textTransform: "uppercase",
    fontWeight: "bolder",
    textAlign: "center",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "60px",
  },
  carousal: {
    alignItems: "center",
    paddingTop: "4%",
    paddingBottom: "8%",
    backgroundColor: "#f1f1f1",
  },
  paragraph: {
    margin: "auto",
    fontFamily: "Nunito",
    fontSize: "20px",
    "@media (max-width: 480px)": {
      fontSize: "15px",
    },
    paddingLeft: "40px",
    paddingRight: "40px",
    fontStyle: "italic",
    color: "#484848",
  },
  title: {
    fontSize: "22px",
    "@media (max-width: 480px)": {
      fontSize: "18px",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    fontFamily: "Nunito",
    fontWeight: "bold",
    color: "#484848",
  },
  image: {
    width: "100%",
    height: "100%",
    padding: "2%",
    borderRadius: "10%",
    "@media (min-width: 960px)": { textAlign: "center" },
  },
}));

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes} />;
  };
}

class Carousal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: Projects[0],
      active: 0,
      numQuotes: Projects.length,
    };
  }

  timer() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.HandleRightArrowClick(), 8000);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.HandleRightArrowClick(), 8000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  HandleRightArrowClick = (event) => {
    if (this.state.active < this.state.numQuotes - 1) {
      this.setState({
        current: Projects[parseInt(this.state.active) + 1],
        active: parseInt(this.state.active) + 1,
      });
    } else if (this.state.active === this.state.numQuotes - 1) {
      this.setState({ current: Projects[0], active: 0 });
    }
    this.timer();
  };

  HandleLeftArrowClick = (event) => {
    if (this.state.active > 0) {
      this.setState({
        current: Projects[this.state.active - 1],
        active: this.state.active - 1,
      });
    } else if (this.state.active === 0) {
      this.setState({
        current: Projects[this.state.numQuotes - 1],
        active: this.state.numQuotes - 1,
      });
    }
    this.timer();
  };

  HandleSetClick = (event) => {
    this.setState({
      active: event.target.getAttribute("data-image"),
      current: Projects[event.target.getAttribute("data-image")],
    });
    this.timer();
  };

  render() {
    const classes = this.props.classes;

    return (
      <Swipeable
        onSwipedRight={this.HandleLeftArrowClick}
        onSwipedLeft={this.HandleRightArrowClick}
      >
        <section id="portfolio">
          <div className={classes.carousal}>
            <div className="twelve columns collapsed">
              <h1
                style={{
                  width: "98vw",
                  textAlign: "center",
                }}
              >
                Check out some of my other projects
              </h1>
            </div>
            <Grid
              container
              item
              alignItems="center"
              justify="center"
              id="projects"
            >
              <Grid
                container
                item
                xs={1}
                spacing={1}
                alignItems="center"
                justify="center"
              >
                <img
                  className={classes.leftArrow}
                  src={"images/arrow_left.png"}
                  onClick={this.HandleLeftArrowClick}
                  alt={"Testimonial Left Arrow"}
                />
              </Grid>
              <Grid
                container
                item
                xs={9}
                sm={9}
                md={4}
                lg={3}
                spacing={1}
                alignItems="center"
                justify="center"
              >
                <p className={classes.picture}>
                  <img
                    className={classes.image}
                    src={this.state.current.image}
                    alt={this.state.current.title}
                  />
                </p>
              </Grid>
              <Grid
                container
                item
                xs={1}
                spacing={1}
                alignItems="center"
                justify="center"
                className={classes.testimonialSmall}
              >
                <img
                  className={classes.rightArrow}
                  src={"images/arrow_right.png"}
                  onClick={this.HandleRightArrowClick}
                  alt={"Testimonial Right Arrow"}
                />
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={9}
                md={6}
                lg={5}
                spacing={1}
                justify="center"
              >
                <p className={classes.title}>{this.state.current.title}</p>
                <a
                  href={this.state.current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ paddingLeft: "10px" }}
                >
                  <i
                    className={this.state.current.className}
                    style={{ color: "black" }}
                  ></i>
                </a>
                <p className={classes.paragraph}>
                  {this.state.current.category}
                </p>
              </Grid>
              <Grid
                container
                item
                xs={1}
                spacing={1}
                alignItems="center"
                justify="center"
                className={classes.testimonialLarge}
              >
                <img
                  className={classes.rightArrow}
                  src={"images/arrow_right.png"}
                  onClick={this.HandleRightArrowClick}
                  alt={"Testimonial Right Arrow"}
                />
              </Grid>
            </Grid>
            <div
              className={css`
                display: flex;
                justify-content: center;
                padding-top: 50px;
                span {
                  height: 20px;
                  width: 20px;
                  margin: 0 3px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                }
                span::before {
                  content: "";
                  height: 13px;
                  width: 13px;
                  background-color: #d4d4d4;
                  border-radius: 50%;
                  transition: background-color 0.3s ease;
                }
                span:hover::before {
                  background-color: #11abb0;
                }
                span[data-image="${this.state.active}"]::before {
                  background-color: #11abb0;
                }
              `}
            >
              {Object.keys(Projects).map((index) => (
                <span
                  onClick={this.HandleSetClick}
                  data-image={index}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>
      </Swipeable>
    );
  }
}

Carousal = withMyHook(Carousal);
export default Carousal;
