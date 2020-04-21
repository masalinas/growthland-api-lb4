import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'PUBLISHER', table: 'ARC_MASTER2'}}
})
export class ArcMaster2 extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_MASTER2', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idMaster2: number;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'COD_MASTER_EXT', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codMasterExt?: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_CAMPANNA_FORMATO', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idCampannaFormato: number;

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

  @property({
    type: 'string',
    required: true,
    length: 1,
    mssql: {columnName: 'IND_DEMO', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  indDemo: string;

  @property({
    type: 'string',
    length: 200,
    mssql: {columnName: 'DES_MOTIVO_MEJORA', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  desMotivoMejora?: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'TIT_ARCHIVO', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  titArchivo: string;

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

  constructor(data?: Partial<ArcMaster2>) {
    super(data);
  }
}

export interface ArcMaster2Relations {
  // describe navigational properties here
}

export type ArcMaster2WithRelations = ArcMaster2 & ArcMaster2Relations;
