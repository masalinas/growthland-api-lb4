import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mssql: {schema: 'PUBLISHER', table: 'CMP_CAMPANNA_FORMATO'}
  }
})
export class CmpCampannaFormato extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_CAMPANNA_FORMATO', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idCampannaFormato: number;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'COD_CAMPANNA_FORMATO_EXT', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  codCampannaFormatoExt?: string;

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
    required: true,
    precision: 19,
    scale: 0,
    mssql: {columnName: 'ID_FORMATO_PUBLICACION', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'NO'},
  })
  idFormatoPublicacion: number;

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

  constructor(data?: Partial<CmpCampannaFormato>) {
    super(data);
  }
}

export interface CmpCampannaFormatoRelations {
  // describe navigational properties here
}

export type CmpCampannaFormatoWithRelations = CmpCampannaFormato & CmpCampannaFormatoRelations;
