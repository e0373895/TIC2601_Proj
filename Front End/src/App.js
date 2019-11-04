import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import AlbumList from "./components/AlbumList/AlbumList";
import Fileupload from "./components/fileupload/fileupload";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: ""
      }
    };
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email
      }
    });
  };

  onRouteChange = route => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    } else if (route === "fileupload") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />

        {route === "home" ? (
          <AlbumList />
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : route === "fileupload" ? (
          <Fileupload onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
