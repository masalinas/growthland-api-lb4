import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mssql: {schema: 'PUBLISHER', table: 'GEN_CLIENTE'},
  },
})
export class GenCliente extends Entity {
  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {
      columnName: 'ID_CLIENTE',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: 19,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  idCliente: number;

  @property({
    type: 'string',
    length: 100,
    mssql: {
      columnName: 'COD_CLIENTE_EXT',
      dataType: 'varchar',
      dataLength: 100,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  codClienteExt?: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {
      columnName: 'NOM_CLIENTE',
      dataType: 'varchar',
      dataLength: 100,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  nomCliente: string;

  @property({
    type: 'string',
    length: 2000,
    mssql: {
      columnName: 'DES_OBSERVACIONES',
      dataType: 'varchar',
      dataLength: 2000,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  desObservaciones?: string;

  @property({
    type: 'string',
    length: 100,
    mssql: {
      columnName: 'CORREO_ELECTRONICO',
      dataType: 'varchar',
      dataLength: 100,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  correoElectronico?: string;

  @property({
    type: 'string',
    length: 30,
    mssql: {
      columnName: 'USUARIO_AUD',
      dataType: 'varchar',
      dataLength: 30,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  usuarioAud?: string;

  @property({
    type: 'date',
    mssql: {
      columnName: 'FEC_AUD',
      dataType: 'datetime',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  fecAud?: string;

  @property({
    type: 'string',
    length: 30,
    mssql: {
      columnName: 'USUARIO_CREA_AUD',
      dataType: 'varchar',
      dataLength: 30,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  usuarioCreaAud?: string;

  @property({
    type: 'date',
    mssql: {
      columnName: 'FEC_CREA_AUD',
      dataType: 'datetime',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  fecCreaAud?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<GenCliente>) {
    super(data);
  }
}

export interface GenClienteRelations {
  // describe navigational properties here
}

export type GenClienteWithRelations = GenCliente & GenClienteRelations;
