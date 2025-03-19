import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
}) // @Component

export class AddTaskComponent {

  @Output() backToListEvent = new EventEmitter();
  @Output() addTaskEvent = new EventEmitter();

  taskTitle: string = "";
  taskDescription: string = "";
  taskDate: string = "";

  isTitleIncorrect: boolean = false;
  isDescriptionIncorrect: boolean = false;
  isDateIncorrect: boolean = false;

  returnToList() {
    this.backToListEvent.emit(); // Emissione per il componente parent dell'evento backToListEvent
  } // returnToList()

  addTask(e: Event) {
    e.preventDefault();

    // Reset degli errori
    this.isTitleIncorrect = false;
    this.isDescriptionIncorrect = false;
    this.isDateIncorrect = false;

    // Controlli di validazione (se gli input sono vuoti)
    if (!this.taskTitle.trim()) {
      this.isTitleIncorrect = true;
    }
    if (!this.taskDescription.trim()) {
      this.isDescriptionIncorrect = true;
    }
    if (!this.taskDate) {
      this.isDateIncorrect = true;
    }

    // Interrompiamo l'invio se sono presenti errori
    if (this.isTitleIncorrect || this.isDescriptionIncorrect || this.isDateIncorrect) {
      return;
    }

    /* Emissione di un oggetto Task senza id */
    this.addTaskEvent.emit({
      titolo: this.taskTitle,
      data_esecuzione: this.taskDate,
      descrizione: this.taskDescription,
      completato: false
    }); // Emissione per il componente parent dell'evento addTaskEvent
  } // addTask()
} // AddTaskComponent