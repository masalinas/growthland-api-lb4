import {DefaultCrudRepository} from '@loopback/repository';
import {ArcEmitible, ArcEmitibleRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArcEmitibleRepository extends DefaultCrudRepository<
  ArcEmitible,
  typeof ArcEmitible.prototype.idEmitible,
  ArcEmitibleRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(ArcEmitible, dataSource);
  }
}
