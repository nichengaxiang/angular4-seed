import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from './home/home.page.component'
import { SharedModule } from '../../shared/shared.module'

const routes: Routes = [
    { path: '', component: HomePageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule
    ],
    declarations: [
        HomePageComponent
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule {
}