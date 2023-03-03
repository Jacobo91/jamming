import './Track.css';

export const Track = (props) => {

    function renderAction(){
        return(
            <button
                className="Track-action"
            >
                {props.isRemoval ? "-" : "+"}
            </button>
        )
    }

    function addTrack(track){
        props.onAdd(track)
    }

    function removeTrack(track){
        props.onRemove(track)
    }

    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{props.name}</h3>
                <p>{props.artist} | {props.album}</p>
            </div>
            {!props.isRemoval && <button className="Track-action" onClick={() => addTrack(props.track)} >+</button>}
            {props.isRemoval && <button className="Track-action" onClick={()=> removeTrack(props.track)} >-</button>}
        </div>
    )
}


