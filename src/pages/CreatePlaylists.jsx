import { Player } from "../components/Player";


const CreatePlaylists =()=> {
    return( <><div className="title">Create Playlists</div>
    <input type="text" placeholder="search" id="searchbox"/>
    {/* <button onClick={callServer()}>searchBox</button> */}
    <audio id='roots'/>
    <div className="player">
    <Player/>
   </div>
    </>
)};

export default CreatePlaylists;