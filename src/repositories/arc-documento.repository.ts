import {DefaultCrudRepository} from '@loopback/repository';
import {ArcDocumento, ArcDocumentoRelations} from '../models';
import {GrowthlandDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArcDocumentoRepository extends DefaultCrudRepository<
  ArcDocumento,
  typeof ArcDocumento.prototype.idDocumento,
  ArcDocumentoRelations
> {
  constructor(
    @inject('datasources.growthlandDS') dataSource: GrowthlandDsDataSource,
  ) {
    super(ArcDocumento, dataSource);
  }
}
