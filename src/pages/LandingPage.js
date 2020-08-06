import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostVisited from "parts/MostVisited";

import landingPage from "json/landingPage.json";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMost = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMost={this.refMost} data={landingPage.hero} />
        <MostVisited refMost={this.refMost} data={landingPage.mostVisited} />
      </>
    );
  }
}
export default LandingPage;