import {DefaultCrudRepository} from '@loopback/repository';
import {ArcMaster, ArcMasterRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArcMasterRepository extends DefaultCrudRepository<
  ArcMaster,
  typeof ArcMaster.prototype.idMaster,
  ArcMasterRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(ArcMaster, dataSource);
  }
}
