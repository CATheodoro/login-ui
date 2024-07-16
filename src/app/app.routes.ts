import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'register',
        component: RegisterComponent,
    },
    {
        path:'activate-account',
        component: ActivateAccountComponent,
    },
    {
        path:'users',
        component: UsersComponent,
    },
    
];
