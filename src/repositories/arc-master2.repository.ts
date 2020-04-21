import {DefaultCrudRepository} from '@loopback/repository';
import {ArcMaster2, ArcMaster2Relations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArcMaster2Repository extends DefaultCrudRepository<
  ArcMaster2,
  typeof ArcMaster2.prototype.idMaster2,
  ArcMaster2Relations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(ArcMaster2, dataSource);
  }
}
