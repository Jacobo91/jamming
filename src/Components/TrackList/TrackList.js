import './TrackList.css';
import {Track} from '../Track/Track'


export const TrackList = (props) => {
    return(
        <div className="TrackList">
            {
                props.tracks.map(track => (
                    <Track
                        track={track}
                        id={track.id}
                        key={track.id}
                        onAdd={props.onAdd}
                        onRemove={props.onRemove}
                        isRemoval={props.isRemoval}
                        name={track.name}
                        artist={track.artist}
                        album={track.album}
                    />
                ))
            }
        </div>
    )
}

/**
 * 
 * isRemoval
 * 
 */