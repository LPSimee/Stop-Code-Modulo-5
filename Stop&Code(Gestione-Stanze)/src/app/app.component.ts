import { Component } from '@angular/core';


export type tipoStanza = "singola" | "doppia" | "tripla"; /* Per tipizzare la tipologia della stanza */

/* Tipizzazione di ogni stanza */
export type stanza = {id: number, tipologia: tipoStanza, descrizione:string, prezzo: number, disponibile: boolean}; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

/* Esportiamo le stanze */
export class AppComponent {
  title = 'Gestione-Stanze';
  
  stanzePren: Array<stanza> = []; // Array contenente le stanze prenotate 

  totale:number = 0; // Il prezzo totale (Incasso)

  /* dichiariamo un'array di 6 stanze */
  stanzeDisp: Array<stanza> = [
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
  ]; // stanzeDisp

  /* Metodo per sommare il prezzo della stanza sul totale */
  somma(prezzo: number){
    this.totale  += prezzo;
    //  this.stanzePren.reduce((somma, stanza) => somma + stanza.prezzo, 0)
    console.log(this.totale)
    return this.totale
  }

  /* Metodo per sottrarre il prezzo della stanza sul totale */
  sottrai(prezzo:number){
    this.totale -= prezzo;
    
    console.log(this.totale)
    return this.totale
  }
  
  /* Metodo per prenotare una stanza */
  prenota(id:number, index:number):void{
    console.log(id);

    let stanzaPren = this.stanzeDisp.find(stanza => stanza.id == id)

    this.somma(stanzaPren.prezzo);
    this.stanzePren.push(stanzaPren)
    this.stanzeDisp.splice(index, 1);
    console.log(this.stanzePren)

    
  } // prenota

  /* Metodo per rimuovere una stanza dalla prenotazione */
  rimuoviPrenotazione(index:number, id:number){
    console.log(index);

    let stanzaRimossa = this.stanzePren.find(stanza => stanza.id == id);

    this.sottrai(stanzaRimossa.prezzo);
    this.stanzePren.splice(index, 1)
    /* this.stanzePren.push(stanzePren) */
    this.stanzeDisp.splice(index, 0, stanzaRimossa);
   console.log(this.stanzePren)

   
  } // rimuoviPrenotazione
}// AppComponent
