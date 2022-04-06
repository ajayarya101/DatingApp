import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  records:any;
  constructor (private http: HttpClient){}

  ngOnInit(): void {
    this.http.get("http://localhost:5000/weatherforecast").subscribe(data => {
      this.records = data;
    }, error => {
      throw new console.error(error);
    }
    )
     
  }
}
