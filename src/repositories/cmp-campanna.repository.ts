import {DefaultCrudRepository} from '@loopback/repository';
import {CmpCampanna, CmpCampannaRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CmpCampannaRepository extends DefaultCrudRepository<
  CmpCampanna,
  typeof CmpCampanna.prototype.idCampanna,
  CmpCampannaRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(CmpCampanna, dataSource);
  }
}
