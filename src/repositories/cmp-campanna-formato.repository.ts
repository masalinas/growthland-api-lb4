import {DefaultCrudRepository} from '@loopback/repository';
import {CmpCampannaFormato, CmpCampannaFormatoRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CmpCampannaFormatoRepository extends DefaultCrudRepository<
  CmpCampannaFormato,
  typeof CmpCampannaFormato.prototype.idCampannaFormato,
  CmpCampannaFormatoRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(CmpCampannaFormato, dataSource);
  }
}
