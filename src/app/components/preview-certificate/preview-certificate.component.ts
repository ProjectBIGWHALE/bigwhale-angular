import { AfterContentInit, Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-preview-certificate',
  templateUrl: './preview-certificate.component.html',
  styleUrls: ['./preview-certificate.component.css',],
})
export class PreviewCertificateComponent implements AfterContentInit{

  @Input() certificateId: string = '';

  @Input() eventName: string = '';
  @Input() eventWorkLoad: string = '';
  @Input() eventDate: string = '';
  @Input() eventLocale: string ='';
  @Input() speakerName: string = '';
  @Input() speakerRole: string = '';

  constructor(private renderer: Renderer2){}

  ngAfterContentInit(): void {

      const container = document.getElementById("previewContainer");
      const firstModel = document.getElementById("previewFirstModel");
      const secondModel = document.getElementById("previewSecondModel");
      
      if(container?.offsetWidth){
        const width = (container?.offsetWidth / 10);
        const title1 = document.getElementById("previewTitle1");
        const description1 = document.getElementById("previewDescription1");
        const placeDate1 = document.getElementById("previewPlaceDate1");
        const speaker1 = document.getElementById("previewSpeaker1");   

        this.renderer.setStyle(firstModel, 'font-size', `${width}px`);
        this.renderer.setStyle(description1, 'padding', `0 ${width*1.07}px`);

        this.renderer.setStyle(title1, 'top', `${width*1.97}px`);
        this.renderer.setStyle(description1, 'top', `${width*2.7}px`);
        this.renderer.setStyle(placeDate1, 'top', ` ${width*5.05}px`);
        this.renderer.setStyle(speaker1, 'top', `${width*5.5}px`);

        // preview 2 
        const description2 = document.getElementById("previewDescription2");
        const title2 = document.getElementById("previewTitle2");         
        const placeDate2 = document.getElementById("previewPlaceDate2");
        const speaker2 = document.getElementById("previewSpeaker2");  
        const finality2 = document.getElementById("previewFinality");         
  
        this.renderer.setStyle(secondModel, 'font-size', `${width}px`);
        this.renderer.setStyle(title2, 'margin', ` ${width*0.2}px 0`);
  
        this.renderer.setStyle(description2, 'top', `${width*2.3}px`);
        this.renderer.setStyle(finality2, 'top', `${width*3.9}px`);
        this.renderer.setStyle(placeDate2, 'top', ` ${width*5.5}px`);
        this.renderer.setStyle(speaker2, 'top', `${width*6}px`);
        
      }      
  }
}
