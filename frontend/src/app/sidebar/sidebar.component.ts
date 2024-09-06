import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  template: `
    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3">
      <nav class="navbar bg-light navbar-light">
          <a href="index-2.html" class="navbar-brand mx-4 mb-3">
              <h3 class="text-primary">
              <svg width="20" height="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>/e/</title><path fill="#e94419" d="M13.13812.05332C9.6246-.2791 6.0635.95029 3.49234 3.53409.0641 6.97916-.94746 12.17083.93662 16.65094c1.88408 4.48013 6.30246 7.38884 11.16248 7.3483a2.27493 2.27493 0 10-.03759-4.54888c-3.02833.02526-5.75722-1.77058-6.93123-4.56223-1.174-2.79164-.54918-5.99816 1.58702-8.14484 2.13619-2.14669 5.339-2.78735 8.13635-1.62703 2.07161.85929 3.59079 2.57925 4.24094 4.64104H12.0506a2.27505 2.27505 0 100 4.5501h9.67488a2.27493 2.27493 0 002.27445-2.26717c.0167-4.86014-2.91357-9.264-7.40286-11.12612-1.12232-.46552-2.28778-.74998-3.45895-.8608Z"/></svg>matriculation
            </h3>
          </a>
          <div class="d-flex align-items-center ms-4 mb-4">
              <div class="position-relative">
                  <img class="rounded-circle" src="assets/images/user.jpg" alt="" style="width: 40px; height: 40px;">
                  <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>
              <div class="ms-3">
                  <h6 class="mb-0">Jhon Doe</h6>
                  <span>Admin</span>
              </div>
          </div>
          <div class="navbar-nav w-100">
              <a href="/" [class.active]="isRouteActive('/')" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>
              <a href="/immatriculation" [class.active]="isRouteActive('/immatriculation')" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>Immatriculation</a>
              <a href="/vehicule" [class.active]="isRouteActive('/vehicule')" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>Vehicule</a>
              <a href="/type-vehicule" [class.active]="isRouteActive('/type-vehicule')" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>Catégories</a>
              <a href="/proprietaire" [class.active]="isRouteActive('/proprietaire')" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>Proprietaire</a>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Elements</a>
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="button.html" class="dropdown-item">Buttons</a>
                      <a href="typography.html" class="dropdown-item">Typography</a>
                      <a href="element.html" class="dropdown-item">Other Elements</a>
                  </div>
              </div>
              <a href="widget.html" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Widgets</a>
              <a href="form.html" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</a>
              <a href="table.html" class="nav-item nav-link"><i class="fa fa-table me-2"></i>Tables</a>
              <a href="chart.html" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Charts</a>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Pages</a>
                  <div class="dropdown-menu bg-transparent border-0">
                      <a href="signin.html" class="dropdown-item">Sign In</a>
                      <a href="signup.html" class="dropdown-item">Sign Up</a>
                      <a href="404.html" class="dropdown-item">404 Error</a>
                      <a href="blank.html" class="dropdown-item">Blank Page</a>
                  </div>
              </div>
          </div>
      </nav>
  </div>
  <!-- Sidebar End -->
  `,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    currentRoute: string = '';
    listRoute: Array<string> = [];

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.router.events.subscribe(() => {
        this.currentRoute = this.router.url; // Récupère l'URL actuelle
        this.listRoute = this.currentRoute.split("/");
        
      });
    }
  
    isRouteActive(route: string): boolean {
        // alert(this.listRoute.includes(route))
        return this.currentRoute === route || this.currentRoute.includes(route+"/"); // Vérifie si l'URL actuelle correspond à la route donnée
    }
}
