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
import {ArcMaster2} from '../models';
import {ArcMaster2Repository} from '../repositories';

export class ArcMaster2Controller {
  constructor(
    @repository(ArcMaster2Repository)
    public arcMaster2Repository : ArcMaster2Repository,
  ) {}

  @post('/arc-master2s', {
    responses: {
      '200': {
        description: 'ArcMaster2 model instance',
        content: {'application/json': {schema: getModelSchemaRef(ArcMaster2)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcMaster2, {
            title: 'NewArcMaster2',
            exclude: ['idMaster2'],
          }),
        },
      },
    })
    arcMaster2: Omit<ArcMaster2, 'idMaster2'>,
  ): Promise<ArcMaster2> {
    return this.arcMaster2Repository.create(arcMaster2);
  }

  @get('/arc-master2s/count', {
    responses: {
      '200': {
        description: 'ArcMaster2 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ArcMaster2) where?: Where<ArcMaster2>,
  ): Promise<Count> {
    return this.arcMaster2Repository.count(where);
  }

  @get('/arc-master2s', {
    responses: {
      '200': {
        description: 'Array of ArcMaster2 model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ArcMaster2, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ArcMaster2) filter?: Filter<ArcMaster2>,
  ): Promise<ArcMaster2[]> {
    return this.arcMaster2Repository.find(filter);
  }

  @patch('/arc-master2s', {
    responses: {
      '200': {
        description: 'ArcMaster2 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcMaster2, {partial: true}),
        },
      },
    })
    arcMaster2: ArcMaster2,
    @param.where(ArcMaster2) where?: Where<ArcMaster2>,
  ): Promise<Count> {
    return this.arcMaster2Repository.updateAll(arcMaster2, where);
  }

  @get('/arc-master2s/{id}', {
    responses: {
      '200': {
        description: 'ArcMaster2 model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ArcMaster2, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ArcMaster2, {exclude: 'where'}) filter?: FilterExcludingWhere<ArcMaster2>
  ): Promise<ArcMaster2> {
    return this.arcMaster2Repository.findById(id, filter);
  }

  @patch('/arc-master2s/{id}', {
    responses: {
      '204': {
        description: 'ArcMaster2 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcMaster2, {partial: true}),
        },
      },
    })
    arcMaster2: ArcMaster2,
  ): Promise<void> {
    await this.arcMaster2Repository.updateById(id, arcMaster2);
  }

  @put('/arc-master2s/{id}', {
    responses: {
      '204': {
        description: 'ArcMaster2 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() arcMaster2: ArcMaster2,
  ): Promise<void> {
    await this.arcMaster2Repository.replaceById(id, arcMaster2);
  }

  @del('/arc-master2s/{id}', {
    responses: {
      '204': {
        description: 'ArcMaster2 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.arcMaster2Repository.deleteById(id);
  }
}
