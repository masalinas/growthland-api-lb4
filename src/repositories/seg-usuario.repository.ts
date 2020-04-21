import {DefaultCrudRepository} from '@loopback/repository';
import {SegUsuario, SegUsuarioRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SegUsuarioRepository extends DefaultCrudRepository<
  SegUsuario,
  typeof SegUsuario.prototype.idUsuario,
  SegUsuarioRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(SegUsuario, dataSource);
  }
}
