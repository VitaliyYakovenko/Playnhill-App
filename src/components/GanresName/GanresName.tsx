import css from "./GenresName.module.css";
import {IoIosArrowDown} from "react-icons/io";

interface IProp {
    genres: string,
    onToggle: (genres: string) => void;
    isActive: boolean;
};


export default function GenresName({ isActive, onToggle, genres }: IProp) {
    const arrowIconClass = isActive ? `${css.arrowIcon} ${css.rotate}` : css.arrowIcon;
  
    const handleGenreClick = () => {
        onToggle(genres);
    };

    return (
        <div className={css.genreNameBox}>
            <IoIosArrowDown  className={arrowIconClass} onClick={handleGenreClick}/>
            <h2 className={css.genreName}>{genres}</h2>
        </div>
    );
};