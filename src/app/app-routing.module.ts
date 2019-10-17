import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { ServiceComponent } from './pages/service/service.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: "", component: AboutComponent },
  { path: "about", component: AboutComponent},
  { path: "team", component: TeamComponent},
  { path: "service", component: ServiceComponent},
  { path: "gallery", component: GalleryComponent},
  { path: "testimonials", component: TestimonialsComponent},
  { path: "contact", component: ContactComponent},
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
