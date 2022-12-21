import React, { Component } from "react";
import "../style.css";
import { students } from "../data.js";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: students,
      value: "",
      name: "",
      search: "",
      status: "",
      age: "",
      newname:"",
      newstatus:'',
      newage:'',
      active: null,
      newName: ""
    };
  }
  render() {
    const onDelete = (id) => {
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };

    const onSearch = (e) => {
      this.setState({ value: e.target.value });
      let res = students.filter((value) =>
        `${value[this.state.search]}`
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      this.setState({ data: res });
    };

    const onSelect = (e) => {
      this.setState({ search: e.target.value });
    };
    const onChanging = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const onAdd = () => {
      let obj = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
        age: this.state.age,
      };
      this.setState({
        data: [...this.state.data, obj],
        name: "",
        status: "",
        age: "",
      });
    };

    const onEdit = ({ id, name, status, age }, isSave) => {
      if (isSave) {
        let res = this.state.data.map((value)=>value.id === this.state.active?.id ? {...value , name: this.state.newname , status: this.state.newstatus , age: this.state.newage} : value)
        this.setState({ active: null , data: res});
        console.log(res);

      } else {
        this.setState({ 
          newname: name,
          newstatus: status,
          newage: age,
          active: { id, name, status } });
      }
    };
    return (
      <div>
        <div className="navbar">
          <h1>Webbrain Academy</h1>
          <input
            type="text"
            name=""
            id=""
            value={this.state.value}
            onChange={onSearch}
            placeholder="Search..."
            className="navbar__input"
          />
          <select name="" id="selected" onClick={onSelect}>
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="status">Status</option>
            <option value="age">Age</option>
          </select>
        </div>
        <div className="main">
          <table className="main__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Age</th>
                <th>Delete / Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.length ? (
                this.state.data.map(({ id, name, status, age }) => {
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>
                        {this.state.active?.id === id ? (
                          <input onChange={onChanging} name = "newname" value={this.state.newname} type="text" />
                        ) : (
                          name
                        )}
                      </td>
                      <td>
                        {this.state.active?.id === id ? (
                          <input onChange={onChanging} name = "newstatus" value={this.state.newstatus} type="text" />
                        ) : (
                          status
                        )}
                      </td>
                      <td>
                        {this.state.active?.id === id ? (
                          <input onChange={onChanging} name = "newage" value={this.state.newage} type="text" />
                        ) : (
                          age
                        )}
                      </td>
                      <td>
                        <button onClick={() => onDelete(id)}>Delete</button>
                        <button
                          onClick={() =>
                            onEdit(
                              { id, name, status, age },
                              this.state.active?.id === id
                            )
                          }
                        >
                          {this.state.active?.id === id ? "save" : "edit"}
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <th colSpan={4}>no data</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="footer">
          <input
            value={this.state.name}
            type="text"
            name="name"
            id=""
            onChange={onChanging}
            placeholder="Name"
          />
          <input
            value={this.state.status}
            type="text"
            name="status"
            id=""
            onChange={onChanging}
            placeholder="Status"
          />
          <input
            value={this.state.age}
            type="number"
            name="age"
            id=""
            onChange={onChanging}
            placeholder="Age"
          />
          <button className="btn" onClick={onAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}




export default Main;
