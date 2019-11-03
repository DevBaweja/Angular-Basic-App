import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
    // This is typescript feature
    serverID : number = 4200;
    serverStatus : string = 'online';

    getStatus = function(serverID:number):string {
        if(serverID===this.serverID)
        return this.serverStatus;
        else 
        return 'offline';
    }
}