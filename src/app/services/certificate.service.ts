import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, finalize } from "rxjs";
import { Certificate } from 'src/app/models/Certificate.interface';

@Injectable({
    providedIn: 'root'
})
export class CertificateService{
    
    //private readonly urlApi:string = "http://localhost:8080/api/v1/documents/certificate-generator";
    private readonly urlApi:string = "https://api.mybigwhale.com/api/v1/documents/certificate-generator"

    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(private http: HttpClient){}

    saveCertificate(form: Certificate):Observable<Certificate>{
        //iniciar o loading 
        this.loadingSubject.next(true);       

        const formData = new FormData();
        formData.append('csvFile', form.csvFile);
        formData.append('certificateTypeEnum', form.certificateTypeEnum);
        formData.append('eventName', form.eventName);
        formData.append('speakerName', form.speakerName);
        formData.append('speakerRole', form.speakerRole);
        formData.append('eventWorkLoad', form.eventWorkLoad);
        formData.append('eventDate', form.eventDate);
        formData.append('eventLocale', form.eventLocale);
        formData.append('certificateModelId', form.certificateModelId.toString());
        
        return this.http.post<Certificate>(this.urlApi, formData, {
            responseType: 'blob' as 'json',  // Indica que a resposta é um blob (arquivo)
        }).pipe(
            catchError( err => {
                console.error(`Error na requisição: ${err}`);
                throw err;
                
            }),finalize(()=> this.loadingSubject.next(false))
        )
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