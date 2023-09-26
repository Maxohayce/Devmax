import React, { useEffect, useState } from "react";
// import Sound from "react-sound";
// import SpotifyPlayer from 'react-spotify-player';
import "./playSound.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloud } from "@fortawesome/free-solid-svg-icons";
// import inTheLight from "../../Music/in the light.mp3";
import getNowPlaying from "../../api/spotifyApi";





const PlaySound = (handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [spotifyURI, setSpotifyURI] = useState("");

    useEffect(() => {

        const handler = async () => {
            const value = await getNowPlaying();
            setSpotifyURI(value);
        }

        handler();
    }, [])

    const style = {
        borderRadius: 12,
        width: 300,
        height: 300,
        position: "absolute",
    }

    return (
        <div className="musicPlayer">
            <iframe title="playlist" style={style} src="https://open.spotify.com/embed/playlist/1FM8v5HPJ7GoyMoo5SjOJj?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            {/* <SpotifyPlayer
                uri={spotifyURI}
                size={{
                    width: 300,
                    height: 300,
                }}
                view={"list"}
                theme={"white"}
                allow={"autoplay"}

            /> */}
        </div>
    );
}

export default PlaySound;