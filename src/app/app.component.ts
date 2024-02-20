import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe_todo_list';
}
