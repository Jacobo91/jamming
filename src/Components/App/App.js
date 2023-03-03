import './App.css';
import {Playlist} from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { useState } from 'react';
import Spotify from '../../util/Spotify';

function App(props) {

  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState("My Playlist")
  const [playlistTracks, setPlayListTracks] = useState([])

  function addTrack(track){
    setPlayListTracks(prevState => [...prevState, track])
  }

  function removeTrack(track){
    setPlayListTracks(function(prevState){
      return prevState.filter(record => record.id !== track.id)
    })
  }

  function updatePlaylistName(name){
    setPlaylistName(name)
  }

  function savePlaylist(){
    const trackURIs = playlistTracks.map(playlistTrack => playlistTrack.uri)
    Spotify.savePlaylist(playlistName, trackURIs)
    setPlaylistName("My Playlist")
    setPlayListTracks([])
    console.info(trackURIs)
  }

  function search(term){
    Spotify.getAccessToken()
    Spotify.search(term).then(results => setSearchResults([...results]))
  }

  return (
    <div>
      <h1>B<span className="highlight">oo</span>st</h1>
      <div className="App">
        <SearchBar
          onSearch={search}
        />
        <div className="App-playlist">
        <SearchResults 
          searchResults={searchResults}
          onAdd={addTrack}
        />
        <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks}
          onAdd={addTrack}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          name={playlistName}
          onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;


