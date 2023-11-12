import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Certificate } from 'src/app/models/Certificate.interface';

@Injectable({
    providedIn: 'root'
})
export class CertificateService{
    
    private readonly urlApi:string = "http://localhost:8080/api/v1/documents/certificategenerator";


    constructor(private http: HttpClient){}

    getCertificate(): Observable<Certificate>{
        return this.http.get<Certificate>(this.urlApi)
    }

    saveCertificate(form: Certificate):Observable<Certificate>{
        form.dateIssue = this.getDateIssue();

        const formData = new FormData();
        formData.append('csvFileDto', form.worksheet, form.worksheet.name);
        formData.append('certificateTypeEnum', form.certificateTypeEnum);
        formData.append('eventName', form.eventName);
        formData.append('speakerName', form.speakerName);
        formData.append('speakerRole', form.speakerRole);
        formData.append('eventWorkLoad', form.eventWorkLoad);
        formData.append('eventDate', form.eventDate);
        formData.append('dateIssue', form.dateIssue);
        formData.append('eventLocale', form.eventLocale);
        formData.append('certificateModelId', form.certificateModelId.toString());

        return this.http.post<Certificate>(this.urlApi, formData, {
            responseType: 'blob' as 'json',  // Indica que a resposta é um blob (arquivo)
        });

    }

    private getDateIssue():string {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
    
        const dateIssue = `${this.addZero(day)}-${this.addZero(month)}-${year}`;
        
        return dateIssue;
      }

      private addZero(value: number): string{
        return value < 10 ? `0${value}` :`${value}`;
      }
    
    
  
}