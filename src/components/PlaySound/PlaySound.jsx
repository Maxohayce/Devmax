import React, { useState, useEffect } from "react";
import "./playSound.css";
import getNowPlaying from "../../api/spotifyApi";





const PlaySound = () => {
    const [spotifyURI, setSpotifyURI] = useState("");

    useEffect(() => {

        const fetchNowPlaying = async () => {
            try {
                const nowPlayingURI = await getNowPlaying();
                setSpotifyURI(nowPlayingURI);
            } catch (error) {
                console.error("Error fetching now playing track:", error);
            }
        };

        fetchNowPlaying();
    }, [])

    return (
        <div className="musicPlayer">
            <iframe title="playlist" className="player" src={`https://open.spotify.com/embed?uri=${spotifyURI}&theme=1`} width="100%" height="352" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    );
}

export default PlaySound;