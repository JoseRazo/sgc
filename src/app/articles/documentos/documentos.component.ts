import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { DocumentoService } from "src/app/service/documentos/documento.service";
import { Documento, Departamento } from "src/app/service/documentos/documento.interface";

interface DocumentoPorCategoria {
  categoria: string;
  documentos: Documento[];
}

@Component({
  selector: "app-documentos",
  templateUrl: "./documentos.component.html",
  styleUrls: ["./documentos.component.css"],
})
export class DocumentosComponent implements OnInit {
  title = "SGC | DOCUMENTOS";
  departamentos: Departamento[] = [];
  documentosPorDepartamento: { departamento: string, documentosPorCategoria: DocumentoPorCategoria[] }[] = [];

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
        this.departamentos = data;
        this.documentosPorDepartamento = this.agruparDocumentosPorDepartamento(data);
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

  private agruparDocumentosPorDepartamento(departamentos: Departamento[]): { departamento: string, documentosPorCategoria: DocumentoPorCategoria[] }[] {
    const documentosPorDepartamento: { departamento: string, documentosPorCategoria: DocumentoPorCategoria[] }[] = [];

    departamentos.forEach((departamento) => {
      const documentosPorCategoria: DocumentoPorCategoria[] = [];

      departamento.documentos.forEach((documento) => {
        const existingCategoria = documentosPorCategoria.find((catDoc) => catDoc.categoria === documento.categoria_nombre);
        if (existingCategoria) {
          existingCategoria.documentos.push(documento);
        } else {
          documentosPorCategoria.push({ categoria: documento.categoria_nombre, documentos: [documento] });
        }
      });

      documentosPorDepartamento.push({ departamento: departamento.nombre, documentosPorCategoria: documentosPorCategoria });
    });

    return documentosPorDepartamento;
  }

  getCategoriaNombre(categoriaId: number) {
    // Lógica para obtener el nombre de la categoría según el ID
  }
}
