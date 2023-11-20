const Event = require('../models/event')
const eventsData = require('../db/eventiDb'); // Importa i dati JSON come oggetto

function index(req, res){
    const { title, description } = req.query;
    console.log(title)
    if(title){
        const filtroTitolo = eventsData.find((evento) => evento.title === title);
        res.send(filtroTitolo)
    } else if(description){
        const filtroDescrizione = eventsData.find((evento) => evento.description === description);
        res.send(filtroDescrizione)
    } else {
        res.send(eventsData);
    }
    
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
    const eventToUpdate = eventsData.find(event => event.id == req.params.id);

    if(!eventToUpdate) throw new Error("non esiste l'evento");
    
    const eventUpdated = {
        ...eventToUpdate,
        ...req.body
    }

    const eventSaved = Event.save(eventUpdated);
    
    res.send(eventSaved)
}

module.exports = {
    index,
    show,
    store,
    update
}
