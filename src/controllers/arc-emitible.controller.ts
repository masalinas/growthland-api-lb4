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
import {ArcEmitible} from '../models';
import {ArcEmitibleRepository} from '../repositories';

export class ArcEmitibleController {
  constructor(
    @repository(ArcEmitibleRepository)
    public arcEmitibleRepository : ArcEmitibleRepository,
  ) {}

  @post('/arc-emitibles', {
    responses: {
      '200': {
        description: 'ArcEmitible model instance',
        content: {'application/json': {schema: getModelSchemaRef(ArcEmitible)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcEmitible, {
            title: 'NewArcEmitible',
            exclude: ['idEmitible'],
          }),
        },
      },
    })
    arcEmitible: Omit<ArcEmitible, 'idEmitible'>,
  ): Promise<ArcEmitible> {
    return this.arcEmitibleRepository.create(arcEmitible);
  }

  @get('/arc-emitibles/count', {
    responses: {
      '200': {
        description: 'ArcEmitible model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ArcEmitible) where?: Where<ArcEmitible>,
  ): Promise<Count> {
    return this.arcEmitibleRepository.count(where);
  }

  @get('/arc-emitibles', {
    responses: {
      '200': {
        description: 'Array of ArcEmitible model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ArcEmitible, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ArcEmitible) filter?: Filter<ArcEmitible>,
  ): Promise<ArcEmitible[]> {
    return this.arcEmitibleRepository.find(filter);
  }

  @patch('/arc-emitibles', {
    responses: {
      '200': {
        description: 'ArcEmitible PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcEmitible, {partial: true}),
        },
      },
    })
    arcEmitible: ArcEmitible,
    @param.where(ArcEmitible) where?: Where<ArcEmitible>,
  ): Promise<Count> {
    return this.arcEmitibleRepository.updateAll(arcEmitible, where);
  }

  @get('/arc-emitibles/{id}', {
    responses: {
      '200': {
        description: 'ArcEmitible model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ArcEmitible, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ArcEmitible, {exclude: 'where'}) filter?: FilterExcludingWhere<ArcEmitible>
  ): Promise<ArcEmitible> {
    return this.arcEmitibleRepository.findById(id, filter);
  }

  @patch('/arc-emitibles/{id}', {
    responses: {
      '204': {
        description: 'ArcEmitible PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcEmitible, {partial: true}),
        },
      },
    })
    arcEmitible: ArcEmitible,
  ): Promise<void> {
    await this.arcEmitibleRepository.updateById(id, arcEmitible);
  }

  @put('/arc-emitibles/{id}', {
    responses: {
      '204': {
        description: 'ArcEmitible PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() arcEmitible: ArcEmitible,
  ): Promise<void> {
    await this.arcEmitibleRepository.replaceById(id, arcEmitible);
  }

  @del('/arc-emitibles/{id}', {
    responses: {
      '204': {
        description: 'ArcEmitible DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.arcEmitibleRepository.deleteById(id);
  }
}
