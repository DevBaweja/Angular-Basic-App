import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
    .online{
        color : white;
    }
    `]
})
export class ServerComponent{
    // This is typescript feature
    serverID : number = 4200;
    serverStatus : string = 'online';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    // Expression function
    getStatus = function(serverID:number):string {
        if(serverID===this.serverID)
        return this.serverStatus;
        else 
        return 'offline';
    }

    getServerStatus(serverID:number):string
    {
        if(serverID===this.serverID)
        return this.serverStatus;
        else 
        return 'offline';
    }

    getColor(): string{
        return this.serverStatus === 'offline' ?  'red' : 'green';
    }
}