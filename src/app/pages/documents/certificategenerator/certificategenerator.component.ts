import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Certificate } from 'src/app/models/Certificate.interface';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-certificategenerator',
  templateUrl: './certificategenerator.component.html',
  styleUrls: ['./certificategenerator.component.css'],
})
export class CertificategeneratorComponent implements OnInit {
  form!: FormGroup;

  certificate!: Certificate;

  constructor(private fb: FormBuilder, private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      certificateTypeEnum: [''],
      worksheet: [''],
      eventName: [''],
      speakerName: [''],
      speakerRole: [''],
      eventWorkLoad: [''],
      eventDate: [''],
      dateIssue: [''],
      eventLocale: [''],
      certificateModelId: [''],
    });
  }

  onChange(event: any): void{
    const selectedFile = <File>event.srcElement.files[0];
     this.form.patchValue({
      worksheet: selectedFile,
     });
  }

  submit(){
    
    if(this.form.valid){
      const formValues = this.form.value;

      this.certificateService.saveCertificate(formValues)
        .subscribe((res: any) => {
          const blob = new Blob([res], { type: 'application/zip' }); // Tipo do arquivo pode variar
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'certificates.zip'; // Nome do arquivo de download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
      },
      error => {
          console.error(error);
      });
    }
  }
}
