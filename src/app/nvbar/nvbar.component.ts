import { Component, OnInit } from '@angular/core';
import { Router, withDisabledInitialNavigation } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.css']
})
export class NvbarComponent implements OnInit {
  isLogged= false;
  isNotLogged=false;

  constructor(private router:Router, private tokenService: TokenService) { }
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
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isNotLogged=true;
    }
  }
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  login(){
    this.router.navigate(['/login'])
  }

}
