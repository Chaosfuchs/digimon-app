import { useContext } from "react";
import { Grid } from "@mui/material";
import CustomHeader from "../components/Title/header";
import { LikeContext } from "../context/likeContext";
import MediaCard from "../components/Card/card";
import { SearchContext } from "../context/searchContext";
import { useGetAllDigimonQuery } from "../redux-toolkit/api";

function Favorites(){

  const {search} = useContext(SearchContext);
  const {likedCards} = useContext(LikeContext);

  const {data, /* error, isLoading */} = useGetAllDigimonQuery();

  const filteredLikedCards = data?.filter((item) => likedCards.includes(item.name))

  return(
    <>
    <CustomHeader title="Favorites"/>
    <Grid container style={{justifyContent: 'center'}}>
        {filteredLikedCards?.filter((item) => {
          return(
            item.name?.toLowerCase().includes(search?.toLocaleLowerCase()) ||
            item.level?.toLowerCase().includes(search?.toLocaleLowerCase())
          )
        }).map((card) => {
          return (
            <MediaCard key={crypto.randomUUID()} name={card.name} img={card.img} level={card.level}/>
          )
        })}
      </Grid> 
    </>
  )
}

export default Favorites;