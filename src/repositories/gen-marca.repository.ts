import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GrowthlandDsDataSource} from '../datasources';
import {GenMarca, GenMarcaRelations} from '../models';

export class GenMarcaRepository extends DefaultCrudRepository<
  GenMarca,
  typeof GenMarca.prototype.idMarca,
  GenMarcaRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(GenMarca, dataSource);
  }
}
