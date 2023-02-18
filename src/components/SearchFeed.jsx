import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import {useParams} from 'react-router-dom'
import { fetchFromAPI } from "../utils/fetchFromAPI";
const SearchFeed = () => {
 const {searchTerm}=useParams()
  const [videos, SetVideos] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const response = await fetchFromAPI(
        `search?part=snippet&q=${searchTerm}}`
      );
      const data = await response.items;
      SetVideos(data);
    };
    fetching();
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};
export default SearchFeed;
