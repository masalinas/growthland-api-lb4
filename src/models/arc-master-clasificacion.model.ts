import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mssql: {schema: 'PUBLISHER', table: 'ARC_MASTER_CLASIFICACION'}
  }
})
export class ArcMasterClasificacion extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_MASTER_CLASIFICACION', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idMasterClasificacion: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_MASTER', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idMaster: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'IND_CLASIFICADOR', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  indClasificador: string;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'FECHA_CLASIFICACION', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechaClasificacion: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mssql: {columnName: 'DES_MOTIVO', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  desMotivo: string;

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

  constructor(data?: Partial<ArcMasterClasificacion>) {
    super(data);
  }
}

export interface ArcMasterClasificacionRelations {
  // describe navigational properties here
}

export type ArcMasterClasificacionWithRelations = ArcMasterClasificacion & ArcMasterClasificacionRelations;
