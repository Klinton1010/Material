import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material';
  hidden=false;
  show=false;
  load=0;
  toggleBadgeVisibility()
{
  this.hidden=!this.hidden;
}
showSpinner()
{
  this.show=true;
  setTimeout(()=>{this.show=false},5000)
}

loadspinner()
{
if(this.load<=100)
 this.load++;
}
}


