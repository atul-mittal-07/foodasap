import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4>This app is built by {user.name} using React. Reach out to me on my email {user.email}</h4>
  )
};

export default Footer;