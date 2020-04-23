import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mssql: {schema: 'PUBLISHER', table: 'SEG_AUTORIZACION'},
  },
})
export class SegAutorizacion extends Entity {
  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {
      columnName: 'ID_AUTORIZACION',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: 19,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  idAutorizacion: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {
      columnName: 'ID_USUARIO',
      dataType: 'varchar',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  idUsuario: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {
      columnName: 'AUTORIZACION',
      dataType: 'varchar',
      dataLength: 100,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  autorizacion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SegAutorizacion>) {
    super(data);
  }
}

export interface SegAutorizacionRelations {
  // describe navigational properties here
}

export type SegAutorizacionWithRelations = SegAutorizacion &
  SegAutorizacionRelations;
