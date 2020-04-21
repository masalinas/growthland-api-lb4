import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'PUBLISHER', table: 'CMP_ORDEN_TRABAJO'}}
})
export class CmpOrdenTrabajo extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_ORDEN_TRABAJO', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idOrdenTrabajo: number;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_CAMPANNA_PROPUESTA', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'YES'},
  })
  idCampannaPropuesta?: number;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_MASTER', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'YES'},
  })
  idMaster?: number;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'FEC_ORDEN', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecOrden: string;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'IND_TIPO', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  indTipo?: string;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'IND_ESTADO_OT', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  indEstadoOt?: string;

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

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_CAMPANNA', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'YES'},
  })
  idCampanna?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CmpOrdenTrabajo>) {
    super(data);
  }
}

export interface CmpOrdenTrabajoRelations {
  // describe navigational properties here
}

export type CmpOrdenTrabajoWithRelations = CmpOrdenTrabajo & CmpOrdenTrabajoRelations;
