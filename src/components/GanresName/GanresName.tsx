import css from "./GenresName.module.css";

interface IProp {
    genres: string,
    onToggle: (genres:string) => void;
};


export default function GenresName({onToggle, genres }: IProp) {
    const handleGenreClick = () => {
        onToggle(genres);
    }

    return (
        <div className={css.genreNameBox}>
            <h2 onClick={handleGenreClick} className={css.genreName}>{genres}</h2>
        </div>
    );
};