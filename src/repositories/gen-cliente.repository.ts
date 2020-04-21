import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GrowthlandDsDataSource} from '../datasources';
import {GenCliente, GenClienteRelations} from '../models';

export class GenClienteRepository extends DefaultCrudRepository<
  GenCliente,
  typeof GenCliente.prototype.idCliente,
  GenClienteRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(GenCliente, dataSource);
  }
}
