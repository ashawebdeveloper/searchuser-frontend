import {Component} from '@angular/core';
import {AppServices} from './app.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppServices],

})
export class AppComponent {
  title = 'app';
  public users;

  constructor(private appServices: AppServices) {
  }

  getUserDetails(userId) {

    this.appServices.getUserDetails(userId).subscribe(data => {
      this.users = data;
      console.log(this.users);
    }, err => console.error(err), () => console.log('done loading users'));


  }
}
