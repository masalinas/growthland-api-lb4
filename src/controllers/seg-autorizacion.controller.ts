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
import {SegAutorizacion} from '../models';
import {SegAutorizacionRepository} from '../repositories';

export class SegAutorizacionController {
  constructor(
    @repository(SegAutorizacionRepository)
    public segAutorizacionRepository : SegAutorizacionRepository,
  ) {}

  @post('/seg-autorizacions', {
    responses: {
      '200': {
        description: 'SegAutorizacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(SegAutorizacion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SegAutorizacion, {
            title: 'NewSegAutorizacion',
            exclude: ['idAutorizacion'],
          }),
        },
      },
    })
    segAutorizacion: Omit<SegAutorizacion, 'idAutorizacion'>,
  ): Promise<SegAutorizacion> {
    return this.segAutorizacionRepository.create(segAutorizacion);
  }

  @get('/seg-autorizacions/count', {
    responses: {
      '200': {
        description: 'SegAutorizacion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SegAutorizacion) where?: Where<SegAutorizacion>,
  ): Promise<Count> {
    return this.segAutorizacionRepository.count(where);
  }

  @get('/seg-autorizacions', {
    responses: {
      '200': {
        description: 'Array of SegAutorizacion model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SegAutorizacion, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SegAutorizacion) filter?: Filter<SegAutorizacion>,
  ): Promise<SegAutorizacion[]> {
    return this.segAutorizacionRepository.find(filter);
  }

  @patch('/seg-autorizacions', {
    responses: {
      '200': {
        description: 'SegAutorizacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SegAutorizacion, {partial: true}),
        },
      },
    })
    segAutorizacion: SegAutorizacion,
    @param.where(SegAutorizacion) where?: Where<SegAutorizacion>,
  ): Promise<Count> {
    return this.segAutorizacionRepository.updateAll(segAutorizacion, where);
  }

  @get('/seg-autorizacions/{id}', {
    responses: {
      '200': {
        description: 'SegAutorizacion model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SegAutorizacion, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SegAutorizacion, {exclude: 'where'}) filter?: FilterExcludingWhere<SegAutorizacion>
  ): Promise<SegAutorizacion> {
    return this.segAutorizacionRepository.findById(id, filter);
  }

  @patch('/seg-autorizacions/{id}', {
    responses: {
      '204': {
        description: 'SegAutorizacion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SegAutorizacion, {partial: true}),
        },
      },
    })
    segAutorizacion: SegAutorizacion,
  ): Promise<void> {
    await this.segAutorizacionRepository.updateById(id, segAutorizacion);
  }

  @put('/seg-autorizacions/{id}', {
    responses: {
      '204': {
        description: 'SegAutorizacion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() segAutorizacion: SegAutorizacion,
  ): Promise<void> {
    await this.segAutorizacionRepository.replaceById(id, segAutorizacion);
  }

  @del('/seg-autorizacions/{id}', {
    responses: {
      '204': {
        description: 'SegAutorizacion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.segAutorizacionRepository.deleteById(id);
  }
}
