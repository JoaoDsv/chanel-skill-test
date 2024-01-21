/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

import ArrowRight from "./arrow-right";
import ArrowLeft from "./arrow-left";

import "./music-menu.css";

function MusicMenu({ tracks }) {
  const [selectedList, setSelectedList] = useState();
  const [selectedFilter, setSelectedFilter] = useState();

  // Lists used for filtering
  const lists = {
    artist: [],
    album: [],
    genre: [],
  };

  // Build dynamic lists from tracks data
  // Time complexity: O(n) linear
  // Space complexity: O(1) constant
  for (let i = 0; i < tracks.length; i++) {
    if (!lists.artist.includes(tracks[i].artist)) {
      lists.artist.push(tracks[i].artist);
    }
    if (!lists.album.includes(tracks[i].album)) {
      lists.album.push(tracks[i].album);
    }
    if (!lists.genre.includes(tracks[i].genre)) {
      lists.genre.push(tracks[i].genre);
    }
  }

  // Select a list to display songs grouped by artist, album or genre
  function selectList(list) {
    setSelectedList(list);
  }

  // Select the exact artist, album or genre to display the related songs
  function selectFilter(filter) {
    setSelectedFilter(filter);
  }

  return (
    <div className="music-menu-wrapper">
      <ul className="layer first-layer">
        <li className="menu-item">Music menu</li>
        <li className="menu-item" onClick={() => selectList(null)}>
          Songs
          <ArrowRight />
        </li>
        {lists.artist.length > 0 && (
          <li className="menu-item" onClick={() => selectList("artist")}>
            Artists
            <ArrowRight />
          </li>
        )}
        {lists.album.length > 0 && (
          <li className="menu-item" onClick={() => selectList("album")}>
            Albums
            <ArrowRight />
          </li>
        )}
        {lists.genre.length > 0 && (
          <li className="menu-item" onClick={() => selectList("genre")}>
            Genres
            <ArrowRight />
          </li>
        )}
      </ul>
      <ul className="layer second-layer">
        <li className="menu-item" onClick={() => selectList(null)}>
          <ArrowLeft />
        </li>
        {selectedList
          ? lists[selectedList].map((item, index) => {
              return (
                <li
                  className="menu-item"
                  key={index}
                  onClick={() => selectFilter(item)}
                >
                  {item}
                  <ArrowRight />
                </li>
              );
            })
          : tracks.map((track, index) => {
              return (
                <li className="menu-item" key={index}>
                  {track.title}
                </li>
              );
            })}
      </ul>
      <ul className="layer third-layer">
        <li className="menu-item" onClick={() => selectFilter(null)}>
          <ArrowLeft />
        </li>
        {selectedFilter &&
          tracks
            .filter((track) => {
              return selectedFilter === track[selectedList];
            })
            .map((item, index) => {
              return (
                <li className="menu-item" key={index}>
                  {item.title}
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default MusicMenu;
