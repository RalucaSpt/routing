import { Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUSerName as resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { routes as usersRoutes } from "./users/users.routes";

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
        title: 'No tasks found'
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: usersRoutes,
        data:{
            message: 'Hello'
        },
        resolve: {
            userName: resolveUserName
        },
        title: resolveTitle
    },
    {
        path: '**',
        component: NoTaskComponent,
    }

];