import {Component, OnInit} from '@angular/core';
import {KeycloakService} from '../../services/keycloak.service';
import {TestService} from '../../service/test.service';

@Component({
  selector: 'app-show-token',
  templateUrl: './show-token.component.html',
  styleUrls: ['./show-token.component.css']
})
export class ShowTokenComponent implements OnInit {
  header: string;
  token;

  constructor(private keycloakService: KeycloakService, private servie: TestService) {
  }

  ngOnInit() {
    this.token = this.keycloakService.getToken();
  /*  this.servie.getHeader(this.token).subscribe(data => {
      console.log(data);
    });*/
  }

}
