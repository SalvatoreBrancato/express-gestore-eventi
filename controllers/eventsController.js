const Event = require('../models/event')
const eventsData = require('../db/eventiDb'); // Importa i dati JSON come oggetto

function index(req, res){
    //console.log(eventsData)
    //let events = Event.findAll(); // Recupera tutti gli eventi

    res.send(eventsData);
}

function store(req, res){
    const {title, description, date, maxSeats } = req.body;
    console.log(req.body)

    const newEvent = new Event( title, description, date, maxSeats );
    const newEventSaved = Event.save(newEvent);

  res.send(newEventSaved);
}

function update(req, res){

}

module.exports = {
    index,
    store,
    update
}
