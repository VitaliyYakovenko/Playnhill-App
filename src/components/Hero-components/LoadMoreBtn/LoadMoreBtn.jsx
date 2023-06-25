import { useState } from "react";
import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({udpagePage}) {
  const [page, setPage] = useState(1);
  
    const onAddPage = () => {
        setPage((prev) => prev + 1);
        udpagePage(page);
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