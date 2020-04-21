import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'PUBLISHER', table: 'ASS_ARCHIVO'}}
})
export class AssArchivo extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_ARCHIVO', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idArchivo: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'COD_ARCHIVO', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  codArchivo: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mssql: {columnName: 'NOM_ARCHIVO', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nomArchivo: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_CONTENEDOR', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idContenedor: number;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mssql: {columnName: 'UBICACION', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  ubicacion: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'TIPO_ARCHIVO', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  tipoArchivo: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'PESO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  peso: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'DURACION', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  duracion?: number;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'RESOLUCION', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  resolucion?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'ANCHO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  ancho?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'ALTO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  alto?: number;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'FEC_INGRESO', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecIngreso: string;

  @property({
    type: 'string',
    length: 30,
    mssql: {columnName: 'USUARIO_AUD', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  usuarioAud?: string;

  @property({
    type: 'date',
    mssql: {columnName: 'FEC_AUD', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecAud?: string;

  @property({
    type: 'string',
    length: 30,
    mssql: {columnName: 'USUARIO_CREA_AUD', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  usuarioCreaAud?: string;

  @property({
    type: 'date',
    mssql: {columnName: 'FEC_CREA_AUD', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecCreaAud?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AssArchivo>) {
    super(data);
  }
}

export interface AssArchivoRelations {
  // describe navigational properties here
}

export type AssArchivoWithRelations = AssArchivo & AssArchivoRelations;
