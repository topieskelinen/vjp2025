import './styleComponents/Textbox.css'
import './styleComponents/Header.css'
import './styleComponents/Footer.css'
import './styleComponents/PandaQuizButton.css'
import './styleComponents/EmblaCarousel.css'
import './styleComponents/EventItem.css'
import './styleComponents/Navigation.css'

import Navigation from "./components/Navigation";
import Header from './components/header'
import Textbox from './components/Textbox'
import Footer from './components/Footer'
import EventItem from './components/EventItem'
import TourMap from './components/TourMap';

export default function EventPage() {
    return (
        <div className="EventPage">
            <Navigation />
            <div className="TitleBox">
                <Header />
            </div>
            <Textbox
                  teksti={
                    <>
                      <h2>Ilo-pandan liikuntakiertue</h2>
                      <p>
                      Koe yhdessä liikkumisen voima! Tervetuloa mukaan Ilo-pandan liikuntakiertueelle, joka kiertää kevään aikana kahdeksalla paikkakunnalla. Tapahtumassa lapsesi pääsee osallistumaan leikkimieliseen maastojuoksukilpailuun, kokeilemaan uusia leikkejä, liikuntamuotoja ja -lajeja, tapaamaan urheilutähtiä, sekä tietenkin viettämään aikaa Ilo-pandan kanssa, joka on mukana touhussa!
                      </p>
                      <p>
                      Kyseisen viikon vieraileva tähti paljastetaan aina edellisellä viikolla Instagramissa ja Facebookissa. Ota siis nämä seurantaan. Vierailevina tähtinä toimii suomalaisia huippu-urheilijoita, kuten Wilma Murto, Teemu Pukki sekä Saga Vanninen. Tulee ihastelemaan urheilija-idoleita tapahtumaamme. 
                      </p>
                      <p>
                      Ilo-pandan liikuntakiertue on mahdollisimman pienen kynnyksen tapahtuma, maksuton ja suunnattu koko perheelle. Tapahtumiimme ovat kaikki tervetulleita lähtökohdista sekä iästä riippumatta. Myös aikuisille on ohjelmaa tapahtuman yhtyedessä. Samalla kun lapset nauttivat tapahtuman aktiviteeteista, aikuisille on tarjolla neuvontaa ja vinkkejä lasten liikuntaan liittyen.
                      </p>
                    </>
                  }
                /> 
            
            <TourMap />
            <EventItem />
          
            <Footer />
        </div>
    )
}
