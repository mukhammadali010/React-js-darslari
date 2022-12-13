import React from 'react';
import ReactDOM from 'react-dom/client';
import {Student} from './components/App/index.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));

const students = [
  {id : 1, name: "Ali"},
  {id : 2, name: "Vali"},
  {id : 3, name: "Akbar"},
  {id : 4, name: "Soli"},
  {id : 5, name: "Azim"},
  {id : 6, name: "Sardor"},
  {id : 7, name: "Qayum"},
  {id : 8, name: "Zohid"},
]
root.render(
  <React.StrictMode>
    {
      students.map((value)=>{
        return <Student data = {value}/>
      })
    }
  </React.StrictMode>
);
