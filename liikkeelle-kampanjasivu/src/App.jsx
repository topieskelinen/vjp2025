import './styleComponents/Textbox.css'
import './styleComponents/Header.css'
import './styleComponents/Footer.css'
import './styleComponents/PandaQuizButton.css'
import './styleComponents/EmblaCarousel.css'
import './styleComponents/EventItem.css'
import './styleComponents/Navigation.css'

import Header from './components/header'
import Textbox from './components/Textbox'
import Footer from './components/Footer'
import PandaQuizButton from './components/PandaQuizButton'
import { EmblaCarousel } from './components/EmblaCarousel'
import EventItem from './components/EventItem'
import Navigation from './components/Navigation'


function App() {
  return (
    <div className="FrontPage">
      <Navigation />
      <div>
        <div className="TitleBox">
          <Header />
        </div>
        <Textbox teksti={
          <>
            <p>Tervetuloa ilon täyteiseen kampanjaamme, jonka tavoitteena on auttaa aikuisia lisäämään omien alakouluikäisten lastensa liikuntaa ja tuoda hyvää mieltä koko perheelle! `Pieni askel – suuri ilo´ -kampanja syntyi huolesta lasten vähenevästä liikkumisesta ja kasvavasta ruutuajasta. Haluamme tarjota innostavia, helposti lähestyttäviä tapoja liikkua enemmän yhdessä. Ilo-panda toimii kampanjamme helposti lähestyttävänä maskottina ja kannustajana, joka muistuttaa meitä siitä, että jokainen askel kohti aktiivisempaa arkea on tärkeä.</p>
            <p>Kampanjamme näkyy niin somessa kuin ympäristössä. Kampanja tarjoaa aikuisille konkreettisia vinkkejä ja materiaaleja, joiden avulla omien ja läheisten lasten arkeen voi tuoda lisää liikettä yksi askel kerrallaan – syyllistämättä, mutta motivoiden. Tule mukaan kokemaan riemua koko perheen voimin ja luomaan iloa liikkeellä!</p>
          </>
        }/>
        <PandaQuizButton />
        <div className="video">VIDEO</div>    
        <EmblaCarousel />
        <Textbox teksti={
          <>
            <h2>Ilo-pandan liikuntakiertue</h2>
            <p>Koe yhdessä liikkumisen voima! Tervetuloa mukaan Ilo-pandan liikuntakiertueelle, joka kiertää kevään aikana kahdeksalla paikkakunnalla. Tapahtumassa lapsesi pääsee osallistumaan leikkimieliseen maastojuoksukilpailuun, kokeilemaan uusia leikkejä, liikuntamuotoja ja -lajeja, tapaamaan urheilutähtiä, sekä tietenkin viettämään aikaa Ilo-pandan kanssa, joka on mukana touhussa! </p>
            <p>Vieraileva tähti paljastetaan aina edellisellä viikolla Instagramissa ja Facebookissa. Ilo-pandan liikuntakiertue on mahdollisimman pienen kynnyksen tapahtuma, maksuton ja suunnattu koko perheelle. Samalla kun lapset nauttivat tapahtuman aktiviteeteista, aikuisille on tarjolla neuvontaa ja vinkkejä.</p>
          </>
        }/>
        <EventItem />
      </div>
      
      <Footer />
    </div>
  )
}

export default App
