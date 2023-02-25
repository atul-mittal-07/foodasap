import { createContext } from "react"

const UserContext = createContext({
  user: {
    name: 'Dummy',
    email: 'dummy@dummy.com'
  }
});

UserContext.displayName = "UserContext"

export default UserContext;