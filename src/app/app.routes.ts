import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexEnComponent } from './index-en/index-en.component';
import { app } from '../../server';
import { IndexUaComponent } from './index-ua/index-ua.component';
import { IndexFrComponent } from './index-fr/index-fr.component';
import { IndexRuComponent } from './index-ru/index-ru.component';
import { IndexItComponent } from './index-it/index-it.component';

export const routes: Routes = [
    { path: 'it', component: IndexItComponent },
    { path: 'en', component: IndexEnComponent },
    { path: 'ua', component: IndexUaComponent },
    { path: 'fr', component: IndexFrComponent },
    { path: 'ru', component: IndexRuComponent },
    { path: '',   redirectTo: 'it', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: IndexItComponent }, 
];
