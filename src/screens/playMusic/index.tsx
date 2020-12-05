import React from "react";
import "./style.css";
import CardMusic from "../../components/cardMusic/index";
import { avocadoMusic } from "../../helpers/playMusic";

export interface PlaylistMusicProps {}

const PlaylistMusic: React.SFC<PlaylistMusicProps> = () => {
  return (
    <div className="content-playlist-music">
      {avocadoMusic.map((item: any, index: number) => (
        <div className="content-card-playlist">
          <CardMusic
            albumPic={item.albumCover}
            author={item.singer}
            song={item.song}
            title={item.name}
            key={index}
          />
        </div>
      ))}
    </div>
  );
};

export default PlaylistMusic;
