import { Component } from '@angular/core';

export type tipoStanza = "singola" | "doppia" | "tripla"; /* types of rooms */

/* room type */
export type room = { id: number, tipologia: tipoStanza, descrizione: string, prezzo: number, disponibile: boolean };

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.scss'
})
export class AppComponent {

    roomList: Array<room> = [
        {
            id: 1,
            tipologia: "singola",
            descrizione: "Stanza singola non finestrata",
            prezzo: 70,
            disponibile: true
        },
        {
            id: 2,
            tipologia: "singola",
            descrizione: "Stanza singola vista piscina",
            prezzo: 50,
            disponibile: true
        },
        {
            id: 3,
            tipologia: "doppia",
            descrizione: "Stanza doppia matrimoniale",
            prezzo: 80,
            disponibile: true
        },
        {
            id: 4,
            tipologia: "tripla",
            descrizione: "Stanza tripla con matrimoniale e letto singolo",
            prezzo: 140,
            disponibile: true
        },
        {
            id: 5,
            tipologia: "tripla",
            descrizione: "Stanza tripla con tre letti singoli",
            prezzo: 120,
            disponibile: true
        },
        {
            id: 6,
            tipologia: "doppia",
            descrizione: "Stanza doppia con due letti singoli",
            prezzo: 80,
            disponibile: true
        },
        {
            id: 7,
            tipologia: "singola",
            descrizione: "Stanza singola finestrata",
            prezzo: 75,
            disponibile: false
        }

    ];

    reservedRooms: Array<room> = [];

    totalPrice: number = 0;

    reserveRoom(id: number, index: number) {
        // this.totalPrice += priceTag;

        let selectedRoom = this.roomList.find(room => room.id == id);
        this.totalPrice += selectedRoom.prezzo;
        this.reservedRooms.push(selectedRoom);
        this.roomList.splice(index, 1);
    }
}
