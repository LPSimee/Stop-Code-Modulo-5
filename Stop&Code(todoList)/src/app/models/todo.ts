// todo.ts  
export interface Task {
  id: number;
  titolo: string;
  data_esecuzione: string;
  descrizione: string;
  completato?: boolean | string;
} // Task

export const todoList: Array<Task> = [
  {
    id: 1,
    titolo: "Tutoraggio 19/03/2025",
    data_esecuzione: "03-19-2025",
    descrizione: "Partecipare al tutoraggio programmato per il 19 marzo 2025.",
    completato: false
  },
  {
    id: 2,
    titolo: "Stop&Code di oggi",
    data_esecuzione: "03-13-2025",
    descrizione: "Completare lo Stop&Code previsto per oggi.",
    completato: true
  },
  {
    id: 3,
    titolo: "Lezione 4 Modulo Angular",
    data_esecuzione: "03-10-2025",
    descrizione: "Seguire la lezione 4 del Modulo Angular.",
    completato: true
  },
  {
    id: 4,
    titolo: "Lezione 5 Modulo Angular",
    data_esecuzione: "03-12-2025",
    descrizione: "Prepararsi per la lezione 5 del Modulo Angular.",
    completato: false
  },
  {
    id: 5,
    titolo: "Workshop Intelligenza Artificiale",
    data_esecuzione: "03-14-2025",
    descrizione: "Partecipare al workshop 'Intelligenza Artificiale: lo stato dell'arte.'",
    completato: true
  }
]; // todoList