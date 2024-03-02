import React from "react";

class UserClass extends React.Component{
constructor(props){
super(props);
this.state={
    userInfo:{
        name: "Dummy",
        location: "default",
    }
};
};

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/vanshujain")
    const json = await data.json();
    console.log(json);
this.setState({
    userInfo:json,
})
}
componentWillUnmount(){
    console.log("component will unmounted");
}


render(){
    const {name, location, avatar_url} = this.state.userInfo;
    // debugger;
    return(
        <div className="user-card">
            <img src= {avatar_url}/>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:@vanshujain</h4>
        </div>
    )
}
}
export default UserClass;