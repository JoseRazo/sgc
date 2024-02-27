export interface Documento {
  id: number;
  nombre: string;
  codigo: string;
  revision: string;
  archivo: string;
  departamento: number;
  categoria: number;
  categoria_nombre: string;
  fecha: string | null;
}

export interface Departamento {
  id: number;
  nombre: string;
  descripcion: string;
  documentos: Documento[];
}
