import {DefaultCrudRepository} from '@loopback/repository';
import {ArcRecurso, ArcRecursoRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArcRecursoRepository extends DefaultCrudRepository<
  ArcRecurso,
  typeof ArcRecurso.prototype.idRecurso,
  ArcRecursoRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(ArcRecurso, dataSource);
  }
}
