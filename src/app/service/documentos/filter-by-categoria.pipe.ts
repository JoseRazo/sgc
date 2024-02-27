import { Pipe, PipeTransform } from "@angular/core";
import { Documento } from "./documento.interface";

@Pipe({
  name: "filterByCategoria",
})
export class FilterByCategoriaPipe implements PipeTransform {
  transform(documentos: Documento[], categoriaId: number): Documento[] {
    if (!documentos || !categoriaId) {
      return documentos;
    }

    return documentos.filter(
      (documento) => documento.categoria === categoriaId
    );
  }
}
