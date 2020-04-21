import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'PUBLISHER', table: 'ASS_CONTENEDOR'}}
})
export class AssContenedor extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_CONTENEDOR', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idContenedor: number;

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
    mssql: {columnName: 'NOM_CONTENEDOR', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nomContenedor: string;

  @property({
    type: 'string',
    length: 250,
    mssql: {columnName: 'NOM_FISICO_CONTENEDOR', dataType: 'varchar', dataLength: 250, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nomFisicoContenedor?: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'IND_CONTENIDO', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  indContenido: string;

  @property({
    type: 'string',
    required: true,
    length: 30,
    mssql: {columnName: 'USUARIO_AUD', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  usuarioAud: string;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'FEC_AUD', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecAud: string;

  @property({
    type: 'string',
    required: true,
    length: 30,
    mssql: {columnName: 'USUARIO_CREA_AUD', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  usuarioCreaAud: string;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'FEC_CREA_AUD', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecCreaAud: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AssContenedor>) {
    super(data);
  }
}

export interface AssContenedorRelations {
  // describe navigational properties here
}

export type AssContenedorWithRelations = AssContenedor & AssContenedorRelations;
