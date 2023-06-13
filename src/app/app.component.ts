import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  constructor(private http: HttpClient) { }
  onClickSubmit(data: any) {
    this.http.post<any>('https://formspree.io/f/xayzrngw', data).subscribe(data => {
      console.log(data)
  });
 }
}
