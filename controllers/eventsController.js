const Event = require('../models/event')
const eventsData = require('../db/eventiDb'); // Importa i dati JSON come oggetto

function index(req, res){
    //console.log(Event.findAll())
    //let events = Event.findAll(); // Recupera tutti gli eventi

    res.send(eventsData);
}

function show(req, res){
    res.format({
        json:()=>{
            const event = eventsData.find((event)=>event.id == req.params.id)
            res.send(event)
        },
        default:()=>{
            res.status(404).send('richiesta formato non previsto')
        }
    })
    
}

function store(req, res){
    const {title, description, date, maxSeats } = req.body;
    //console.log(req.body)

    const newEvent = new Event( title, description, date, maxSeats );
    const newEventSaved = Event.save(newEvent);

  res.send(newEventSaved);
}

function update(req, res){

}

module.exports = {
    index,
    show,
    store,
    update
}
