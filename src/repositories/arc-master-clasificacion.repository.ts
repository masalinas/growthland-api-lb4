import {DefaultCrudRepository} from '@loopback/repository';
import {ArcMasterClasificacion, ArcMasterClasificacionRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArcMasterClasificacionRepository extends DefaultCrudRepository<
  ArcMasterClasificacion,
  typeof ArcMasterClasificacion.prototype.idMasterClasificacion,
  ArcMasterClasificacionRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(ArcMasterClasificacion, dataSource);
  }
}
