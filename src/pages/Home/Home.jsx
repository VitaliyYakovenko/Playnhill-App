import HeroHome from "components/Hero-components/Hero-Home/HeroHome";
import TopGameList from "components/Hero-components/TopGameList/TopGameList";
import ElementBar from "components/Hero-components/ElementBar/ElementBar";
import IconBand from "components/Hero-components/Icon-band/IconBand";

import topGame from 'db/topGame';
import carLeft from 'images/car-left.jpg';
import carCenter from 'images/car-center.jpg';
import carRigth from 'images/car-rigth.jpg';
import screenshots from "db/screenshot";


export default function Home() {
    const carsArrImg = [carLeft, carCenter, carRigth];

    return (
        
        <div>
        <HeroHome carsArrImg={carsArrImg} />
        <TopGameList topGame={topGame}/>
        <ElementBar screenshots={screenshots} />
        <IconBand/>    
        </div>
        )
}

