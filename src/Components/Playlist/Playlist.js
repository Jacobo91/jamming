import './Playlist.css'
import { TrackList } from '../TrackList/TrackList'



export const Playlist = (props) => {

    function handleChangeName(event){
        props.onNameChange(event.target.value)
    }

    return(
        <div className="Playlist">
            <input
                className='playlist--name'
                placeholder='New Playlist'
                defaultValue={props.name}
                onChange={handleChangeName}
            />
            <TrackList 
                tracks={props.playlistTracks}
                onRemove={props.onRemove}
                isRemoval={true}
                onAdd={props.onAdd}
            />
            <button 
                className="Playlist-save"
                onClick={props.onSave}    
            >
                SAVE TO SPOTIFY
            </button>
        </div>
    )
}

/*

isRemoval={true}

*/ 