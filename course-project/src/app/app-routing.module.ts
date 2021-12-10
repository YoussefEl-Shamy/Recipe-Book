import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DetailsTemplateComponent } from "./recipes/details-template/details-template.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes =[
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: DetailsTemplateComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: '404 Error! Page Not Found.'} },
  { path: '**', redirectTo: '/not-found' }, // must be the last one in the routes array
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true}),
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppROutingModule {

}
