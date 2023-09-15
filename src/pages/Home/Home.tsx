import { useEffect, useState } from "react";
import HeroHome from "../../components/Hero-components/Hero-Home/HeroHome";
import TopGameList from "../../components/Hero-components/TopGameList/TopGameList";
import ElementBar from "../../components/Hero-components/ElementBar/ElementBar";
import LoadMoreBtn from "../../components/Hero-components/LoadMoreBtn/LoadMoreBtn";
import IconBand from "../../components/Hero-components/IconBrand/IconBrand";
import { getAllTopGames } from "../../rest-api/getAllTopGames";
import { getAllScreenshot } from "../../rest-api/getAllScreenshot";
import IGamesObj from "../../interfaces/IGamesObj";
import IScreenshotsObj from "../../interfaces/IScreenshotsObj";

 

export default function Home() {
    const [topGames, setTopGames] = useState<IGamesObj[]>([]);
    const [screenshots, setScreenshots] = useState<IScreenshotsObj[]>([]);
    const logoCompanies:string[] = screenshots.map((screenshot) => screenshot.logoCompany);
    const [page, setPage] = useState(1); 
    const total = 32;


    useEffect(() => {
        getAllTopGames()
        .then((resp:IGamesObj[]) => setTopGames(resp));
        
        getAllScreenshot()
            .then((resp:IScreenshotsObj[]) => setScreenshots(resp));
    } , []);

    
    const udpagePage = ():void => {
        setPage((prev) => prev + 1);
    }
 

    useEffect(() => { 
  
         if (page > 1) {
         getAllTopGames(page)
          .then((resp:IGamesObj[]) => {
              setTopGames((prev: IGamesObj[]) => [...prev, ...resp])     
          });
         }
        
    }, [page]);


    const changeFavorite = (id: string):void => {
        
      const gameIndex = topGames.findIndex((game) => game.id === id);  
       
      if (gameIndex !== -1) {
      topGames[gameIndex].favorite = !topGames[gameIndex].favorite;
      setTopGames([...topGames]);
    } 
   };


    return (
        <div>
            <HeroHome bannerImages={screenshots} />
            <TopGameList topGames={topGames} changeFavorite={changeFavorite} />
            {topGames.length !== total
                ? <LoadMoreBtn
                    udpagePage={udpagePage} />
                : <></>}
            <ElementBar screenshots={screenshots} />
            <IconBand iconBrand={logoCompanies}/>
        </div>
    );
}

