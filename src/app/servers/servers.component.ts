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
  serverName : string = 'Test';
  serverCreated : boolean = false;
  servers = ['Test 1','Test 2'];

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
    this.serverCreated = true;  
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Server Name: '+this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
