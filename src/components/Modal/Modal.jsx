import { useEffect } from "react";
import { createPortal } from "react-dom";
import  css  from "./Modal.module.css";
const modalRoot = document.getElementById("modal-root");


export default function Modal({onCloseModal, modalImg}) {
    
    useEffect(() => {
        const hendleKeydown = (e) => {
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
    

    const handeBackropClick = (e) => {
    if (e.currentTarget === e.target || e.target.nodeName === "BUTTON") {
            onCloseModal();
    }
    }

    return createPortal(
    <div
    onClick={handeBackropClick}        
    className={css.overlay}>
    <div className={css.modal}>        
    <img src={modalImg}
    width="330"
    height="500"
    alt="modal-pick" />       
    <button>Close</button>
    </div>            
    </div>
    ,modalRoot)
}