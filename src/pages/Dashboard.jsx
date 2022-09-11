import {useRef,useState} from "react";
import TextField from "@mui/material/TextField";
import { API_CLIENT } from "../shared/api_client";
import { Player } from "../components/Player";
export const Dashboard =()=> {
    //code inside useEffect
    let url = process.env.REACT_APP_MUSIC_URL;
    let useRefValue=useRef("");   //value retrived from useRef which is having string value 
    let [songs,setSongs]= useState("")
    const searchSong=()=>{
        let searchuseref=useRefValue.current.value;
         let completeUrl = url + "?limit=25&term="+searchuseref;
        let promise=API_CLIENT.get(completeUrl);
        promise.then((result)=>{
        
            setSongs(result.data.results)
        }).catch((err)=>console.log(err))
    }


    return( <><div className="title">Dashboard</div>
    <TextField 
    inputRef= {useRefValue} />
    <button className="btn" onClick={searchSong}>search</button>
<div style={{display:"grid",gridTemplateColumns:"300px 300px 300px",gap:"80px"}}>{songs.length===0
?(<></>)
:(songs.map((element,index)=>{
    // console.log(element.artworkUrl100)
    
    return <Player key={index} url={element.previewUrl} name={element.artistName} image ={element.artworkUrl100} sname={element.collectionName}/>
        
        
        
       
      }))}</div>
     <div className="player"><Player/></div>
    </>
)};

export default Dashboard;