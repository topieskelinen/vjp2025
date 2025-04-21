import './styleComponents/Textbox.css'
import './styleComponents/Header.css'
import './styleComponents/Footer.css'
import './styleComponents/PandaQuizButton.css'
import './styleComponents/Somebox.css'
import './styleComponents/EmblaCarousel.css'

import Header from './components/header'
import Textbox from './components/Textbox'
import Footer from './components/Footer'
import PandaQuizButton from './components/PandaQuizButton'
import Somebox from './components/Somebox'
import { EmblaCarousel } from './components/EmblaCarousel'
import Autoplay from 'embla-carousel-autoplay'


function App() {
  return (
    <div className="FrontPage">
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
      </div>
      <Footer />
    </div>
  )
}

export default App
