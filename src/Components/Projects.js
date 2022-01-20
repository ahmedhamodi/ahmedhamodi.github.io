const Projects = [
  {
    title: "Monotone",
    category:
      "A web application performing speech-to-text sentiment analysis to help individuals with inability to recognize social queues to perform better at interviews, developed at HackMIT 2021.",
    image: require("../Images/portfolio/thumbs/monotone.png"),
    url: "https://www.youtube.com/watch?v=xUisJJ9M9Hs",
    className: "fa fa-youtube-play",
  },
  {
    title: "Calgary Distress Center",
    category:
      "Led the development of a 3D interactive tool used by the Calgary Distress Center to teach mental health concepts to high school students. Using React, Aframe, and Tornado to build out the application.",
    image: require("../Images/portfolio/thumbs/distresscenter.png"),
    url: "https://interactive.calgaryconnecteen.com/",
    className: "fa fa-link",
  },
  {
    title: "UW Blueprint Website",
    category:
      "Core contributor to the UW Blueprint website, updating it term-to-term and adding feature improvements. Website is used by thousands of people per year, from NPOs to students looking to apply to join the UW Blueprint program.",
    image: require("../Images/portfolio/thumbs/uwblueprint.png"),
    url: "https://uwblueprint.org/",
    className: "fa fa-link",
  },
  {
    title: "Smile4Real",
    category:
      "Developed an Android application that provides activities and quotes, through a paginated scroll view, which are tailored to help encourage mental well-being, placing 2nd place at DeltaHacks. Implemented features such as an infinite image/text scroll, an external call link to the suicide helpline number, and API requests.",
    image: require("../Images/portfolio/thumbs/smile4real.png"),
    url: "https://github.com/ahmedhamodi/smile4real",
    className: "fa fa-github",
  },
  {
    title: "Stock Analysis Tool",
    category:
      "Created a Python tool that compares various stocks and calculates the minimum variance portfolio, performs risk analysis, and provides analysis based on various stock portfolio splits. Used matplotlib to plot the efficient frontier data and used pandas to pull live data from Yahoo Finances.",
    image: require("../Images/portfolio/thumbs/stockanalysis.png"),
    url: "https://github.com/ahmedhamodi/stock_analysis",
    className: "fa fa-github",
  },
  {
    title: "Meetability",
    category:
      "Integrated Google Maps API, Firebase, and a React (with Redux store) frontend to create the web application. Created sign up and login work flows for families and individuals with disabilities to meet. Created an internal messaging platform within the app, allowing users to send real time messages to each other.",
    image: require("../Images/portfolio/thumbs/meetability.png"),
    url: "https://github.com/ahmedhamodi/meetability",
    className: "fa fa-github",
  },
  {
    title: "OneMAX",
    category:
      "Developed search and filter functionality on the nominee page, interacting with API endpoints. Improved page load time by 40% through implementing proper pagination of the nominee page. Designed the REST API model, developed with Ruby and Go, which is deployed on Heroku.",
    image: require("../Images/portfolio/thumbs/onemax.png"),
    url: "https://github.com/ahmedhamodi/onemax",
    className: "fa fa-github",
  },
  {
    title: "Mood Detection Box",
    category:
      "Used Twitter API to parse trending categories of tweets, then used IBM Watson API for sentiment analysis to determine the strength of certain emotions displayed through the tweets. Integrated an LED display on an Arduino which displays the emotion through a pulsating effect.",
    image: require("../Images/portfolio/thumbs/mood-box.png"),
    url: "https://github.com/ahmedhamodi/twitter-mood-detection-box",
    className: "fa fa-github",
  },
  {
    title: "Defense Matrix",
    category:
      "Created a server-side security suite in Python for Linux servers which automates firewall configuration, does intrusion detection, and enforces a more secure password criterion.",
    image: require("../Images/portfolio/thumbs/defensematrix.jpg"),
    url: "https://github.com/ahmedhamodi/defense_matrix_security",
    className: "fa fa-github",
  },
  {
    title: "Synk Programming",
    category:
      "Programmed a Python application that allows multiple users to simultaneously program on a single script, winning third place at JAMHacks.",
    image: require("../Images/portfolio/thumbs/jamhacks-team.jpg"),
    url: "https://github.com/ahmedhamodi/synk_programming",
    className: "fa fa-github",
  },
];

export default Projects;
