import { Component } from '@angular/core';

@Component({
  selector: 'app-service-unavailable',
  templateUrl: './service-unavailable.component.html',
  styleUrls: ['./service-unavailable.component.css']
})
export class ServiceUnavailableComponent {


  refreshPage(): void {
    window.location.reload();
  }
}
