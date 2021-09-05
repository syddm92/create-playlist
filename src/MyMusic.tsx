import * as React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { temp } from "./Songdb";

interface IState {
  status: string;
}
export default class MyMusic extends React.Component<any, IState> {
  constructor(props: []) {
    super(props);
    this.state = {
      status:
        this.props.playlistSongs.length == 0
          ? "There are currently no songs in the playlist !!!"
          : ""
    };
  }
  private handleDelete = (song: temp) => {
    console.log(this.props.hello);
    var playlist: temp[] = this.props.playlistSongs;
    let delIndex = playlist.findIndex(x => x.id == song.id);
    playlist.splice(delIndex, 1);
    this.setState({
      status: song.title + " removed from playlist!!!"
    });
  };

  private handleLogout = () => {
    this.props.history.push("/");
  };

  private handleHome = () => {
    this.props.history.push("/LoggedIn");
  };

  private handleMyMusic = () => {
    this.props.history.push("/MyMusic");
  };
  render() {
    return (
      <div className="navbar">
        <ul className="fixed-top">
          <li>
            <img
              src={require("C:/Assignments/Playlist/playlist/src/logo.png")}
              alt="logo"
              className="logo"
            />
          </li>
          <li className="aside">
            <a onClick={this.handleHome}>HOME</a>
          </li>
          <li className="aside">
            <a>DISCOVER</a>
          </li>
          <li className="aside">
            <a onClick={this.handleMyMusic}>MY MUSIC</a>
          </li>
          <li style={{ float: "right" }}>
            <a onClick={this.handleLogout}>Logout</a>
          </li>
        </ul>
        <p className="playlist status fixed-top">{this.state.status}</p>

        <div className="container">
          {this.props.playlistSongs.map((song: temp, position: number) => {
            return (
              <div className="playlist-song-container" id={position.toString()}>
                <img
                  src={require("C:/Assignments/Playlist/playlist/src/images/exit.png")}
                  className="exit-btn"
                  onClick={this.handleDelete.bind(this, song)}
                />
                <div className="album-cover">
                  <img
                    src={require("./" + song.location)}
                    className="album-image"
                  />
                </div>
                <div className="song-title">{song.title}</div>
                <div className="song-duration">{song.duration}</div>
                <div className="song-album">{song.album}</div>
                <div className="song-artist">{song.artist}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
