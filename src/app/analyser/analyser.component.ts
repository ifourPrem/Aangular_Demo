import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyser',
  templateUrl: './analyser.component.html',
  styleUrls: ['./analyser.component.css']
})
export class AnalyserComponent implements OnInit {

  direction: string | null | undefined;
  interval: any;
  remainingTime : string | null | undefined | Number;
  pInterval:any;
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.direction=localStorage.getItem('direction');
    console.log("*this.direction*",this.direction)
    this.interval=localStorage.getItem('interval');

    this.remainingTime=localStorage.getItem('remainingTime');

    if(this.direction === "clockWise"){
      this.increseInterval();
      this.decreseInterval();
    }

    else if(this.direction === "antiClockWise")
    {
     this.incInterval();
     this.decInterval();
    }
    
  }


  //for resetting the values of global ...
  refreshAnalyser()
  {
    localStorage.clear();
    this.router.navigate(['/main']);  
  }

  //********************************************Clockwise**************************************************************************** */
  //for clockwise time updation ...

  increseInterval() {
    let num = 0;//initialize for star traffic signal
    let fixInt =  Number(this.interval); 

    //looping
    for (let i = 0; i < Number(this.interval) + 1; i++)
    {
      // this.interval++;
      setTimeout(() =>{
      num ++;
      this.interval = num-1;
      this.pInterval = this.interval+1;
      if(num > fixInt)
      {
        this.increseInterval()
      }
      },i * 1000);
    }
    }

  //for clockwise remainingTime updation ...
  decreseInterval()
  {
    let timer =  Number(this.interval);
     for (let i = timer; i >= 1; i--)
     {
      setTimeout(() =>{    
        if(timer <= 1)
        {
          this.decreseInterval()
        }  
        this.remainingTime = timer
        timer --;
      },i * 1000);
    }
  }



//********************************************AntiClockwise**************************************************************************** */

  //for anti-clockwise remainingTime updation ...

    incInterval() {
      var timer =  Number(this.interval);
      for (let i = timer; i >= 1; i--)
      { 
       setTimeout(() =>{
         timer--;
         this.interval = timer 
         },i * 1000);
      
      }
    }
  
  //for anti-clockwise remainingTime updation ...

    decInterval()
    {
      let userInput =  Number(this.interval); 
      for(let i=0;i<=Number(userInput);i++)
      {
        
        console.log("I",i,userInput)
        setTimeout(()=>{
          this.pInterval = i
        },i*1000)
      }
      // let num = 0;
      // for (let i = 0; i < Number(this.interval); i++)
      // {
      //   // this.interval++;
      //   setTimeout(() =>{
      //   num ++;
      //   this.remainingTime = num
      //   },i * 1000);
      // }
    }
}
