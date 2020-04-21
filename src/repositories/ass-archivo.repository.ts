import {DefaultCrudRepository} from '@loopback/repository';
import {AssArchivo, AssArchivoRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AssArchivoRepository extends DefaultCrudRepository<
  AssArchivo,
  typeof AssArchivo.prototype.idArchivo,
  AssArchivoRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(AssArchivo, dataSource);
  }
}
