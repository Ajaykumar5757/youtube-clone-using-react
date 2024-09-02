import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faFlag,faCircleQuestion,faNewspaper,
  faTrophy,faFilm,faPodcast,faHouse,faMusic,faBolt,
  faMagnifyingGlass,faGear
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './index.css';

import Photo1 from './images/photo1.jpg';
import Photo2 from './images/photo2.jpg';
import Photo3 from './images/photo3.jpg';
import Photo4 from './images/photo4.jpg';
import Photo5 from './images/photo5.jpg';
import Photo6 from './images/photo6.jpg';
import Photo7 from './images/photo7.jpg';
import Photo8 from './images/photo8.jpg';
import Photo9 from './images/photo9.jpg';

function Header(){
  return(
    <div class="youtube-template">
      <div class="youtube-icons">
        <h1 class="bar"><FontAwesomeIcon icon={faBars} /></h1>
        <h1><FontAwesomeIcon icon={faHouse} /></h1>
        <h1><FontAwesomeIcon icon={faBolt} /></h1>
        <h1><FontAwesomeIcon icon={faMusic} /></h1>

        <h1><FontAwesomeIcon icon={faFlag} /></h1>
        <h1><FontAwesomeIcon icon={faNewspaper} /></h1>
        <h1><FontAwesomeIcon icon={faTrophy} /></h1>
        <h1><FontAwesomeIcon icon={faFilm} /></h1>
        <h1><FontAwesomeIcon icon={faPodcast} /></h1>
        <h1><FontAwesomeIcon icon={faCircleQuestion} /></h1>
        <h1><FontAwesomeIcon icon={faGear} /></h1>
      </div>
      <div class="youtube-top">
        <h1 class="topic"><FontAwesomeIcon icon={faYoutube} style={{color: "#ff0000",}} /> Youtube <input type="text" placeholder='Search' id="text-input" /><span id="search"><FontAwesomeIcon icon={faMagnifyingGlass} /></span></h1>
        <div class="contents">
          <div class="grid-content">
            <img src={Photo1} alt="photo-01" height="200px" width="360px" />
            <h2>Swizterland receives heavy rainfall yestday</h2>
            <h4>channel</h4>
            <h5>Timing</h5>
          </div>
          <div class="grid-content">
            <img src={Photo2} alt="photo-02" height="200px" width="360px" />
            <h2>U20 world championship is begin next week</h2>
            <h4>channel</h4>
            <h5>Timing</h5>
          </div>
          <div class="grid-content">
            <img src={Photo3} alt="photo-03" height="200px" width="360px" />
            <h2>TCS going to hire 40,000 employees</h2>
            <h4>channel</h4>
            <h5>Timing</h5>
          </div>
          <div class="grid-content">
            <img src={Photo4} alt="photo-04" height="200px" width="360px" />
            <h2>IT department is getting more popular in the aother countries</h2>
            <h4>channel</h4>
            <h5>Timing</h5>
          </div>
          <div class="grid-content">
            <img src={Photo5} alt="photo-05" height="200px" width="360px" />
            <h2>Protest in Bangladesh to get back their peace</h2>
            <h4>channel</h4>
            <h5>Timing</h5>
          </div>
          <div class="grid-content">
            <img src={Photo6} alt="photo-06" height="200px" width="360px" />
            <h2>S20 Conference meeting is going to held in 23rd September</h2>
            <h4>channel</h4>
            <h5>Timing</h5>
          </div>
          <div class="grid-content">
            <img src={Photo7} alt="photo-07" height="200px" width="360px" />
            <h2>Paris hosts the paralympics games from 28th august till 9th September</h2>
            <h4>channel</h4>
            <h5>Timing</h5>
          </div>
          <div class="grid-content">
            <img src={Photo8} alt="photo-08" height="200px" width="360px" />
            <h2>The value of Indian currency fin Indian dollars exceeds Rs.85</h2>
            <h4>channel</h4>
            <h5>Timing</h5>
          </div>
          <div class="grid-content">
            <img src={Photo9} alt="photo-09" height="200px" width="360px" />
            <h2>Japan tourism increases because of the climate</h2>
            <h4>channel</h4>
            <h5>Timing</h5>
          </div>
        </div>
      </div>
    </div>
  );
}


function Project() {
  return (
    <div>
      <Header />
    </div>
  );
}

ReactDom.render(<Project />,document.getElementById("root"));