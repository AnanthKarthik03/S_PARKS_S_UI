import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooditemsComponent } from './fooditems/fooditems.component';


const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'fooditems', component: FooditemsComponent },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
export const routing = RouterModule.forRoot(appRoutes);