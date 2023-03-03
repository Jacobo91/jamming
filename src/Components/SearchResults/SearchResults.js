import './SearchResults.css';
import { TrackList } from '../TrackList/TrackList';

export const SearchResults = (props) => {
    return(
        <div className="SearchResults">
            <h2 className='results--title' >Results</h2>
        <TrackList 
            tracks={props.searchResults} 
            onRemove={false}
            onAdd={props.onAdd}
            />
        </div>
    )
}