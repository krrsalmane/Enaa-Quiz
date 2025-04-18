import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "history",
        component: HistoryComponent
    },
    {
        path: "quiz",
        component:QuizComponent
    },
    {
        path: "result",
        component:ResultComponent
    }
];
