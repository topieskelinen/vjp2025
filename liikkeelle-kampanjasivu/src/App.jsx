import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styleComponents/Textbox.css'
import './styleComponents/Header.css'
import './styleComponents/Footer.css'
import './styleComponents/PandaQuizButton.css'
import './styleComponents/EmblaCarousel.css'
import './styleComponents/EventItem.css'
import './styleComponents/Navigation.css'
import './styleComponents/EventButton.css'
import './styleComponents/TourMap.css'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './HomePage'
import EventPage from './EventPage'
import QuizPage from './QuizPage';

function App() {

  return (
    <Router>
      <div className="FrontPage">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tapahtuma" element={<EventPage />} />
          <Route path="/panda-quiz" element={<QuizPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;