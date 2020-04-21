import {DefaultCrudRepository} from '@loopback/repository';
import {TmpFecha, TmpFechaRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TmpFechaRepository extends DefaultCrudRepository<
  TmpFecha,
  typeof TmpFecha.prototype.idFecha,
  TmpFechaRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(TmpFecha, dataSource);
  }
}
