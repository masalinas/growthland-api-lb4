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
import {AssArchivo} from '../models';
import {AssArchivoRepository} from '../repositories';

export class AssArchivoController {
  constructor(
    @repository(AssArchivoRepository)
    public assArchivoRepository : AssArchivoRepository,
  ) {}

  @post('/ass-archivos', {
    responses: {
      '200': {
        description: 'AssArchivo model instance',
        content: {'application/json': {schema: getModelSchemaRef(AssArchivo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AssArchivo, {
            title: 'NewAssArchivo',
            exclude: ['idArchivo'],
          }),
        },
      },
    })
    assArchivo: Omit<AssArchivo, 'idArchivo'>,
  ): Promise<AssArchivo> {
    return this.assArchivoRepository.create(assArchivo);
  }

  @get('/ass-archivos/count', {
    responses: {
      '200': {
        description: 'AssArchivo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(AssArchivo) where?: Where<AssArchivo>,
  ): Promise<Count> {
    return this.assArchivoRepository.count(where);
  }

  @get('/ass-archivos', {
    responses: {
      '200': {
        description: 'Array of AssArchivo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(AssArchivo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(AssArchivo) filter?: Filter<AssArchivo>,
  ): Promise<AssArchivo[]> {
    return this.assArchivoRepository.find(filter);
  }

  @patch('/ass-archivos', {
    responses: {
      '200': {
        description: 'AssArchivo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AssArchivo, {partial: true}),
        },
      },
    })
    assArchivo: AssArchivo,
    @param.where(AssArchivo) where?: Where<AssArchivo>,
  ): Promise<Count> {
    return this.assArchivoRepository.updateAll(assArchivo, where);
  }

  @get('/ass-archivos/{id}', {
    responses: {
      '200': {
        description: 'AssArchivo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AssArchivo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AssArchivo, {exclude: 'where'}) filter?: FilterExcludingWhere<AssArchivo>
  ): Promise<AssArchivo> {
    return this.assArchivoRepository.findById(id, filter);
  }

  @patch('/ass-archivos/{id}', {
    responses: {
      '204': {
        description: 'AssArchivo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AssArchivo, {partial: true}),
        },
      },
    })
    assArchivo: AssArchivo,
  ): Promise<void> {
    await this.assArchivoRepository.updateById(id, assArchivo);
  }

  @put('/ass-archivos/{id}', {
    responses: {
      '204': {
        description: 'AssArchivo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() assArchivo: AssArchivo,
  ): Promise<void> {
    await this.assArchivoRepository.replaceById(id, assArchivo);
  }

  @del('/ass-archivos/{id}', {
    responses: {
      '204': {
        description: 'AssArchivo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.assArchivoRepository.deleteById(id);
  }
}
