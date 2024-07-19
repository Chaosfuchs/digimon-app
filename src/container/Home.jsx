/* eslint-disable react/prop-types */
import MediaCard from "../components/Card/card";
import { Grid, CircularProgress} from "@mui/material";
import { useGetAllDigimonQuery } from "../redux-toolkit/api";
import { useContext } from "react";
import { SearchContext } from "../context/searchContext";
//import BottomNav from "../components/BottomNav/bottomNav";
function Home(){

  const {search} = useContext(SearchContext);
  const {data, /* error, */ isLoading} = useGetAllDigimonQuery();

return(
  <>
  {isLoading ? (
    <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress color="primary" size="100px" />
    </div>
    ) : (
      <Grid container style={{justifyContent: 'center'}}>
        {data?.filter((item) => {
          return(
            item.name?.toLowerCase().includes(search?.toLocaleLowerCase()) || item.level?.toLowerCase().includes(search?.toLocaleLowerCase())
          )
        }).map((card) => {
          return (
            <MediaCard key={crypto.randomUUID()} name={card.name} img={card.img} level={card.level}/>
          )
        })}
      </Grid> 
    )}
    {/* <BottomNav/> */}
    </>
)
}

export default Home;