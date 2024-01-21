/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

import ArrowRight from "./arrow-right";
import ArrowLeft from "./arrow-left";

import "./music-menu.css";

function MusicMenu({ tracks }) {
  const [selectedList, setSelectedList] = useState();

  // Select a list to display songs grouped by artist, album or genre
  function selectList(list) {
    setSelectedList(list);
  }

  return (
    <div className="music-menu-wrapper">
      <ul className="layer first-layer">
        <li className="menu-item">Music menu</li>
        <li className="menu-item" onClick={() => selectList(null)}>
          Songs
          <ArrowRight />
        </li>
      </ul>
      <ul className="layer second-layer">
        <li className="menu-item" onClick={() => selectList(null)}>
          <ArrowLeft />
        </li>
        {selectedList
          ? lists[selectedList].map((item, index) => {
              return (
                <li className="menu-item" key={index}>
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
        <li className="menu-item">
          <ArrowLeft />
        </li>
      </ul>
    </div>
  );
}

export default MusicMenu;
