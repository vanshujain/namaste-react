import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";



class About extends React.Component {
  constructor(props){
    super(props);
    // console.log("parent constructor");
  }

componentDidMount(){
  // console.log("parent component did mount");
}
render(){
  // console.log("parent render");
  return (
    <div>
      <h1>About</h1>
      <div>
      loggedInUser
      <UserContext.Consumer>
        {({loggedInUser}) =>(
          <h1 className="text-xl font-bold">{loggedInUser}</h1>
        )}

</UserContext.Consumer>

      </div>
      <h2>Namaste React Webseries</h2>
      {/* <User name= {"vanshika"}/> */}
      <UserClass name= {"vanshika"} location= {"Indore"}/>

    </div>
  );
  };
};



export default About;
