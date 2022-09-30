import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AppService } from '../app.service';
import { CustomvalidationService } from '../services/customvalidation.service';

export interface Cartoon {
    id: number;
    name: string;
  }

@Component({ templateUrl: 'register.component.html' })

export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;
    submitted = false;
    form: any;
    // cartoons: any;
   cityList: any = ['Ahmedabad', 'Newyork', 'Lasvegas']

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private appservice: AppService,
        private customValidator: CustomvalidationService){}
    
        //values of checkboxes...
        cartoonsData: Cartoon[] = [
            { id: 0, name: 'Beginner' },
            { id: 1, name: 'Inter-Middiate' },
            { id: 2, name: 'Experience' },
            { id: 3, name: 'ProLevel' }
          ];

        ngOnInit() {
          this.registerForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required,Validators.email]],
            username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]],
            phoneNumber : ['', [Validators.required]],
            gender:['', [Validators.required]],
            // check:['',[Validators.required]],
            hobbies: new FormArray([]),//checkbox
            // acceptTerms:["",[Validators.required]]
            city: new FormControl('', Validators.required)
          });
      }


        get registerFormControl() {
            return this.registerForm.controls;
          }
          

/**
 * empty all form fields..
 */
        onReset() {
            this.submitted = false;
            this.registerForm.reset();
        }


 /**
 * @param e making array of selected values based on selection of checkboxes..
 *  */
        onChange(e:any,cartoon:any) {
          
          const formArray: FormArray = this.registerForm.get('hobbies') as FormArray;

            /* Selected */
            if(e.target.checked){
                // Add a new control in the arrayForm
                formArray.push(new FormControl(cartoon));
            }else {
                const index = formArray.controls.findIndex((x: { value: void; }) => x.value === cartoon.name);
                formArray.removeAt(index);
              }
              
            console.log("formArray", formArray.value)
            // this.cartoons = (e.target as HTMLInputElement).value;
            // const cartoons = (this.form.controls.name as FormArray);
            // if ( e.target.checked ) {
            //   cartoons.push(new FormControl());
            // } else {
            //   const index = cartoons.controls.findIndex((x: { value: void; }) => x.value === name);
            //   cartoons.removeAt(index);
            // }
          }

/**
 * Submitting data entered by user for register request..
 */
          onSubmit() {
            console.log("*called*",this.registerForm.value)
            this.submitted = true;
            if (this.registerForm.valid) {
                this.appservice.addUser(this.registerForm.value).pipe().subscribe((savedData)=>{
                this.registerForm.reset();
                })
            }
            else{
              console.log("*called*",this.registerForm)
            }
          }

/**
 * 
 * @param e selected city  entered from client...
 */
 selectCity(e: any) {
            console.log(e.target.value);
          }

}