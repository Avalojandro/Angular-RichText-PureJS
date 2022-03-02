# Angular RichText (Without Packages)

A functional RichText Component made for Angularjs, no installation needed to use it! <br>

<img src="./src/assets/rich-text.png">

# How to use?

## HTML

```html
<!-- RichText code -->
<div class="rich">
  <!-- Controls -->
  <div id="toolBar2">
    <button type="button" class="intLink controls"  (click)="formatDoc('bold');"><img class="controls-img" src="../assets/bold.svg" alt="">  </button>   
    <button type="button" class="intLink controls"  (click)="formatDoc('italic');"><img class="controls-img" src="../assets/italic.svg" alt="">  </button>
    <button type="button" class="intLink controls"  (click)="formatDoc('underline');"><img class="controls-img" src="../assets/underline.svg" alt="">  </button>
    <button type="button" class="intLink controls"  (click)="formatDoc('justifyleft');"><img class="controls-img" src="../assets/text-align-left.svg" alt=""></button>
    <button type="button" class="intLink controls"  (click)="formatDoc('justifycenter');"><img class="controls-img" src="../assets/text-align-center.svg" alt="">  </button>
    <button type="button" class="intLink controls"  (click)="formatDoc('justifyright');"><img class="controls-img" src="../assets/text-align-right.svg" alt="">  </button>
  </div>
  <!-- /Controls -->

    <!-- Rich text -->
    <input class="hidden" formControlName="main_description" type="text"> <!-- The input is hidden because we can't assign formControlName to a div, so we're going to copy the div's HTML to assign it to the input -->
    <div #richText class="full" id="textBox" contenteditable="true"></div>
    <!-- /Rich text -->
  </div>
<!-- /RichText code -->
```
## TypeScript

```javascript
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
```

## CSS
```css
// Angular RichText styles
.intLink { cursor: pointer; border: 0; background-color: #ffffff;}
#toolBar1 select { font-size:10px; }

#textBox {
    width: auto;
    height: 250px;
    border-bottom: 5px;
    border-top: 1px #dad6d6 solid;
    padding: 12px;
    overflow: scroll;
}
#textBox #sourceText {
    padding: 0;
    margin: 0;
    min-width: 498px;
    min-height: 200px;
}

.controls{
    margin-right: 8px;
    transition: ease-in 0.2s;
    padding-top: 5px;
    border-radius: 5px;
}
.controls:hover{background-color: #cecbcb;}

.controls-img{
    width: 20px;
}

.rich{
    background-color: white;
    padding-top: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 1px #dad6d6 solid;
}

#toolBar2{
    padding-left: 6px;
    padding-bottom: 9px;
}

.hidden{
    display: none;
}

//This class hides the scrollbar space.
::-webkit-scrollbar {
    display: none;
    }

```
