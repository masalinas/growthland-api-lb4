import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'PUBLISHER', table: 'ARC_EMITIBLE'}}
})
export class ArcEmitible extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_EMITIBLE', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idEmitible: number;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'COD_EMITIBLE_EXT', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codEmitibleExt?: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_ORDEN_TRABAJO_LINEA', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idOrdenTrabajoLinea: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_CLIENTE', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idCliente: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'IND_ESTADO', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  indEstado: string;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'FECHA_RECEPCION', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechaRecepcion: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_ARCHIVO', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idArchivo: number;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mssql: {columnName: 'NOM_ARCHIVO', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nomArchivo: string;

  @property({
    type: 'string',
    required: true,
    length: 2000,
    mssql: {columnName: 'UBICACION', dataType: 'varchar', dataLength: 2000, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  ubicacion: string;

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

  constructor(data?: Partial<ArcEmitible>) {
    super(data);
  }
}

export interface ArcEmitibleRelations {
  // describe navigational properties here
}

export type ArcEmitibleWithRelations = ArcEmitible & ArcEmitibleRelations;
