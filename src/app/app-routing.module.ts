import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'criarconta',loadChildren: () => import('./criarconta/criarconta.module').then( m => m.CriarcontaPageModule)},
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'politicaprivacidade',
    loadChildren: () => import('./politicaprivacidade/politicaprivacidade.module').then( m => m.PoliticaprivacidadePageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
