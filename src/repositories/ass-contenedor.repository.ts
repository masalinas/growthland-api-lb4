import {DefaultCrudRepository} from '@loopback/repository';
import {AssContenedor, AssContenedorRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AssContenedorRepository extends DefaultCrudRepository<
  AssContenedor,
  typeof AssContenedor.prototype.idContenedor,
  AssContenedorRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(AssContenedor, dataSource);
  }
}
