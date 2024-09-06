import { Component } from '@angular/core';

@Component({
  selector: 'app-add-immatriculation',
  standalone: true,
  imports: [],
  template: `
    <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <div class="col-sm-12 col-xl-12">
        <div class="bg-light rounded h-100 p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Nouvelle immatriculation</h6>
              <a href="/immatriculation" class="btn-add-vehicule btn btn-primary"><i class="fa fa-arrow-left"></i> Retour à la liste</a>
          </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Numéro d'immatriculation</label>
            </div>
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Date d'immatriculation </label>
            </div>
            <div class="form-floating mb-3">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected="">Actif</option>
                    <option value="1">Expiré</option>
                    <option value="2">Suspendu</option>
                </select>
                <label for="floatingSelect">Statut de l'immatriculation</label>
            </div>
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Date d'expiration</label>
            </div>
            
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px;"></textarea>
                <label for="floatingTextarea">Historique de l'immatriculation</label>
            </div>
            <button type="button" class="btn btn-primary m-2 float-end"><i class="fa fa-save me-2"></i> Enregistrer</button>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './add-immatriculation.component.css'
})
export class AddImmatriculationComponent {

}
