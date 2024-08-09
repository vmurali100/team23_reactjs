import React, { Component } from 'react'

export default class MyImageComp extends Component {
    componentWillUnmount(){
        console.log("Triggering componentWillUnmount in MyImageComp !!!")
    }
  render() {
    return (
      <div>
        <img style={{width:500}} src="https://media.istockphoto.com/id/1454962497/photo/aerial-view-on-spring-fields.jpg?s=2048x2048&w=is&k=20&c=9mApqebsWvbM2zhCZTF1j8daDyShpUJgGJZR_MtXC1U=" alt="" />
      </div>
    )
  }
}
