import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import css from "./Modal.module.css";
import topGame from 'utils/topGame';
const modalRoot = document.getElementById("modal-root");


export default function Modal({onCloseModal, modalImg}) {      
    const index = topGame.findIndex(el => el.img === modalImg);
  
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
    <img className={css.modalImg} src={modalImg}
    width="330"
    height="500"
    alt="modal-pick" />
    <div className={css.modalInform}>            
    <p className={css.modalImgName}>{topGame[index].name}</p>
    <div className={css.modalControl}>                
    <Link className={css.linkDetails}
    to={`/detailed/${topGame[index].id}`}>Details</Link>            
    <button>Close</button>
    </div>                    
    </div>             
    </div>            
    </div>
    ,modalRoot)
}



Modal.propTypes = {
        modalImg: PropTypes.string.isRequired,
        onCloseModal: PropTypes.func.isRequired,
}
