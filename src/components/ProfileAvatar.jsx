import { Component } from "react";

class ProfileAvatar extends Component {
  constructor(props) {
    console.log("Child-2 Constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Child-2 CDM");
  }

  componentWillUnmount() {
    console.log("Child-2 CWU");
  }

  componentDidUpdate() {
    console.log("Child-2 CDU");
  }

  render() {
    console.log("Child-2 Render");
    return (
      <img src={this.props.avatar_url} />
    )
  }
};

export default ProfileAvatar;