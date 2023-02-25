import { Component } from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileName from "./ProfileName";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    }
    console.log("Parent's Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/atul-mittal-07");
    const json = await data.json();
    this.setState({
      userInfo: json
    })
    console.log("Parent's CDM");
  }

  componentDidUpdate() {
    console.log("Parent's CDU");
  }

  componentWillUnmount() {
    console.log("Parent's CWU");
  }


  render() {
    console.log("Parent's Render");
    return (
      <>
        <ProfileName name={this.state.userInfo?.name} />
        <ProfileAvatar avatar_url={this.state.userInfo?.avatar_url} />
      </>
    );
  }
}

export default Profile;