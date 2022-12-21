import React from "react";
import Main from '../components/Main'
import '../components/style.css'
class Root extends React.Component{
    render(){
        return(
            <div className="container">  
                <Main />
            </div>
        )
    }
}

export default Root