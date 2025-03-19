import { Component } from '@angular/core';
import { todoList, Task } from './models/todo'; // Task interface e todlist importato da models/todo.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
}) // @Component

export class AppComponent {
  title = 'todoList';

  todoList: Array<Task> = todoList; // Lista di tasks

  isListVisible: boolean = true; // Indicatore se la lista è visibile
  isTaskDetailsVisible: boolean = false; // Indicatore se il componente "dettagli" è visibile
  isAddTaskVisible: boolean = false; // Indicatore se il componente "addiungi task" è visibile

  taskDetails: Task; // Task selezionato per il dettaglio
  taskAdded: Task; // Task aggiunto dal componente "aggiungi task"

  // Metodo per marcare un task come completato
  toggleCompletion(task: Task): void {
    task.completato = !task.completato;
  }

  showDetails(task: Task): void {
    this.isListVisible = false;
    this.isTaskDetailsVisible = true;
    this.isAddTaskVisible = false;
    this.taskDetails = task;
  } // showDetail()

  // Metodo per ritornare alla lista dei tasks
  backToList(): void {
    this.isTaskDetailsVisible = false;
    this.isListVisible = true;
    this.isAddTaskVisible = false;
  } // backToListFromDetail()

  // Metodo per eliminare un task specifico dal componente "dettagli"
  deleteTaskFromDetails(selectedTask: Task): void {
    /* console.log('Task deleted:', task); */
    this.todoList = this.todoList.filter((task) => task.id != selectedTask.id);

    /* console.log(this.todoList) */
    this.backToList();
  } // deleteTaskFromDetail()

  // Metodo per mostrare il form per aggiungere un nuovo task
  showAddTask(): void {
    this.isListVisible = false;
    this.isTaskDetailsVisible = false;
    this.isAddTaskVisible = true;
  } // showAddTask()

  // Metodo per aggiungere un nuovo task dal componente "aggiungi task"
  addTask(newTask: Task): void {
    /* Calcolo dell'id del nuovo tasks */
    const newTaskId = Math.max(...this.todoList.map((task) => task.id)) + 1;

    /* Creazione di un oggetto Task per inserirlo nel todoList */
    const nuovaTask: Task = {
      id: newTaskId,
      titolo: newTask.titolo,
      data_esecuzione: newTask.data_esecuzione,
      descrizione: newTask.descrizione,
      completato: false
    };

    this.backToList();
    this.todoList.push(nuovaTask); // Inserimento del nuovo task nel todoList

    /*     console.log(this.todoList);
        console.log('Task added:', nuovaTask); */
  } // addTask()
} // AppComponent
