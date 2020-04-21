import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mssql: {schema: 'PUBLISHER', table: 'CMP_CAMPANNA_PROPUESTA'}
  }
})
export class CmpCampannaPropuesta extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_CAMPANNA_PROPUESTA', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idCampannaPropuesta: number;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'COD_PROPUESTA_EXT', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codPropuestaExt?: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'NOM_PROPUESTA', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nomPropuesta: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_CAMPANNA', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idCampanna: number;

  @property({
    type: 'string',
    length: 1,
    mssql: {columnName: 'IND_SELECCIONADO', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  indSeleccionado?: string;

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
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_DOCUMENTO', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'YES'},
  })
  idDocumento?: number;

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
    type: 'string',
    required: true,
    length: 500,
    mssql: {columnName: 'DES_DESCRIPCION', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  desDescripcion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CmpCampannaPropuesta>) {
    super(data);
  }
}

export interface CmpCampannaPropuestaRelations {
  // describe navigational properties here
}

export type CmpCampannaPropuestaWithRelations = CmpCampannaPropuesta & CmpCampannaPropuestaRelations;
