import * as React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { songs, temp } from "./Songdb";

interface IState {
  add: string;
  search: string;
  showSongs: [];
}

export default class Nav extends React.Component<any, IState> {
  constructor(props: []) {
    super(props);
    this.state = {
      add: "",
      search: "",
      showSongs: []
    };
  }
  private handleClick = (position: number) => {
    var playlist: temp[] = this.props.playlistSongs;
    if (playlist.find(x => x.id == songs[position].id) == undefined) {
      playlist.push(songs[position]);
      this.setState({
        add: songs[position].title + " added to playlist!"
      });
    } else {
      this.setState({
        add: songs[position].title + " is already present in the playlist :)"
      });
    }
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
        <p className="status fixed-top">{this.state.add}</p>
        <div className="container">
          {songs.map((song: temp, position: number) => {
            return (
              <div
                className="song-container"
                id={position.toString()}
                onClick={this.handleClick.bind(this, position)}
              >
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
