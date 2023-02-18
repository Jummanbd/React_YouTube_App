import React from "react";
import {Grid } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos }) => {
  console.log(
    videos
  );
  // loading
  if(!videos?.length) return <Loader />;
  
  return (

  <Grid container >

{videos.map((item, idx) => (
        
        <Grid   xl = {2.25} m = {1.2} lg ={2.80}  md={3.70} sm = {5.68}  xs = {12} key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
  </Grid>
    
  );
}

export default Videos;