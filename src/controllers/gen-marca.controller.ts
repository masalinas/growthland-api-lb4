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
import {GenMarca} from '../models';
import {GenMarcaRepository} from '../repositories';

export class GenMarcaController {
  constructor(
    @repository(GenMarcaRepository)
    public genMarcaRepository : GenMarcaRepository,
  ) {}

  @post('/gen-marcas', {
    responses: {
      '200': {
        description: 'GenMarca model instance',
        content: {'application/json': {schema: getModelSchemaRef(GenMarca)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenMarca, {
            title: 'NewGenMarca',
            exclude: ['idMarca'],
          }),
        },
      },
    })
    genMarca: Omit<GenMarca, 'idMarca'>,
  ): Promise<GenMarca> {
    return this.genMarcaRepository.create(genMarca);
  }

  @get('/gen-marcas/count', {
    responses: {
      '200': {
        description: 'GenMarca model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(GenMarca) where?: Where<GenMarca>,
  ): Promise<Count> {
    return this.genMarcaRepository.count(where);
  }

  @get('/gen-marcas', {
    responses: {
      '200': {
        description: 'Array of GenMarca model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GenMarca, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(GenMarca) filter?: Filter<GenMarca>,
  ): Promise<GenMarca[]> {
    return this.genMarcaRepository.find(filter);
  }

  @patch('/gen-marcas', {
    responses: {
      '200': {
        description: 'GenMarca PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenMarca, {partial: true}),
        },
      },
    })
    genMarca: GenMarca,
    @param.where(GenMarca) where?: Where<GenMarca>,
  ): Promise<Count> {
    return this.genMarcaRepository.updateAll(genMarca, where);
  }

  @get('/gen-marcas/{id}', {
    responses: {
      '200': {
        description: 'GenMarca model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(GenMarca, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GenMarca, {exclude: 'where'}) filter?: FilterExcludingWhere<GenMarca>
  ): Promise<GenMarca> {
    return this.genMarcaRepository.findById(id, filter);
  }

  @patch('/gen-marcas/{id}', {
    responses: {
      '204': {
        description: 'GenMarca PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenMarca, {partial: true}),
        },
      },
    })
    genMarca: GenMarca,
  ): Promise<void> {
    await this.genMarcaRepository.updateById(id, genMarca);
  }

  @put('/gen-marcas/{id}', {
    responses: {
      '204': {
        description: 'GenMarca PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() genMarca: GenMarca,
  ): Promise<void> {
    await this.genMarcaRepository.replaceById(id, genMarca);
  }

  @del('/gen-marcas/{id}', {
    responses: {
      '204': {
        description: 'GenMarca DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.genMarcaRepository.deleteById(id);
  }
}
