import {DefaultCrudRepository} from '@loopback/repository';
import {CmpCampannaPropuesta, CmpCampannaPropuestaRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CmpCampannaPropuestaRepository extends DefaultCrudRepository<
  CmpCampannaPropuesta,
  typeof CmpCampannaPropuesta.prototype.idCampannaPropuesta,
  CmpCampannaPropuestaRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(CmpCampannaPropuesta, dataSource);
  }
}
