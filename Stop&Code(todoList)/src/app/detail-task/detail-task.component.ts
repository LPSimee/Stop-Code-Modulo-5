import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/todo'; // Task interface importata da models/todo.ts

@Component({
  selector: 'app-detail-task',
  standalone: false,
  templateUrl: './detail-task.component.html',
  styleUrl: './detail-task.component.css'
}) // @Component

export class DetailTaskComponent {
  @Input() task: Task;
  @Output() backToListEvent = new EventEmitter(); // Non c'è bisogno di specificare il tipo di dato dell'evento
  @Output() deleteTaskEvent = new EventEmitter<Task>(); // Evento per l'eliminazione di un task

  // Metodo per cambiare lo stato di completamento di un task
  toggleCompletion(): void {
    this.task.completato = !this.task.completato;
  } // toggleCompleted()

  // Metodo per emettere l'evento backToListEvent quando viene cliccato il pulsante "Torna indietro"
  returnToList() {
    this.backToListEvent.emit(); // Emissione per il componente parent dell'evento backToListEvent
  } // returnToList()

  // Metodo per emettere l'evento deleteTaskEvent quando viene cliccato il pulsante "Elimina"
  deleteTask(): void {
    if (confirm("Sicuro di eliminare l'elemento selezionato?")) {
      console.log(this.task.id)
      this.deleteTaskEvent.emit(this.task); // Emissione per il componente parent dell'evento deleteTaskEvent
    }
  } // deleteTask()
} // DetailTaskComponent
