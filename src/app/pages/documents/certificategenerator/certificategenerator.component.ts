import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certificate } from 'src/app/models/Certificate.interface';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-certificategenerator',
  templateUrl: './certificategenerator.component.html',
  styleUrls: ['./certificategenerator.component.css', './certificategenerator.responsive.component.css'],
})
export class CertificategeneratorComponent implements OnInit {
  form!: FormGroup;

  certificate!: Certificate;

  clickBtn: boolean = false;

  constructor(private fb: FormBuilder, private certificateService: CertificateService) {}

  fieldValidator(field: string){    
    return this.form.get(field)?.errors?.['required'] && this.form.get(field)?.touched;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      certificateTypeEnum: ['PARTICIPATION', Validators['required']],
      worksheet: ['', Validators['required']],
      eventName: ['', Validators['required']],
      speakerName: ['', Validators['required']],
      speakerRole: ['', Validators['required']],
      eventWorkLoad: ['', Validators['required']],
      eventDate: ['', Validators['required']],
      dateIssue: [''],
      eventLocale: ['', Validators['required']],
      certificateModelId: ['1', Validators['required']],
    }); 
  }

  onChangeFile(selectedFile: File): void{  
     this.form.patchValue({
      worksheet: selectedFile,
     });
  }

  onClick(){
    return document.getElementById("worksheet")?.click(); 
  }

  submit(){
    this.clickBtn = true;  
    if(this.form.valid){
      const formValues = this.form.value;
 
      this.certificateService.saveCertificate(formValues)
        .subscribe((res: any) => {
          const blob = new Blob([res], { type: 'application/zip' }); // Tipo do arquivo pode variar
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'certificados.zip'; // Nome do arquivo de download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
      });
    }
  }
}
