import React from "react";
import "./style.css";

export interface CardMusicProps {
  albumPic: string;
  title: string;
  song: string;
  author: string;
}

const CardMusic: React.SFC<CardMusicProps> = ({
  albumPic,
  title,
  song,
  author,
}) => {
  return (
    <div className="content-card-music">
      <div className="image-content-music">
        <img
          src={albumPic}
          className="cover-image-music"
          alt="caratula album"
        />
      </div>
      <div className="info-music-card">
        <span className="text-info-music bold-music">{title}</span>
        <span className="text-info-music">{author}</span>
      </div>
      <div className="control-music-card">
        <audio controls>
          <source src={song} type="audio/mpeg"></source>
        </audio>
      </div>
    </div>
  );
};

export default CardMusic;
