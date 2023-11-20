import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'library-recipe',
    loadChildren: () => import('./library-recipe/library-recipe.module').then( m => m.LibraryRecipePageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'k1',
    loadChildren: () => import('./k1/k1.module').then( m => m.K1PageModule)
  },
  {
    path: 'k2',
    loadChildren: () => import('./k2/k2.module').then( m => m.K2PageModule)
  },
  {
    path: 'k3',
    loadChildren: () => import('./k3/k3.module').then( m => m.K3PageModule)
  },
  {
    path: 'k4',
    loadChildren: () => import('./k4/k4.module').then( m => m.K4PageModule)
  },
  {
    path: 'k5',
    loadChildren: () => import('./k5/k5.module').then( m => m.K5PageModule)
  },
  {
    path: 'k6',
    loadChildren: () => import('./k6/k6.module').then( m => m.K6PageModule)
  },
  {
    path: 'k7',
    loadChildren: () => import('./k7/k7.module').then( m => m.K7PageModule)
  },
  {
    path: 'k8',
    loadChildren: () => import('./k8/k8.module').then( m => m.K8PageModule)
  },
  {
    path: 'k9',
    loadChildren: () => import('./k9/k9.module').then( m => m.K9PageModule)
  },
  {
    path: 'k10',
    loadChildren: () => import('./k10/k10.module').then( m => m.K10PageModule)
  },
  {
    path: 'k11',
    loadChildren: () => import('./k11/k11.module').then( m => m.K11PageModule)
  },
  {
    path: 'k12',
    loadChildren: () => import('./k12/k12.module').then( m => m.K12PageModule)
  },
  {
    path: 'k13',
    loadChildren: () => import('./k13/k13.module').then( m => m.K13PageModule)
  },
  {
    path: 'k14',
    loadChildren: () => import('./k14/k14.module').then( m => m.K14PageModule)
  },
  {
    path: 'k15',
    loadChildren: () => import('./k15/k15.module').then( m => m.K15PageModule)
  },
  {
    path: 'k16',
    loadChildren: () => import('./k16/k16.module').then( m => m.K16PageModule)
  },
  {
    path: 'k17',
    loadChildren: () => import('./k17/k17.module').then( m => m.K17PageModule)
  },
  {
    path: 'k18',
    loadChildren: () => import('./k18/k18.module').then( m => m.K18PageModule)
  },
  {
    path: 'k19',
    loadChildren: () => import('./k19/k19.module').then( m => m.K19PageModule)
  },
  {
    path: 'k20',
    loadChildren: () => import('./k20/k20.module').then( m => m.K20PageModule)
  },
  {
    path: 'k21',
    loadChildren: () => import('./k21/k21.module').then( m => m.K21PageModule)
  },
  {
    path: 'k22',
    loadChildren: () => import('./k22/k22.module').then( m => m.K22PageModule)
  },
  {
    path: 'k23',
    loadChildren: () => import('./k23/k23.module').then( m => m.K23PageModule)
  },
  {
    path: 'k24',
    loadChildren: () => import('./k24/k24.module').then( m => m.K24PageModule)
  },
  {
    path: 'k25',
    loadChildren: () => import('./k25/k25.module').then( m => m.K25PageModule)
  },
  {
    path: 'k26',
    loadChildren: () => import('./k26/k26.module').then( m => m.K26PageModule)
  },
  {
    path: 'k27',
    loadChildren: () => import('./k27/k27.module').then( m => m.K27PageModule)
  },
  {
    path: 'k28',
    loadChildren: () => import('./k28/k28.module').then( m => m.K28PageModule)
  },
  {
    path: 'k29',
    loadChildren: () => import('./k29/k29.module').then( m => m.K29PageModule)
  },
  {
    path: 'k30',
    loadChildren: () => import('./k30/k30.module').then( m => m.K30PageModule)
  },
  {
    path: 'k31',
    loadChildren: () => import('./k31/k31.module').then( m => m.K31PageModule)
  },
  {
    path: 'k32',
    loadChildren: () => import('./k32/k32.module').then( m => m.K32PageModule)
  },
  {
    path: 'k33',
    loadChildren: () => import('./k33/k33.module').then( m => m.K33PageModule)
  },
  {
    path: 'k34',
    loadChildren: () => import('./k34/k34.module').then( m => m.K34PageModule)
  },
  {
    path: 'k35',
    loadChildren: () => import('./k35/k35.module').then( m => m.K35PageModule)
  },
  {
    path: 'k36',
    loadChildren: () => import('./k36/k36.module').then( m => m.K36PageModule)
  },
  {
    path: 'k37',
    loadChildren: () => import('./k37/k37.module').then( m => m.K37PageModule)
  },
  {
    path: 'k38',
    loadChildren: () => import('./k38/k38.module').then( m => m.K38PageModule)
  },
  {
    path: 'k39',
    loadChildren: () => import('./k39/k39.module').then( m => m.K39PageModule)
  },
  {
    path: 'k40',
    loadChildren: () => import('./k40/k40.module').then( m => m.K40PageModule)
  },
  {
    path: 'k41',
    loadChildren: () => import('./k41/k41.module').then( m => m.K41PageModule)
  },
  {
    path: 'k42',
    loadChildren: () => import('./k42/k42.module').then( m => m.K42PageModule)
  },
  {
    path: 'k43',
    loadChildren: () => import('./k43/k43.module').then( m => m.K43PageModule)
  },
  {
    path: 'k44',
    loadChildren: () => import('./k44/k44.module').then( m => m.K44PageModule)
  },
  {
    path: 'k45',
    loadChildren: () => import('./k45/k45.module').then( m => m.K45PageModule)
  },
  {
    path: 'k46',
    loadChildren: () => import('./k46/k46.module').then( m => m.K46PageModule)
  },
  {
    path: 'k47',
    loadChildren: () => import('./k47/k47.module').then( m => m.K47PageModule)
  },
  {
    path: 'k48',
    loadChildren: () => import('./k48/k48.module').then( m => m.K48PageModule)
  },
  {
    path: 'k49',
    loadChildren: () => import('./k49/k49.module').then( m => m.K49PageModule)
  },
  {
    path: 'k50',
    loadChildren: () => import('./k50/k50.module').then( m => m.K50PageModule)
  },
  {
    path: 'k51',
    loadChildren: () => import('./k51/k51.module').then( m => m.K51PageModule)
  },
  {
    path: 'k52',
    loadChildren: () => import('./k52/k52.module').then( m => m.K52PageModule)
  },
  {
    path: 'k53',
    loadChildren: () => import('./k53/k53.module').then( m => m.K53PageModule)
  },
  {
    path: 'k54',
    loadChildren: () => import('./k54/k54.module').then( m => m.K54PageModule)
  },
  {
    path: 'k55',
    loadChildren: () => import('./k55/k55.module').then( m => m.K55PageModule)
  },
  {
    path: 'k56',
    loadChildren: () => import('./k56/k56.module').then( m => m.K56PageModule)
  },
  {
    path: 'k57',
    loadChildren: () => import('./k57/k57.module').then( m => m.K57PageModule)
  },
  {
    path: 'k58',
    loadChildren: () => import('./k58/k58.module').then( m => m.K58PageModule)
  },
  {
    path: 'k59',
    loadChildren: () => import('./k59/k59.module').then( m => m.K59PageModule)
  },
  {
    path: 'k60',
    loadChildren: () => import('./k60/k60.module').then( m => m.K60PageModule)
  },
  {
    path: 'k61',
    loadChildren: () => import('./k61/k61.module').then( m => m.K61PageModule)
  },
  {
    path: 'k62',
    loadChildren: () => import('./k62/k62.module').then( m => m.K62PageModule)
  },
  {
    path: 'k63',
    loadChildren: () => import('./k63/k63.module').then( m => m.K63PageModule)
  },
  {
    path: 'k64',
    loadChildren: () => import('./k64/k64.module').then( m => m.K64PageModule)
  },
  {
    path: 'k65',
    loadChildren: () => import('./k65/k65.module').then( m => m.K65PageModule)
  },
  {
    path: 'k66',
    loadChildren: () => import('./k66/k66.module').then( m => m.K66PageModule)
  },
  {
    path: 'k67',
    loadChildren: () => import('./k67/k67.module').then( m => m.K67PageModule)
  },
  {
    path: 'k68',
    loadChildren: () => import('./k68/k68.module').then( m => m.K68PageModule)
  },
  {
    path: 'k69',
    loadChildren: () => import('./k69/k69.module').then( m => m.K69PageModule)
  },
  {
    path: 'k70',
    loadChildren: () => import('./k70/k70.module').then( m => m.K70PageModule)
  },
  {
    path: 'k71',
    loadChildren: () => import('./k71/k71.module').then( m => m.K71PageModule)
  },
  {
    path: 'k72',
    loadChildren: () => import('./k72/k72.module').then( m => m.K72PageModule)
  },
  {
    path: 'k73',
    loadChildren: () => import('./k73/k73.module').then( m => m.K73PageModule)
  },
  {
    path: 'k74',
    loadChildren: () => import('./k74/k74.module').then( m => m.K74PageModule)
  },
  {
    path: 'k75',
    loadChildren: () => import('./k75/k75.module').then( m => m.K75PageModule)
  },
  {
    path: 'k76',
    loadChildren: () => import('./k76/k76.module').then( m => m.K76PageModule)
  },
  {
    path: 'k77',
    loadChildren: () => import('./k77/k77.module').then( m => m.K77PageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
