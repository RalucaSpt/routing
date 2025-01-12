import { Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { routes as usersRoutes } from "./users/users.routes";

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: usersRoutes,
    },
    {
        path: '**',
        component: NoTaskComponent,
    }

];