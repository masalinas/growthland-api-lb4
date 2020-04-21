import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'PUBLISHER', table: 'CMP_CAMPANNA'}}
})
export class CmpCampanna extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_CAMPANNA', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idCampanna: number;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'COD_CAMPANNA_EXT', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codCampannaExt?: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'NOM_CAMPANNA', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nomCampanna: string;

  @property({
    type: 'string',
    required: true,
    length: 500,
    mssql: {columnName: 'DES_DESCRIPCION', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  desDescripcion: string;

  @property({
    type: 'string',
    length: 2000,
    mssql: {columnName: 'DES_BRIEFING', dataType: 'varchar', dataLength: 2000, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  desBriefing?: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_CLIENTE', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idCliente: number;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_MARCA', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'YES'},
  })
  idMarca?: number;

  @property({
    type: 'date',
    mssql: {columnName: 'FEC_INICIO', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecInicio?: string;

  @property({
    type: 'date',
    mssql: {columnName: 'FEC_FIN', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecFin?: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'IND_ESTADO', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  indEstado: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_DOCUMENTO', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idDocumento: number;

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

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'FECHA_RECEPCION', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechaRecepcion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CmpCampanna>) {
    super(data);
  }
}

export interface CmpCampannaRelations {
  // describe navigational properties here
}

export type CmpCampannaWithRelations = CmpCampanna & CmpCampannaRelations;
