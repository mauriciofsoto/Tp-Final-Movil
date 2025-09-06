import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistroPage } from './registro/registro.page'; // <-- importá tu página standalone
import { Tab1Page } from './tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registro',
    component: RegistroPage // <-- usá component en vez de loadChildren
  },
  {
  path: 'tab1',
  component: Tab1Page  // Debe importarse Tab1Page arriba
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
