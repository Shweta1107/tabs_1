import "./App.css";
import React from "react";
import Tabs from "./Components/Tabs";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tabNames : ['Home','About','Features']
    }
  }
  render(){
    return (
      <>
        <div className="container">
          <Tabs tabNames={this.state.tabNames}/>
          <div className="viewport">Pages Go Here</div>
        </div>
      </>
    );
  }
 
}

export default App;
