import { Component, OnInit } from '@angular/core';
import { log } from 'util';

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
  serverCreationStatus : string = 'No server was created!';
  serverName : string = '';

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    }
    ,5000);
  }

  getAccess = function():boolean{
    return this.allowNewServer;
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created!  ';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
