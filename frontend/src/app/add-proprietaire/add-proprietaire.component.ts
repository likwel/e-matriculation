import { Component } from '@angular/core';

@Component({
  selector: 'app-add-proprietaire',
  standalone: true,
  imports: [],
  template: `
    <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <div class="col-sm-12 col-xl-12">
        <div class="bg-light rounded h-100 p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Nouvelle proprietaire</h6>
              <a href="/proprietaire" class="btn-add-vehicule btn btn-primary"><i class="fa fa-arrow-left"></i> Retour à la liste</a>
          </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Nom et prénom</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Adresse</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Numéro de téléphone </label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Adresse e-mail </label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Numéro de permis de conduire </label>
            </div>
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Date de naissance</label>
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
  styleUrl: './add-proprietaire.component.css'
})
export class AddProprietaireComponent {

}
