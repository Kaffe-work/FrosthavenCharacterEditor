import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterEditorComponent } from './ui/tools/editor/character/character';

const routes: Routes = [
  { path: '', redirectTo: 'editor/character', pathMatch: 'full' }, // Redirect empty path to editor/character
  { path: 'editor/character', component: CharacterEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}