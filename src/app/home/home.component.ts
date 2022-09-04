import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
pid:any
products:any
myser:any
id:any;

  constructor(private myapp:AppComponent,private myservice:MyserviceService) {
   
   
   }

   
  ngOnInit(): void {
  }

}
