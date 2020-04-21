import {DefaultCrudRepository} from '@loopback/repository';
import {GenMarca, GenMarcaRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

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
