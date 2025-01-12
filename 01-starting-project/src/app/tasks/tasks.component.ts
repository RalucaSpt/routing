import { Component, computed, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit {
  userId = input.required<string>();
  private tasksService = inject(TasksService);
 // order = input<'asc' | 'desc'>();
  order?: 'asc' | 'desc';
  userTasks = computed(() =>
    this.tasksService.allTasks().filter((task) => task.userId === this.userId())
  );
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
      const subscription = this.activatedRoute.queryParams.subscribe({
        next: (params) =>(this.order = params['order']),
      });
  }

}