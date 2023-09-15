import { nanoid } from "nanoid";
import utilsCss from "../../../utils.module.css";
import css from "./IconBrand.module.css";


interface IProp {
    iconBrand: string[];
};


export default function IconBrand({ iconBrand }: IProp) {


    return (
        <section className={css.IconBandSection}>
            <div className={utilsCss.container}>
                <ul className={css.iconList}>
                    {iconBrand.map(icon => (
                        <li className={css.iconItem} key={`id ${nanoid()}`}>
                            <img className={css.icon} src={icon}
                                width="250"
                                height="150"
                                alt="icon" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );

};