import React from "react";
import {Box, Card, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

function MediaCard(props) {

const {name, img, level} = props;

const [toggleLike, setToggleLike] = React.useState(false);

  return (
  <Card sx={{ display: 'flex', margin: '1rem', minWidth: '300px', width: '100vw', maxWidth: '300px', boxShadow: '5px 5px 15px -3px rgba(0,0,0,0.5)' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', textAlign: 'center' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {level}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton 
          aria-label="like" 
          onClick={() => setToggleLike(!toggleLike)} 
          sx={{":focus": 'none'}}>
            <Tooltip title="Like">
            {toggleLike ? <Favorite color="error"/> : <FavoriteBorder color="disabled"/>}
            </Tooltip>
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={img}
        alt={name}
      />
    </Card>
    
  );
}

export default MediaCard;