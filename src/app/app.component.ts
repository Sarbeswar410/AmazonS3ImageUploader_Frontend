import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit() {}
  title = 'AmazonS3ImageUploader';
  OpenComponent(){
    this.router.navigate(['/imageUploader']);
  }
}
