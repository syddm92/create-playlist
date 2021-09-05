import * as React from "react";
// import * as ReactDOM from "react-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./LoggedIn";
import MyMusic from "./MyMusic";
import { temp } from "./Songdb";

interface IState {
  login: boolean;
  playlistSongs: temp[];
}

export default class App extends React.Component<{}, IState> {
  constructor(props: []) {
    super(props);
    this.state = {
      login: false,
      playlistSongs: []
    };
  }

  public render() {
    return (
      <Switch>
        <div className="App">
          <Route exact path="/" component={Front} />
          <Route path="/landing" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route
            exact
            path="/LoggedIn"
            render={props => (
              <Nav {...props} playlistSongs={this.state.playlistSongs} />
            )}
          />
          <Route
            exact
            path="/MyMusic"
            render={props => (
              <MyMusic {...props} playlistSongs={this.state.playlistSongs} />
            )}
          />
        </div>
      </Switch>
    );
  }
}

// import logo from "./logo.svg";
class Front extends React.Component<any, {}> {
  handleClick = () => {
    this.props.history.push("/landing");
  };
  public render() {
    return (
      <div id="landing-page">
        <img
          src={require("C:/Assignments/Playlist/playlist/src/front.jpg")}
          alt="Welcome"
          id="landing-bg"
        />
        <div className="login-area">
          <button
            className="btns btn-warning"
            id="create"
            onClick={this.handleClick}
          >
            Create your own Playlist
          </button>
        </div>
      </div>
    );
  }
}
class Landing extends React.Component<any, {}> {
  handleLogin = (e: any) => {
    e.preventDefault();
    this.props.history.push("/login");
  };

  private handleSignup = () => {
    this.props.history.push("/signup");
  };
  render() {
    return (
      <div>
        <img
          src={require("C:/Assignments/Playlist/playlist/src/front.jpg")}
          alt="Welcome"
          id="landing-bg"
        />
        <div className="login-area">
          <button className="btn-primary btns" onClick={this.handleLogin}>
            LOGIN
          </button>
          <button className="btn-info btns" onClick={this.handleSignup}>
            SIGNUP
          </button>
        </div>
      </div>
    );
  }
}

interface ILoginState {
  uname: string;
  pass: string;
  login: boolean;
}

class Login extends React.Component<any, ILoginState> {
  constructor(props:any){
    super(props);
    this.state = {
      uname: "",
      pass: "",
      login: false
    };
  }
  
  private handleSubmit = (e: any) => {
    e.preventDefault();

    if (this.state.uname === "sid" && this.state.pass === "sid") {
      this.setState({
        login: true
      });
      this.props.history.push("/LoggedIn");
    } else alert("Wrong credentials");
  };

  private handleUname = (e: any) => {
    this.setState({
      uname: e.target.value
    });
  };

  private handlePass = (e: any) => {
    this.setState({
      pass: e.target.value
    });
  };

  private handleCancel = (e: any) => {
    e.preventDefault();
    //document.getElementById("username");
    this.setState({
      uname: "",
      pass: ""
    });
  };
  render() {
    return (
      <div>
        <img
          src={require("C:/Assignments/Playlist/playlist/src/front.jpg")}
          alt="Welcome"
          id="landing-bg"
        />
        <div className="login-area">
          <form id="login-form">
            Username:
            <input
              type="text"
              id="username"
              onChange={this.handleUname}
              value={this.state.uname}
            />
            <br />
            Password:
            <input
              type="password"
              id="password"
              onChange={this.handlePass}
              value={this.state.pass}
            />
            <br />
            <button
              className="btn-danger right bttn"
              value="Cancel"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
            <button
              className="btn-success right bttn"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    uname: "",
    pass: "",
    repass: ""
  };

  private handleSubmit = (e: any) => {
    e.preventDefault();
    //Create an array of objects to store user data
  };
  private handleCancel = (e: any) => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      uname: "",
      pass: "",
      repass: ""
    });
  };

  private handleName = (e: any) => {
    this.setState({
      name: e.target.value
    });
  };

  private handleEmail = (e: any) => {
    this.setState({
      email: e.target.value
    });
  };

  private handleUname = (e: any) => {
    this.setState({
      uname: e.target.value
    });
  };

  private handlePass = (e: any) => {
    this.setState({
      pass: e.target.value
    });
  };

  private handleRepass = (e: any) => {
    this.setState({
      repass: e.target.value
    });
  };
  render() {
    return (
      <div>
        <img
          src={require("C:/Assignments/Playlist/playlist/src/front.jpg")}
          alt="Welcome"
          id="landing-bg"
        />
        <div className="login-area">
          <form id="register-form">
            Enter your Name :
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleName}
            />
            <br />
            Email :
            <input
              type="text"
              id="email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
            <br />
            Enter a username :
            <input
              type="text"
              id="uname"
              value={this.state.uname}
              onChange={this.handleUname}
            />
            <br />
            Enter a Password :
            <input
              type="password"
              id="pass"
              value={this.state.pass}
              onChange={this.handlePass}
            />
            <br />
            Renter Password :
            <input
              type="password"
              id="repass"
              value={this.state.repass}
              onChange={this.handleRepass}
            />
            <br />
            <button
              className="btn-danger right buttn"
              value="Cancel"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
            <button
              className="btn-success right buttn"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
// ReactDOM.render(<App />, document.getElementById("landing"));
