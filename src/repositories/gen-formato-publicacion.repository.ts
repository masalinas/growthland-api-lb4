import {DefaultCrudRepository} from '@loopback/repository';
import {GenFormatoPublicacion, GenFormatoPublicacionRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GenFormatoPublicacionRepository extends DefaultCrudRepository<
  GenFormatoPublicacion,
  typeof GenFormatoPublicacion.prototype.id,
  GenFormatoPublicacionRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(GenFormatoPublicacion, dataSource);
  }
}
