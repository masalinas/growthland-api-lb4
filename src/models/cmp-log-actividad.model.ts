import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'PUBLISHER', table: 'CMP_LOG_ACTIVIDAD'}}
})
export class CmpLogActividad extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_LOG_ACTIVIDAD', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idLogActividad: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_CAMPANNA', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idCampanna: number;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_ORDEN_TRABAJO', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'YES'},
  })
  idOrdenTrabajo?: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'IND_ACCION', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  indAccion: string;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'FEC_HORA', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecHora: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'IND_ESTADO', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  indEstado: string;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'DESTINATARIO', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  destinatario?: string;

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

  constructor(data?: Partial<CmpLogActividad>) {
    super(data);
  }
}

export interface CmpLogActividadRelations {
  // describe navigational properties here
}

export type CmpLogActividadWithRelations = CmpLogActividad & CmpLogActividadRelations;
