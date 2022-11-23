import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.css']
})
export class NvbarComponent implements OnInit {

  constructor() { }
    //navbar
    ArgProg:String= "../img/navbar/ArgProgIcon.png"
    Home:String= "../img/navbar/Home.png"
    About:String= "../img/navbar/About.png"
    Contact:String= "../img/navbar/Contact.png"
    //medias
    GitHub:String="../img/medias/github.png"
    Linkedin:String="../img/medias/linkedin.png"
    Instagram:String="../img/medias/instagram.png"
    Twitter:String="../img/medias/twitter.png"

    nav:any = document.querySelector(".navbar");
    
    
  

  ngOnInit(): void {
    
  }

}
