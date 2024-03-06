import React, { Component } from 'react'

// life cycle of a parent child relationship
// parent constructor -> parent render -> child constructor -> child render -> child componentDidMount -> parent componentDidMount

export class UserClass extends Component {

    constructor(props){
        super(props);
        this.state ={
            // count:0,
            // count2:1,
            userInfo : {
                name : "Dummy",
                location : "Default",
                avatar_url : ""
            }
        }
        console.log(props);
    }

   async componentDidMount() {

        const data = await fetch("https://api.github.com/users/hrit04");
        const json = await data.json();
        console.log("componentDidMount" + json);
        this.setState({
            userInfo : json
        })

        // it is used to make an api call
        // it works similiarly as useEffect in fucctional component

    }

   async  componentWillUnmount(){
    
   }



  render() {
    console.log(this.props);
    const {age} = this.props;
    const {count, count2} = this.state;
    const {name, location, avatar_url} = this.state.userInfo;
    console.log(name,location)
    return (
      <div>
        UserClass
        <button onClick={()=>{
          this.setState({
             count : this.state.count + 1,
          })
        }}>Button</button>
        {/* <h1>Count : {count}</h1> */}
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <h2>UserDetails : {name}</h2>
        <h2>location : {location}</h2>
        <img src = {avatar_url}></img>
        </div>
    )
  }
}

export default UserClass

//class based component is a class that extends react component which returns a piece of jsx