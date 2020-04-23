import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ArcMaster} from '../models';
import {ArcMasterRepository} from '../repositories';

export class ArcMasterController {
  constructor(
    @repository(ArcMasterRepository)
    public arcMasterRepository : ArcMasterRepository,
  ) {}

  @post('/arc-masters', {
    responses: {
      '200': {
        description: 'ArcMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(ArcMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcMaster, {
            title: 'NewArcMaster',
            exclude: ['idMaster'],
          }),
        },
      },
    })
    arcMaster: Omit<ArcMaster, 'idMaster'>,
  ): Promise<ArcMaster> {
    return this.arcMasterRepository.create(arcMaster);
  }

  @get('/arc-masters/count', {
    responses: {
      '200': {
        description: 'ArcMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ArcMaster) where?: Where<ArcMaster>,
  ): Promise<Count> {
    return this.arcMasterRepository.count(where);
  }

  @get('/arc-masters', {
    responses: {
      '200': {
        description: 'Array of ArcMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ArcMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ArcMaster) filter?: Filter<ArcMaster>,
  ): Promise<ArcMaster[]> {
    return this.arcMasterRepository.find(filter);
  }

  @patch('/arc-masters', {
    responses: {
      '200': {
        description: 'ArcMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcMaster, {partial: true}),
        },
      },
    })
    arcMaster: ArcMaster,
    @param.where(ArcMaster) where?: Where<ArcMaster>,
  ): Promise<Count> {
    return this.arcMasterRepository.updateAll(arcMaster, where);
  }

  @get('/arc-masters/{id}', {
    responses: {
      '200': {
        description: 'ArcMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ArcMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ArcMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<ArcMaster>
  ): Promise<ArcMaster> {
    return this.arcMasterRepository.findById(id, filter);
  }

  @patch('/arc-masters/{id}', {
    responses: {
      '204': {
        description: 'ArcMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcMaster, {partial: true}),
        },
      },
    })
    arcMaster: ArcMaster,
  ): Promise<void> {
    await this.arcMasterRepository.updateById(id, arcMaster);
  }

  @put('/arc-masters/{id}', {
    responses: {
      '204': {
        description: 'ArcMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() arcMaster: ArcMaster,
  ): Promise<void> {
    await this.arcMasterRepository.replaceById(id, arcMaster);
  }

  @del('/arc-masters/{id}', {
    responses: {
      '204': {
        description: 'ArcMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.arcMasterRepository.deleteById(id);
  }
}
