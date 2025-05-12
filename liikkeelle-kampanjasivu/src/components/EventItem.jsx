function EventDates() {
  return (
    <div className="event">
      <ul>
        <li>1. tapahtuma: Helsinki – 3. toukokuuta</li>
        <li>2. tapahtuma: Espoo – 5. toukokuuta</li>
        <li>3. tapahtuma: Turku – 10. toukokuuta</li>
        <li>4. tapahtuma: Tampere – 12. toukokuuta</li>
        <li>5. tapahtuma: Jyväskylä – 16. toukokuuta</li>
        <li>6. tapahtuma: Kuopio – 18. toukokuuta</li>
        <li>7. tapahtuma: Oulu – 24. toukokuuta</li>
        <li>8. tapahtuma: Rovaniemi – 26. toukokuuta</li>
      </ul>
    </div>
  )
}

function EventTimes() {
    return (
      <div className="event">
        <ul>
          <li>16:00 Ilo-panda saapuu alueelle!</li>
          <li>16-17 Aktiivinen ja hauska rastikiertely</li>
          <li>17:00 Leikkimielinen maastojuoksukilpailu</li>
          <li>17:30 Palkintojenjako kaikille osallistujille</li>
          <li>17:45 Rastikiertelyn pistekorttien palautus</li>
          <li>18:00 Vieraileva urheilijatähti saapuu</li>
          <li>18-20 Tips and tricks! -piste vanhemmille</li>
          <li>18-20 Lajikokeiluita ja hauskanpitoa</li>
        </ul>
      </div>
    )
  }

export default function EventItem() {
    return (
      <div className="eventItemContainer">
        <h2>Ilo-pandan liikuntakiertueen aikataulu</h2> 
        <div className="eventItem">
            <EventDates />
            <EventTimes />
            <img src='/images/juoksevaPanda.png' alt='juokseva panda' id='bouncing-image' />
            
            <div className="containerLogo">
              <div className="sponsorlogos">
                <img id='intersport' src='/images/Intersport.png' alt='Intersport-logo' />
                <img id='olympiakomitea' src='/images/Olympiakomitea-logo.png' alt='Olympiakomitea-logo' />
              </div>
            </div>

        </div>
      </div>
    )
  }