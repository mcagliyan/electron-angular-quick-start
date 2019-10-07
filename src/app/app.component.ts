import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  constructor(private electronService: ElectronService) { }


  title = 'AppName';

  public playPingPong()
  {
    if (this.electronService.isElectronApp)
    {
      const pong: string = this.electronService.ipcRenderer.sendSync('ping');
      console.log(pong);
    }
  }
}
