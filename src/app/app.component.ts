import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_RichText_Demo';

  //Get div element to pass content to input
  @ViewChild('richText') richText!: ElementRef;

  //Text formatting function
    //Initializing variable
    oDoc:any;
  formatDoc(cmd:any) {
  this.oDoc = document.getElementById("textBox");
  document.execCommand(cmd); this.oDoc?.focus(); 
  }

  save(){
    // Open the console to see the output!
    //You can set this value on an input to send the data in angular forms 
    console.log(this.richText?.nativeElement.innerHTML);
  }


}
