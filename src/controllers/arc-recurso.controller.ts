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
import {ArcRecurso} from '../models';
import {ArcRecursoRepository} from '../repositories';

export class ArcRecursoController {
  constructor(
    @repository(ArcRecursoRepository)
    public arcRecursoRepository : ArcRecursoRepository,
  ) {}

  @post('/arc-recursos', {
    responses: {
      '200': {
        description: 'ArcRecurso model instance',
        content: {'application/json': {schema: getModelSchemaRef(ArcRecurso)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcRecurso, {
            title: 'NewArcRecurso',
            exclude: ['idRecurso'],
          }),
        },
      },
    })
    arcRecurso: Omit<ArcRecurso, 'idRecurso'>,
  ): Promise<ArcRecurso> {
    return this.arcRecursoRepository.create(arcRecurso);
  }

  @get('/arc-recursos/count', {
    responses: {
      '200': {
        description: 'ArcRecurso model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ArcRecurso) where?: Where<ArcRecurso>,
  ): Promise<Count> {
    return this.arcRecursoRepository.count(where);
  }

  @get('/arc-recursos', {
    responses: {
      '200': {
        description: 'Array of ArcRecurso model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ArcRecurso, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ArcRecurso) filter?: Filter<ArcRecurso>,
  ): Promise<ArcRecurso[]> {
    return this.arcRecursoRepository.find(filter);
  }

  @patch('/arc-recursos', {
    responses: {
      '200': {
        description: 'ArcRecurso PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcRecurso, {partial: true}),
        },
      },
    })
    arcRecurso: ArcRecurso,
    @param.where(ArcRecurso) where?: Where<ArcRecurso>,
  ): Promise<Count> {
    return this.arcRecursoRepository.updateAll(arcRecurso, where);
  }

  @get('/arc-recursos/{id}', {
    responses: {
      '200': {
        description: 'ArcRecurso model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ArcRecurso, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ArcRecurso, {exclude: 'where'}) filter?: FilterExcludingWhere<ArcRecurso>
  ): Promise<ArcRecurso> {
    return this.arcRecursoRepository.findById(id, filter);
  }

  @patch('/arc-recursos/{id}', {
    responses: {
      '204': {
        description: 'ArcRecurso PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcRecurso, {partial: true}),
        },
      },
    })
    arcRecurso: ArcRecurso,
  ): Promise<void> {
    await this.arcRecursoRepository.updateById(id, arcRecurso);
  }

  @put('/arc-recursos/{id}', {
    responses: {
      '204': {
        description: 'ArcRecurso PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() arcRecurso: ArcRecurso,
  ): Promise<void> {
    await this.arcRecursoRepository.replaceById(id, arcRecurso);
  }

  @del('/arc-recursos/{id}', {
    responses: {
      '204': {
        description: 'ArcRecurso DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.arcRecursoRepository.deleteById(id);
  }
}
