import Header from './components/Header'
import Textbox from './components/Textbox'
import PandaQuizButton from './components/PandaQuizButton'
import { EmblaCarousel } from './components/EmblaCarousel'
import EventItem from './components/EventItem'
import EventButton from './components/EventButton';

export default function HomePage() {
    return (
        <div className="HomePage">
            <div className="TitleBox">
                <Header />
            </div>
            <Textbox
            teksti={
                `Tervetuloa ilon täyteiseen kampanjaamme, jonka tavoitteena on auttaa aikuisia lisäämään omien alakouluikäisten lastensa liikuntaa ja tuoda hyvää mieltä koko perheelle. "Pieni askel – suuri ilo" -kampanja syntyi huolesta lasten vähenevästä liikkumisesta ja kasvavasta ruutuajasta. Haluamme tarjota innostavia, helposti lähestyttäviä tapoja liikkua enemmän yhdessä. Ilo-panda toimii kampanjamme helposti lähestyttävänä maskottina ja kannustajana, joka muistuttaa meitä siitä, että jokainen askel kohti aktiivisempaa arkea on tärkeä.
                \n
                Kampanjamme näkyy niin sosiaalisessa mediassa kuin ympäristössä. Kampanja tarjoaa aikuisille konkreettisia vinkkejä ja materiaaleja, joiden avulla omien ja läheisten lasten arkeen voi tuoda lisää liikettä yksi askel kerrallaan – syyllistämättä, mutta motivoiden. Tule mukaan kokemaan riemua koko perheen voimin ja luomaan iloa liikkeellä!`
            } />
            <PandaQuizButton />
            <div className="video">
                <video controls width="100%">
                    <source src="/videos/kampanjavideopieni.mp4" type="video/mp4" />
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
            }/>
            <EventItem />
        </div>
    )
}