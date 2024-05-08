/* https://accounts.spotify.com/authorize?client_id=ca9af35fd3e449b0af13efa080fbd642&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20user-modify-playback-state%streaming */
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const AfroThugLove = `https://api.spotify.com/v1/playlists/1FM8v5HPJ7GoyMoo5SjOJj?si`;
const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
  const basic = btoa(`${client_id}:${client_secret}`);

  const searchParams = new URLSearchParams();
  searchParams.append("grant_type", "refresh_token");
  searchParams.append("refresh_token", refresh_token);

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: searchParams,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Failed to get access token: ${data.error_description}`);
  }
  return data;
};

export default async function getNowPlaying() {
  try {
    const { access_token } = await getAccessToken();
    const response = await fetch(AfroThugLove, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204 || response.status > 400) {
      return false;
    }

    const song = await response.json();
    return song.uri;
  } catch (error) {
    console.error("Error fetching now playing:", error);
    return false;
  }
}
