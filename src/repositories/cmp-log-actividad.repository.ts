import {DefaultCrudRepository} from '@loopback/repository';
import {CmpLogActividad, CmpLogActividadRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CmpLogActividadRepository extends DefaultCrudRepository<
  CmpLogActividad,
  typeof CmpLogActividad.prototype.idLogActividad,
  CmpLogActividadRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(CmpLogActividad, dataSource);
  }
}
