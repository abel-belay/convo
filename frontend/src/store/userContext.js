import React, {useState} from "react";

const UserContext = React.createContext({user: null});

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(undefined);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext;