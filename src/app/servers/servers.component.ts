import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector : '[app-servers]',
  // selector : '.app-servers',
  templateUrl: './servers.component.html'

  // template : '<app-server></app-server><app-server></app-server>'

  // template : `
  // <app-server></app-server>
  // <app-server></app-server>
  // `
})
export class ServersComponent implements OnInit {

  allowNewServer : boolean = false;
  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    }
    ,2000);
  }

  getAccess = function():boolean{
    return this.allowNewServer;
  }

  ngOnInit() {
  }

}
