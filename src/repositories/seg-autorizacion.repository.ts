import {DefaultCrudRepository} from '@loopback/repository';
import {SegAutorizacion, SegAutorizacionRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SegAutorizacionRepository extends DefaultCrudRepository<
  SegAutorizacion,
  typeof SegAutorizacion.prototype.idAutorizacion,
  SegAutorizacionRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(SegAutorizacion, dataSource);
  }
}
