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
                      Koe yhdessä liikkumisen voima! Tervetuloa mukaan Ilo-pandan liikuntakiertueelle, joka kiertää kevään aikana kahdeksalla paikkakunnalla ympäri Suomea. Tapahtumassa lapsesi pääsee kokeilemaan uusia leikkejä, liikuntamuotoja ja -lajeja, esimerkiksi osallistumalla leikkimieliseen maastojuoksukilpailuun. Lapset pääsevät myös tapaamaan vierailevia urheilutähtiä, sekä tietenkin viettämään aikaa Ilo-pandan kanssa, joka aina on mukana touhussa!
                      </p>
                      <p>
                      Vierailevina tähtinä toimii Suomen Olympiakomitean kanssa yhteistyönä suomalaisia huippu-urheilijoita, kuten Wilma Murto, Teemu Pukki sekä Saga Vanninen. Kyseisen viikon vieraileva tähti paljastetaan aina edellisellä viikolla Instagramissa ja Facebookissa. Ota siis nämä seurantaan. Tule ihastelemaan urheilija-idoleita tapahtumaamme! 
                      </p>
                      <p>
                      Ilo-pandan liikuntakiertue on mahdollisimman pienen kynnyksen tapahtuma, maksuton ja suunnattu koko perheelle. Tapahtumiin on kaikki tervetulleita lähtökohdista sekä iästä riippumatta. Myös aikuisille on ohjelmaa tapahtuman yhtyedessä. Samalla kun lapset nauttivat tapahtuman aktiviteeteista, aikuisille on tarjolla neuvontaa ja vinkkejä lasten liikuntaan liittyen.
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
