import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Compact } from "../models/Compact.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CompactService{
    //private readonly urlApi:string = "http://localhost:8080/api/v1/documents/zip-file-converter";
    private readonly urlApi:string = "https://api.mybigwhale.com/api/v1/documents/zip-file-converter";

    constructor(private http: HttpClient){}

    downloadFileCompact(form: Compact): Observable<Compact>{
        const formData = new FormData();
        for(let i = 0; i < form.files.length; i++){
            formData.append('files', form.files[i]);
        }        
        formData.append('outputFormat', form.outputFormat);
        
        return this.http.post<Compact>(
            this.urlApi, 
            formData,
            { responseType: 'blob' as 'json'}
        )
    }
    
}