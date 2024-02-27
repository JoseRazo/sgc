import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Documento, Departamento } from "./documento.interface";

@Injectable({
  providedIn: "root",
})
export class DocumentoService {
  private apiUrl = "https://api.utsalamanca.edu.mx/api/sgc/documentos/";
  // private apiUrl = "http://127.0.0.1:8001/api/sgc/documentos/";

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.apiUrl);
  }
}
