const fs = require('fs');
const path = require('path');
const eventsData = require('../db/eventiDb'); // Importa i dati JSON come oggetto

class Event {
  constructor(title, description, date, maxSeats) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.maxSeats = maxSeats;
  }

//   static findAll() {
//     return this.find({});
//   }

  static read() {
    // Leggi il file JSON e analizzalo in un array di eventi
    const data = eventsData
    return data;
  }

  static save(event) {
    // Leggi gli eventi esistenti, aggiungi il nuovo evento e salva i dati aggiornati
    let events = Event.read();
    console.log(events)

    if(!event.id) {
      // Restituisce l'elemento con l'id più alto
      let idMaggiore = 0;
      for (const elemento of events) {
          if ( elemento.id > idMaggiore) {
              idMaggiore = elemento.id;
          }
      }
      //console.log(idMaggiore)
      event.id = idMaggiore + 1;
      events.push(event);
    } else {
      events = events.map(elm => elm.id == event.id ? event : elm)
    }


    const filePath = path.join(__dirname, '../db/eventiDb.json');
    const updatedData = JSON.stringify(events);
    fs.writeFileSync(filePath, updatedData);

    return event;
  }
}

//const event = new Event ('1', 'titolo', 'descrizione', 'data', '10')
//event.save();
module.exports = Event