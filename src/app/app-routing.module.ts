import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin';
import { SuperAdminComponent } from './superadmin/super-admin.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models/role';

const routes: Routes = [

    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles:  Role.Admin } },

    { path: 'super-admin', component: SuperAdminComponent, canActivate: [AuthGuard], data: { roles: Role.God } },

    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
