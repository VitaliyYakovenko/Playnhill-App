import css from "./LoadMoreBtn.module.css";


interface IProp { 
  udpagePage: () => void;
}

export default function LoadMoreBtn({udpagePage}: IProp) {

    const onAddPage = () => {    
        udpagePage();
   }
  
    return (
        <>
        <button className={css.LoadMoreBtn} type="button"
         onClick={onAddPage}
        >
          Load More
        </button>
        </>
  )
};