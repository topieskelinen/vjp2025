export const questions = [
    {
        question: "Kun tulet koulusta kotiin, mitä teet mieluiten?",
        answers: [
            { text: "Syön välipalaa ja lähden ulos harrastuksiin", type: "däbäävä panda" },
            { text: "Hengailen kavereiden kanssa", type: "cool-panda" },
            { text: "Olen puhelimella tai katson telkkaria", type: "chillaava panda" },
            { text: "Lysähdän sänkyyn ja nukahdan", type: "unikekopanda" },
        ],
    },
    {
        question: "Mikä on lempitapasi viettää aikaa ystävien kanssa?",
        answers: [
            { text: "Leikkiä pihapelejä", type: "däbäävä panda" },
            { text: "Käydä puistossa", type: "cool-panda" },
            { text: "Pelata lautapelejä", type: "chillaava panda" },
            { text: "Pelata videopelejä", type: "unikekopanda" },
        ],
    },
    {
        question: "Millainen on unelmapäiväsi?",
        answers: [
            { text: "Paljon ulkoilua ja liikuntaa", type: "däbäävä panda" },
            { text: "Kavereiden kanssa oloa ja musiikkia", type: "cool-panda" },
            { text: "Rentoa hengailua ja Tiktokien tekemistä", type: "chillaava panda" },
            { text: "Videopelien pelaamista tai puhelimella olemista", type: "unikekopanda" },
        ],
    },
    {
        question: "Miltä liikkuminen sinusta tuntuu?",
        answers: [
            { text: "Se on parasta ikinä!", type: "däbäävä panda" },
            { text: "Tosi hauskaa", type: "cool-panda" },
            { text: "Ihan okei", type: "chillaava panda" },
            { text: "En tykkää yhtään!", type: "unikekopanda" },
        ],
    },
    {
        question: "Jos joku ehdottaa uutta juttua, mitä ajattelet?",
        answers: [
            { text: "Jee, mennään heti!", type: "däbäävä panda" },
            { text: "Kuulostaa kivalta, mitä siinä tapahtuu?", type: "cool-panda" },
            { text: "En oo ihan varma", type: "chillaava panda" },
            { text: "Ei kiitos, en jaksa", type: "unikekopanda" },
        ],
    },
];

export const pandaTypes = {
    "däbäävä panda": {
        description: "Olet kuin Ilo, täynnä energiaa! Vinkki: Olet tosi reipas ja innokas – kokeile joskus ohjata leikki tai keksi itse ihan uusi liike kaverille!",
        image: "/images/dabava_panda.png",
    },
    "cool-panda": {
        description: "Etenet oikeaan suuntaan, hyvä sä! Vinkki: Sinulla on taito oppia nopeasti. Kokeile jotain uutta liikuntalajia ja opeta se vaikka kaverille – se voi olla teille molemmille hauskaa!",
        image: "/images/cool_panda.png",
    },
    "chillaava panda": {
        description: "Otat rennosti ja nautiskelet! Vinkki: Rentoutuminen on taito! Mutta tiesitkö, että pieni liikuntahetki voi tehdä rentoilustakin kivempaa? Kokeile lähteä vaikka pikku pyöräilylle!",
        image: "/images/chillaava_panda.png",
    },
    "unikekopanda": {
        description: "Hui, on aika herätä! Vinkki: Pienikin askel riittää! Voisitko vaikka kokeilla pyöräyttää hula-vannetta minuutin ajan tai tanssia yhden laulun verran? Se voi piristää yllättävän paljon.",
        image: "/images/unikekopanda.png",
    },
};
