import {DefaultCrudRepository} from '@loopback/repository';
import {CmpOrdenTrabajo, CmpOrdenTrabajoRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CmpOrdenTrabajoRepository extends DefaultCrudRepository<
  CmpOrdenTrabajo,
  typeof CmpOrdenTrabajo.prototype.idOrdenTrabajo,
  CmpOrdenTrabajoRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(CmpOrdenTrabajo, dataSource);
  }
}
