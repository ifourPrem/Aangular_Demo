import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public url="www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  public viewer="url";
  canClick = true;
  constructor(private router: Router) { }
  message = "I'm read only!";
  canEdit = false;
 
  onEditClick() {
    console.log("*!this.canEdit*",!this.canEdit)
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
  ngOnInit(): void {
  }


  //For saving global details locally...
  
  saveGlobalConfig(details: { direction: any; interval: any; remainingTime: any})
  {
    //stroing entered data locally ..
    localStorage.setItem('direction', details.direction);
    localStorage.setItem('interval', details.interval);
    localStorage.setItem('remainingTime', details.interval);

    //navigating on home/next page ..
    this.router.navigate(['/analyser']);  
  }

}


