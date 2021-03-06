import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading.js";
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { lat: null, errorMessage: "" };
// }
    state = { lat: null, errorMessage: "" }; // this line is doing the above through Babel
  

  componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
      );
  }
 

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Loading message="Please accept the location request" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
