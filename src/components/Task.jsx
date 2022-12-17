import React from "react";
import "./style.css";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: "Something here " },
        { id: 2, title: "React" },
        { id: 3, title: "Angular" },
        { id: 4, title: "Vue" },
      ],
    };
  }
  render() {
    // const addList =()=>{
    //     for(let i = 0; i < this.state.data.length; i++){
    //         console.log(this.state.data[i]);
    //         // this.state.data.push({title: "hello"}) 

    //     }
    // }
    // const inpValue = (e)=>{
    //     console.log(e.target.value);
    //     this.setState({title: e.target.value})
    // }
    return (
      <div className="container">
        <div className="hero">
          <h1>{this.state.data.length} Tasks</h1>
          <p>{this.state.data.length} Remain</p>
        </div>
        <div className="main">
          {this.state.data.map((value) => {
            return (
              <div className="wrapper">
                <div className="flex">
                  <input type="checkbox" id="" className="inp" />
                  <p className="title">{value.title}</p>
                </div>
                <button className="btn">Delete</button>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <input type="text" name="" id=""  placeholder="Add Todo..." className="inpAdd"/>
          <button className="btn" >Add</button>
        </div>
      </div>
    );
  }
}
export default Task;
