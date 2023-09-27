import React, { useState, useEffect } from "react";
import "./playSound.css";
import getNowPlaying from "../../api/spotifyApi";





const PlaySound = () => {
    // const [isPlaying, setIsPlaying] = useState(false);
    const [spotifyURI, setSpotifyURI] = useState("");

    useEffect(() => {

        const handler = async () => {
            const value = await getNowPlaying();
            setSpotifyURI(value);
        }

        handler();
    }, [])

    return (
        <div className="musicPlayer">
            <iframe title="playlist" className="player" src={`https://open.spotify.com/embed?uri=${spotifyURI}&theme=1`} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    );
}

export default PlaySound;