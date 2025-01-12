import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUSerName as resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { routes as usersRoutes } from "./users/users.routes";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = ( route, segments) =>{
    const router = inject(Router);
    const shoulGetAccess = Math.random();
    if(shoulGetAccess < 0.5){
        return true;
    }

    return new RedirectCommand(router.parseUrl('/unauthorized'));
};

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
        canMatch: [dummyCanMatch],
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