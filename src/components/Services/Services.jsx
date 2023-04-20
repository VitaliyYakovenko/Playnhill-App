import img from '../../images/img-hero.svg';
import services from '../../utils/services';


export default function Services() {

    return (<section>
      <img src={img} width="100" alt='search-logo' />
      <h2>Services we can help with</h2>
      <ul>
        {services.map(servic => <li key={servic.id}>
          <img src="#" alt='logo-secrive'/>
          <p>{servic.teme}</p>
          <p>{servic.inform}</p>
        </li>)}
      </ul>
     </section>
    )
}