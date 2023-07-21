import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Vidios,  } from "./Vidios";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ChannelDetail } from "./ChannelDetail";
import { Loader } from "./Loader";

export const VidioDetail = () => {
  const [videoDetail, setVideoDetail] = useState('');

  const [vidios, setVidios] = useState([]);
 
  const { id } = useParams();
 // Destructure the videoDetail object
 const { snippet, statistics } = videoDetail || {};

 // Destructure the snippet object
 const { publishedAt, channelTitle, title, description ,channelId} = snippet || {};

 const { viewCount, likeCount, commentCount, favoriteCount } = statistics || {};

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {setVideoDetail(data.items[0])
       
        })
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => {setVidios(data.items)
        console.log(data.items)
         })

  }, [id]);
  
  if(!videoDetail?.snippet) return <Loader />;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
          <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              style={{ width: "100%" }} // Adjust the style to take most of the width
            />
            <Typography color='#fff' variant="h5" fontWeight='bold'>
            {snippet && snippet.title}
            </Typography>

        <Stack direction='row' justifyItems='space-between' sx={{color:'#fff'}} py={1} px={2}> 
            <Link to={`/channel/${channelId}`} >
              <Typography varient={{sm:'subtitle1',md:'h6'}} color='#fff'>

                {channelTitle}
              </Typography>
              <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
       
          </Box>
          
        </Box>
        <Box px={2} py={{ md: 1, xs: 1 }} sx={{width:"30%"}}justifyContent="center" alignItems="center" >
          <Vidios vidios={vidios} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

