import {Component, OnInit} from '@angular/core';
import {KeycloakService} from './services/keycloak.service';
import {TestService} from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  header: string;
  token;

  constructor(private keycloakService: KeycloakService, private servie: TestService) {
  }

  ngOnInit() {
    this.token = this.keycloakService.getToken();
    this.servie.getPermissions(this.token).subscribe(data => {
      console.log(data);
    });
  }

}
