import {DefaultCrudRepository} from '@loopback/repository';
import {GenCliente, GenClienteRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

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
