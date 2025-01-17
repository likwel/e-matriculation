import { Component } from '@angular/core';

@Component({
  selector: 'app-type-vehicule',
  standalone: true,
  imports: [],
  template: `
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
      <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Type de vehicule existant</h6>
              <!-- <a href="/vehicule/add" class="btn-add-vehicule btn btn-primary"><i class="fa fa-plus"></i> Ajouter une voiture</a> -->
          </div>
          <div class="table-responsive">
              <table class="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                      <tr class="text-dark">
                          <th scope="col"><input class="form-check-input" type="checkbox"></th>
                          <th scope="col">Date</th>
                          <th scope="col">Invoice</th>
                          <th scope="col">Customer</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><input class="form-check-input" type="checkbox"></td>
                          <td>01 Jan 2045</td>
                          <td>INV-0123</td>
                          <td>Jhon Doe</td>
                          <td>$123</td>
                          <td>Paid</td>
                          <td><a class="btn btn-sm btn-primary" href="#">Detail</a></td>
                      </tr>
                      <tr>
                          <td><input class="form-check-input" type="checkbox"></td>
                          <td>01 Jan 2045</td>
                          <td>INV-0123</td>
                          <td>Jhon Doe</td>
                          <td>$123</td>
                          <td>Paid</td>
                          <td><a class="btn btn-sm btn-primary" href="#">Detail</a></td>
                      </tr>
                      <tr>
                          <td><input class="form-check-input" type="checkbox"></td>
                          <td>01 Jan 2045</td>
                          <td>INV-0123</td>
                          <td>Jhon Doe</td>
                          <td>$123</td>
                          <td>Paid</td>
                          <td><a class="btn btn-sm btn-primary" href="#">Detail</a></td>
                      </tr>
                      <tr>
                          <td><input class="form-check-input" type="checkbox"></td>
                          <td>01 Jan 2045</td>
                          <td>INV-0123</td>
                          <td>Jhon Doe</td>
                          <td>$123</td>
                          <td>Paid</td>
                          <td><a class="btn btn-sm btn-primary" href="#">Detail</a></td>
                      </tr>
                      <tr>
                          <td><input class="form-check-input" type="checkbox"></td>
                          <td>01 Jan 2045</td>
                          <td>INV-0123</td>
                          <td>Jhon Doe</td>
                          <td>$123</td>
                          <td>Paid</td>
                          <td><a class="btn btn-sm btn-primary" href="#">Detail</a></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
  <!-- Recent Sales End -->
  `,
  styleUrl: './type-vehicule.component.css'
})
export class TypeVehiculeComponent {

}
