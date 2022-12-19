import React from "react";
import "./style.css";
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      value: "",
    };
  }
  render() {
    const deleting = (id) => {
      console.log(id);
      const res = this.state.subjects.filter((value) => value.id !== id);
      this.setState({ subjects: res });
    };
    const onSearch = (e) => {
      const res = this.state.subjects.filter((value) =>
        value.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ subjects: res });
    };
    const onAdd = () => {
      const obj = {
        title: this.state.value,
        id:  Math.trunc(Math.random() * 1000 + 1),
      };
      console.log(obj.id);
      const res = this.state.subjects;
      res.unshift(obj);
      this.setState({ subjects: res });
      this.setState({ value: "" });
    };
    const getValue = (e) => {
      this.setState({ value: e.target.value });
    };
    return (
      <div className="container">
        <div className="hero">
          <h1>{this.state.subjects.length} Tasks</h1>
          <p>{this.state.subjects.length} Remain</p>
          <input
            type="text"
            placeholder="Search..."
            onChange={onSearch}
            name=""
            id="searching"
          />
        </div>
        <div className="main">
          {this.state.subjects.map((value) => {
            return (
              <div className="wrapper" key={value.id}>
                <div className="flex">
                  <input type="checkbox" id="" className="inp" />
                  <p className="title">{value.title}</p>
                </div>
                <button className="btn" onClick={() => deleting(value.id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <input
            type="text"
            name=""
            id=""
            placeholder="Add Todo..."
            className="inpAdd"
            value={this.state.value}
            onChange={getValue}
          />
          <button className="btn" onClick={onAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
export default Task;
