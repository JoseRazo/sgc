import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { DocumentoService } from "src/app/service/documentos/documento.service";
import {
  Documento,
  Departamento,
} from "src/app/service/documentos/documento.interface";

@Component({
  selector: "app-documentos",
  templateUrl: "./documentos.component.html",
  styleUrls: ["./documentos.component.css"],
})
export class DocumentosComponent implements OnInit {
  title = "SGC | DOCUMENTOS";
  departamentos: Departamento[] = [];

  constructor(
    private titleService: Title,
    private documentoService: DocumentoService
  ) {
    this.loadScripts();
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.documentoService.getDepartamentos().subscribe(
      (data) => {
        console.log(data);
        this.departamentos = data;
      },
      (error) => {
        console.log("Error al obtener datos: ", error);
      }
    );
  }

  loadScripts() {
    const dynamicScripts = ["../assets/plugins/js/custom.js"];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement("script");
      node.src = dynamicScripts[i];
      node.type = "text/javascript";
      node.async = false;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
  }
}
