import { Component } from "react";

class ProfileName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      company: null
    }
    console.log("Child-1 Constructor");
  }
  async componentDidMount() {

    // this.myInterval =
    //   setInterval(() => {
    //     this.setState({
    //       count: ++this.state.count
    //     })
    //     console.log(this.state.count);
    //   }, 1000);
    const data = await fetch("https://api.github.com/users/atul-mittal-07");
    const json = await data.json();
    this.setState({
      company: json?.company
    })
    console.log("Child-1 CDM");
  }

  componentWillUnmount() {
    console.log("Child-1 CWU");
    clearInterval(this.myInterval);
  }

  componentDidUpdate() {
    console.log("Child-1 CDU");
  }


  render() {
    console.log("Child-1 Render");
    return (
      <>
        <h1>{this.props.name}</h1>
        {/* <h2>{this.state.count}</h2> */}
        <h2>{this.state.company}</h2>
      </>

    )
  }
};

export default ProfileName;