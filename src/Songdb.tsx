export const songs = [
  {
    title: "Lucretia",
    artist: "Megadeth",
    album: "Rust in Peace",
    duration: "4:28",
    location: "images/lucretia.jpg",
    id: 1
  },
  {
    title: "Come Together",
    artist: "Beatles",
    album: "Abbey Road",
    duration: "3:53",
    location: "images/ct.jpg",
    id: 2
  },
  {
    title: "Black Sabbath",
    artist: "Black Sabbath",
    album: "Black Sabbath",
    duration: "5:32",
    location: "images/bs.jpg",
    id: 3
  },
  {
    title: "The Dark Eternal Night",
    artist: "Dream Theater",
    album: "Systematic Chaos",
    duration: "7:16",
    location: "images/dt.jpg",
    id: 4
  },
  {
    title: "Aaja",
    artist: "Nucleya",
    album: "Bass Rani",
    duration: "4:21",
    location: "images/nu.jpg",
    id: 5
  },
  {
    title: "Moment of Clarity",
    artist: "Death",
    album: "The sound of Perseverance",
    duration: "6:48",
    location: "images/mc.jpg",
    id: 6
  },
  {
    title: "Endless Sacrifice",
    artist: "Dream Theater",
    album: "Train of thought",
    duration: "11:24",
    location: "images/train_.jpg",
    id: 7
  },
  {
    title: "Phantom Lord",
    artist: "Metallica",
    album: "Kill em' all",
    duration: "5:36",
    location: "images/kill em all.jpg",
    id: 8
  },
  {
    title: "Fear of the Dark",
    artist: "Iron Maiden",
    album: "Fear of the Dark",
    duration: "7:16",
    location: "images/fotd.jpg",
    id: 9
  },
  {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    duration: "4:21",
    location: "images/s2h.jpg",
    id: 10
  },
  {
    title: "Soldier of Fortune",
    artist: "Deep Purple",
    album: "The Ultimate Collection",
    duration: "6:04",
    location: "images/dp.jpg",
    id: 11
  },
  {
    title: "Dil Diyan Gallan",
    artist: "Atif Aslam",
    album: "Tiger Zinda Hai",
    duration: "5:24",
    location: "images/dd.jpg",
    id: 12
  }
];
export interface temp {
  title: string;
  location: string;
  duration: string;
  album: string;
  artist: string;
  id: number;
}
export let playlist: Array<temp> = [];
