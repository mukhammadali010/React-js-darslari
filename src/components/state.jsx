import React, { Component } from "react";

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "Write..."
    };
  }
  render() {
    const plus = () => {
        if(this.state.count < 10) this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
        if(this.state.count > 0) this.setState({ count: this.state.count - 1 });
    };
    const textChange = (e) =>{
        console.log(e.target.value);
        this.setState({title: e.target.value})
    }
    const onSelected = (e) =>{
        console.log(e.target.value);
    }

    const onCheck = (e) =>{
        console.log(e.target.checked);
    }
    return (
      <div>
        <h1>State Count {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <h1>{this.state.title}</h1>
        <input type="text" onChange={textChange} />
        <select name="" id="" onChange={onSelected}>
            <option value="toshkent">Toshkent</option>
            <option value="fargona">Fargona</option>
        </select>
        <input type="checkbox" onChange={onCheck}/>
      </div>
    );
  }
}
export default States;
