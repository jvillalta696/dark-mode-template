import React from "react";
import '../dark.scss'

class App extends React.Component {
  state = {
    mode: "classic",
  };

  render() {
    return (
      <div className={this.state.mode}>
        <h1 >This is a Dark mode Test</h1>
        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quas in obcaecati tempore ut, veritatis laboriosam labore exercitationem laudantium doloribus!</p>
        <a >This is a link</a>
        <button  onClick={() => this.togglemode(this.state.mode)}>Toggle Mode</button>
      </div>
    );
  }

  togglemode = (mode) => {
    this.setState({
      mode: mode === "classic" ? "dark" :"classic",
    });
    document.body.classList.contains("dark")?document.body.classList.remove("dark"):document.body.classList.add("dark");
  };
}

export default App;
