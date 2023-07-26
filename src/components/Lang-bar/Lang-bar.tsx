import {useState} from 'react';
import iconArrowDown from "../../images/arrow-down.svg";
import iconArrowUp from "../../images/arrow-up.svg";
import css from './LangBar.module.css';



export default function SelectVariants() {
  const [lang, setLang] = useState('RU');
  const [active, setActive] = useState(false);
  const langArr = ['RU', 'UA', 'EN'];   

  
  const onGetLang = (event:React.MouseEvent<HTMLLIElement>) => {  
    const lang = event.currentTarget.dataset.lang;

    if (!lang) return
  
    setLang(lang);
    setActive(false);
  }
   
    
    return (
    <>
    <div className={css.langBox}>    
    <p className={css.langName}>{lang}</p>
    <button
    className={css.buttonLang}    
    onClick={() => setActive(!active)}>
    {active
    ? <img src={iconArrowUp} alt='icon'/>
    : <img src={iconArrowDown} alt='icon'/> 
    }            
    </button>
    </div>      
    {active && <ul className={css.langBar}>
    {langArr.map(lang => (
    <li
    className={css.langList}        
    onClick={onGetLang}
    data-lang={lang}        
    key={lang}>
    {lang}    
    </li>))}               
    </ul>}                 
      </>
  );
}