import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from "./footer/footer.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, SidebarComponent, NavbarComponent, DashboardComponent, FontAwesomeModule, FooterComponent, PageNotFoundComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'e-matr';
    showSidebarAndNavbar: boolean = true;  // Variable pour contrôler l'affichage du sidebar et du navbar

    constructor(private router: Router) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Vérifie si l'URL actuelle contient '/login' ou '/register'
          this.showSidebarAndNavbar = !['/login', '/register'].includes(event.urlAfterRedirects);
        }
      });
    }
}
