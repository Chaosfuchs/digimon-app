/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {Box, Card, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, IconButton, Typography} from '@mui/material';
import { Close, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {LikeContext} from "../../context/likeContext.jsx"

function MediaCard(props) {

const {name, img, level} = props;

const [open, setOpen] = React.useState(false);

const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

const {likedCards, toggleLike} = useContext(LikeContext);
const isLiked = likedCards.includes(name);

const handleLikeClick = () => {
  toggleLike(name);
}

const handleOpen = () => {
  setOpen(true);
}

const handleClose = () => {
  setOpen(false);
}

  return (
    <> 
      <Card sx={{ display: 'flex', justifyContent: "space-between", margin: '1rem', minWidth: '300px', width: '100vw', maxWidth: '350px', boxShadow: '5px 5px 15px -3px rgba(0,0,0,0.5)' }}>
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
              onClick={() => handleLikeClick()} 
              sx={{":focus": 'none'}}>
                <Tooltip title="Like">
                {isLiked ? <Favorite color="error"/> : <FavoriteBorder color="disabled"/>}
                </Tooltip>
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{width: 150, cursor: "pointer"}}
            image={img}
            alt={name}
            onClick={handleOpen}
          />
        </Card>
        <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
          <DialogTitle sx={{fontSize: "2rem"}}>Info</DialogTitle>
          <IconButton
          aria-label="close"
          onClick={handleClose}
          size="large"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          >
            <Close sx={{width: "40px", height: "40px"}}/>
          </IconButton>
          <DialogContent>
            <Box style={{display: "flex"}}>
              <div style={{display: "flex", flexDirection: "column"}}>
                <Typography variant="h5">Name</Typography>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="h5">Level</Typography>
                <Typography variant="h6">{level}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <IconButton 
              aria-label="like" 
              onClick={() => handleLikeClick()} 
              sx={{":focus": 'none', position: "absolute", top: "350px"}}
              size="large"
              >
                <Tooltip title="Like">
                {isLiked ? <Favorite color="error" sx={{width: "50px", height: "50px"}}/> : <FavoriteBorder color="disabled" sx={{width: "50px", height: "50px"}}/>}
                </Tooltip>
              </IconButton>
            </Box>
              </div>
              <img src={img} style={{padding: " 0 5rem"}}></img>
            </Box>
            </DialogContent>
        </Dialog>
    </> 
  );
}

export default MediaCard;