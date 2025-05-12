import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styleComponents/Textbox.css'
import './styleComponents/Header.css'
import './styleComponents/Footer.css'
import './styleComponents/PandaQuizButton.css'
import './styleComponents/EmblaCarousel.css'
import './styleComponents/EventItem.css'
import './styleComponents/Navigation.css'
import './styleComponents/EventButton.css'


import Header from './components/Header'
import Textbox from './components/Textbox'
import Footer from './components/Footer'
import PandaQuizButton from './components/PandaQuizButton'
import { EmblaCarousel } from './components/EmblaCarousel'
import EventItem from './components/EventItem'
import Navigation from './components/Navigation'
import EventPage from './EventPage'
import EventButton from './components/EventButton';

function App() {


  return (
    <Router>
      <div className="FrontPage">
        <Navigation />
        <Routes>
          {/* Define the routes */}
          <Route
            path="/"
            element={
              <div>
                <div className="TitleBox">
                  <Header />
                </div>
                <Textbox
                  teksti={`Tervetuloa ilon täyteiseen kampanjaamme, jonka tavoitteena on auttaa aikuisia lisäämään omien alakouluikäisten lastensa liikuntaa ja tuoda hyvää mieltä koko perheelle. "Pieni askel – suuri ilo" -kampanja syntyi huolesta lasten vähenevästä liikkumisesta ja kasvavasta ruutuajasta. Haluamme tarjota innostavia, helposti lähestyttäviä tapoja liikkua enemmän yhdessä. Ilo-panda toimii kampanjamme helposti lähestyttävänä maskottina ja kannustajana, joka muistuttaa meitä siitä, että jokainen askel kohti aktiivisempaa arkea on tärkeä.
                        \n
                        Kampanjamme näkyy niin sosiaalisessa mediassa kuin ympäristössä. Kampanja tarjoaa aikuisille konkreettisia vinkkejä ja materiaaleja, joiden avulla omien ja läheisten lasten arkeen voi tuoda lisää liikettä yksi askel kerrallaan – syyllistämättä, mutta motivoiden. Tule mukaan kokemaan riemua koko perheen voimin ja luomaan iloa liikkeellä!`}
                      
                    />
                  
                
                <PandaQuizButton />
                <div className="video">
                <video controls width="100%">
                  <source src="/videos/kampanjavideo.mp4" type="video/mp4" />
                  Selaimesi ei tue videon toistoa.
                  </video>
                </div>
                <EmblaCarousel />
                <Textbox
                  teksti={
                    <>
                      <h2>Ilo-pandan liikuntakiertue</h2>
                      <p>
                      Koe yhdessä liikkumisen voima! Tervetuloa mukaan Ilo-pandan liikuntakiertueelle, joka kiertää kevään aikana kahdeksalla paikkakunnalla. Tapahtumassa lapsesi pääsee osallistumaan erilaisiin leikkimielisiin kilpailuihin ja lajikokeiluihin huippu-urheilijoiden, sekä Ilo-pandan kanssa. Tapahtumissa on myös aikuisille soveltuvaa ohjelmaa. 
                      </p>
                      <p>Lisätietoa tapahtumista löydät tästä:</p> 
                      <EventButton />
                    </>
                  }
                  
                />
                
                <EventItem />
              </div>
            }
          />
          <Route path="/event-page" element={<EventPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;