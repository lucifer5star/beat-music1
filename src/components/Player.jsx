import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { useState,useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
// import { API_CLIENT } from "../shared/api_client";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import {Dashboard} from '../pages/Dashboard';
// import ReactDOM from 'react-dom';
export const Player =({url, name,image,sname,index})=>{
  // const [musicUrl, setMusicUrl] = useState(url);
//   useEffect(()=>{
//     setMusicUrl(url); 
// },[musicUrl]);


// When the url changes, we refresh the component manually so it reloads the loaded file
//   useEffect(()=>{
//     const element = ReactDOM.findDOMNode(this);
// const audio = element.querySelector('audio');
// const source = audio.querySelector('source');
//   // Change the source
//   source.src = url;
//   // Cause the audio element to load the new source
//   audio.load();
  // },[])


  return (
    <>
    {/* <audio  key={index} controls>
     <source src={url} type="audio/mpeg"/>
    </audio> */
    }
     <Card sx={{ maxWidth: 345 }} >
      <CardHeader key={index}
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={sname}
        subheader={name}
      />

      <CardMedia key={index}
        component="img"
        height="194"
        image={image}
        // alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {/* {['desc']} */}
        </Typography>
      </CardContent>
      <ReactAudioPlayer
  src={url}
  autoPlay={false}
  controls={true}
/>
    </Card>
    
    </>
  );
}