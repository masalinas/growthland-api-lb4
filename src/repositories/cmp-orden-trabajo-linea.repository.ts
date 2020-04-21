import {DefaultCrudRepository} from '@loopback/repository';
import {CmpOrdenTrabajoLinea, CmpOrdenTrabajoLineaRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CmpOrdenTrabajoLineaRepository extends DefaultCrudRepository<
  CmpOrdenTrabajoLinea,
  typeof CmpOrdenTrabajoLinea.prototype.idOrdenTrabajoLinea,
  CmpOrdenTrabajoLineaRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(CmpOrdenTrabajoLinea, dataSource);
  }
}
