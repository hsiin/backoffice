import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajout-vainqueur',
  templateUrl: './ajout-vainqueur.component.html',
  styleUrls: ['./ajout-vainqueur.component.css']
})
export class AjoutVainqueurComponent implements OnInit {
  images = [];
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
});

  constructor() { 
    
  }
  get f(){
    return this.myForm.controls;
  }


  ngOnInit(): void {
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
   
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.images.push(event.target.result); 
   
                   this.myForm.patchValue({
                      fileSource: this.images
                   });
                }
  
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

  remove(index){
    this.images.splice(index,1);
  }


}
