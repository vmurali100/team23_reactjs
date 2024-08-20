import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
    render() {
        console.log("Props In Users Comp : ",this.props)
        return (
            <div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        users:state.users
    }
}

function mapDispatchToProps(){
    return {
        createUser:()=>{},
        deleteUser:()=>{},
        updateUser:()=>{}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);