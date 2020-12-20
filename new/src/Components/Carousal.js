import React, { Component } from "react";
import { css } from "emotion";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Swipeable } from "react-swipeable";

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
    width: "200px",
    height: "200px",
    "@media (max-width: 480px)": {
      width: "150px",
      height: "150px",
    },
    justify: "left",
    borderRadius: "50%",
  },
  header: {
    fontFamily: "Nunito Sans",
    fontSize: "48px",
    "@media (max-width: 480px)": {
      fontSize: "25px",
    },
    fontWeight: "bolder",
    textAlign: "center",
    paddingLeft: "30px",
    paddingRight: "30px",
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
    borderRadius: "50%",
    "@media (min-width: 960px)": { textAlign: "center" },
  },
}));

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes} />;
  };
}

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        title: "Loading...",
        category: "Project section is loading.",
        image: "",
        url: "",
      },
      active: 0,
      numQuotes: 4,
    };
  }

  timer() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.HandleRightArrowClick(), 3000);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.HandleRightArrowClick(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  HandleRightArrowClick = (event) => {
    if (this.state.active < 6) {
      this.setState({
        current: this.props.data.projects[parseInt(this.state.active) + 1],
        active: parseInt(this.state.active) + 1,
      });
    } else if (this.state.active === 6) {
      this.setState({ current: this.props.data.projects[0], active: 0 });
    }
    this.timer();
  };

  HandleLeftArrowClick = (event) => {
    if (this.state.active > 0) {
      this.setState({
        current: this.props.data.projects[this.state.active - 1],
        active: this.state.active - 1,
      });
    } else if (this.state.active === 0) {
      this.setState({
        current: this.props.data.projects[this.state.numQuotes - 1],
        active: this.state.numQuotes - 1,
      });
    }
    this.timer();
  };

  HandleSetClick = (event) => {
    this.setState({
      active: event.target.getAttribute("data-image"),
      current: this.props.data.projects[
        event.target.getAttribute("data-image")
      ],
    });
    this.timer();
  };

  render() {
    const classes = this.props.classes;

    if (this.props.data) {
      var current = this.props.data.projects[this.state.active];
    }

    return (
      <Swipeable
        onSwipedRight={this.HandleLeftArrowClick}
        onSwipedLeft={this.HandleRightArrowClick}
      >
        <div className={classes.carousal}>
          <h1 className={classes.header}>
            <b>What our members have to say</b>
          </h1>
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
              <p>test</p>
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
              <p className={classes.title}>test</p>
              <p className={classes.paragraph}>test</p>
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
                background-color: rgb(197, 179, 88);
              }
              span[data-image="${this.state.active}"]::before {
                background-color: rgb(197, 179, 88);
              }
            `}
          >
            {Object.keys(this.props.data ? this.props.data.projects : []).map(
              (index) => (
                <span
                  onClick={this.HandleSetClick}
                  data-image={index}
                  key={index}
                />
              )
            )}
          </div>
        </div>
      </Swipeable>
    );
  }
}

Quote = withMyHook(Quote);
export default Quote;