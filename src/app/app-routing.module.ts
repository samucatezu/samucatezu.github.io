import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { layoutComponent } from "./Layout/layout.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: "", component: layoutComponent },
  { path: "layout", component: layoutComponent },
  { path: "profile", component: ProfileComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
