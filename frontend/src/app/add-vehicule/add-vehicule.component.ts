import { Component } from '@angular/core';

@Component({
  selector: 'app-add-vehicule',
  standalone: true,
  imports: [],
  template: `
  <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <div class="col-sm-12 col-xl-12">
        <div class="bg-light rounded h-100 p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Nouvelle vehicule</h6>
              <a href="/vehicule" class="btn-add-vehicule btn btn-primary"><i class="fa fa-arrow-left"></i> Retour à la liste</a>
          </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Numéro d'immatriculation</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Numéro de châssis</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Marque et modèle</label>
            </div>
            <div class="form-floating mb-3">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected="">Voiture</option>
                    <option value="1">Moto</option>
                    <option value="2">Bajaj</option>
                    <option value="3">Bicyclette</option>
                </select>
                <label for="floatingSelect">Type de véhicule</label>
            </div>
            <div class="form-floating mb-3">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected="">Essence</option>
                    <option value="1">Diesel</option>
                    <option value="2">Electrique</option>
                    <option value="3">Hybride</option>
                </select>
                <label for="floatingSelect">Type de carburant</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Couleur </label>
            </div>
            <div class="form-floating mb-3">
              <input type="month" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Année de fabrication</label>
            </div>
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Date de mise en circulation</label>
            </div>
            
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px;"></textarea>
                <label for="floatingTextarea">Commentaires</label>
            </div>
            <button type="button" class="btn btn-primary m-2 float-end"><i class="fa fa-save me-2"></i> Enregistrer</button>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './add-vehicule.component.css'
})
export class AddVehiculeComponent {

}
