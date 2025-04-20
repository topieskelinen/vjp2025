import './styleComponents/Textbox.css'
import Header from './components/header'
import Textbox from './components/Textbox'
import './styleComponents/Header.css'
import './styleComponents/Footer.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="FrontPage">
      <div className="TitleBox">
        <img src='/images/pandaDab.png' alt='pandadab' />
        <Header />
        <h4 className="headerText">Pieni askel - Suuri ilo</h4>
        <Textbox teksti={
          <>
            <p>Tervetuloa ilon täyteiseen kampanjaamme, jonka tavoitteena on auttaa aikuisia lisäämään omien alakouluikäisten lastensa liikuntaa ja tuoda hyvää mieltä koko perheelle! `Pieni askel – suuri ilo´ -kampanja syntyi huolesta lasten vähenevästä liikkumisesta ja kasvavasta ruutuajasta. Haluamme tarjota innostavia, helposti lähestyttäviä tapoja liikkua enemmän yhdessä. Ilo-panda toimii kampanjamme helposti lähestyttävänä maskottina ja kannustajana, joka muistuttaa meitä siitä, että jokainen askel kohti aktiivisempaa arkea on tärkeä.</p>
            <p>Kampanjamme näkyy niin somessa kuin ympäristössä. Kampanja tarjoaa aikuisille konkreettisia vinkkejä ja materiaaleja, joiden avulla omien ja läheisten lasten arkeen voi tuoda lisää liikettä yksi askel kerrallaan – syyllistämättä, mutta motivoiden. Tule mukaan kokemaan riemua koko perheen voimin ja luomaan iloa liikkeellä!</p>
          </>
        }/>     
      </div>
      <Footer />
    </div>
  )
}

export default App
