import { Component } from "react";

export class List extends Component{
    state={
        isLogin:true,
        message:""
    }
     handleClick = ()=>{
       this.setState({
        isLogin:false, message:"Welcome - Buddy"
       })
    }
    handleClick2 = ()=>{
        this.setState({
            isLogin:true, message:"Visit Again"
        })
    }
    render(){
        return(
            <>
          
            {
                this.state.isLogin?<div><button onClick={this.handleClick}>Login</button></div>:<div><button onClick={this.handleClick2}>Logout</button></div>
            }
            <h4>{this.state.message}</h4>
            </>
        )
    }
}