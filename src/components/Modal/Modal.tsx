import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import css from "./Modal.module.css";
const modalRoot = document.getElementById("modal-root") as HTMLDivElement;


interface IProps {
    onCloseModal: () => void;
    modalImg: string;
    gameName: string;
    gameId: string;
};

export default function Modal({ onCloseModal, modalImg, gameName , gameId }: IProps) {
  
    useEffect(() => {
        const hendleKeydown = (e:KeyboardEvent) => {
        if (e.code === "Escape") {
        onCloseModal()
        }       
    }
       
    window.addEventListener("keydown", hendleKeydown);
    document.body.classList.add('no-scroll');    
    return (() => {
    return (
    window.removeEventListener("keydown", hendleKeydown),
    document.body.classList.remove('no-scroll') 
    )
    })
    },[onCloseModal])
    

    const handeBackropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
     
    if (e.currentTarget === e.target || (e.target as HTMLElement).nodeName === "BUTTON") {
        onCloseModal();
    }
    }

    return createPortal(
    <div
    onClick={handeBackropClick}        
    className={css.overlay}>
    <div className={css.modal}>        
    <img className={css.modalImg} src={modalImg}
    width="330"
    height="500"
    alt="modal-pick" />
    <div className={css.modalInform}>            
    <p className={css.modalImgName}>{gameName}</p>
    <div className={css.modalControl}>                
    <Link className={css.linkDetails}
    to={`/detailed/${gameId}`}>Details</Link>            
    <button className={css.closeModalBtn}>Close</button>
    </div>                    
    </div>             
    </div>            
    </div>
    ,modalRoot)
}




