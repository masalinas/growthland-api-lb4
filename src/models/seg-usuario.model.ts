import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mssql: {schema: 'PUBLISHER', table: 'SEG_USUARIO'},
  },
})
export class SegUsuario extends Entity {
  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    id: 1,
    mssql: {
      columnName: 'ID_USUARIO',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: 19,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  idUsuario: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {
      columnName: 'NOM_USUARIO',
      dataType: 'varchar',
      dataLength: 100,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  nomUsuario: string;

  @property({
    type: 'string',
    required: true,
    length: 60,
    mssql: {
      columnName: 'CONTRASENA',
      dataType: 'varchar',
      dataLength: 60,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  contrasena: string;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mssql: {
      columnName: 'ACTIVO',
      dataType: 'tinyint',
      dataLength: null,
      dataPrecision: 3,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  activo?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SegUsuario>) {
    super(data);
  }
}

export interface SegUsuarioRelations {
  // describe navigational properties here
}

export type SegUsuarioWithRelations = SegUsuario & SegUsuarioRelations;
