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
import {AssContenedor} from '../models';
import {AssContenedorRepository} from '../repositories';

export class AssContenedorController {
  constructor(
    @repository(AssContenedorRepository)
    public assContenedorRepository : AssContenedorRepository,
  ) {}

  @post('/ass-contenedors', {
    responses: {
      '200': {
        description: 'AssContenedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(AssContenedor)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AssContenedor, {
            title: 'NewAssContenedor',
            exclude: ['idContenedor'],
          }),
        },
      },
    })
    assContenedor: Omit<AssContenedor, 'idContenedor'>,
  ): Promise<AssContenedor> {
    return this.assContenedorRepository.create(assContenedor);
  }

  @get('/ass-contenedors/count', {
    responses: {
      '200': {
        description: 'AssContenedor model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(AssContenedor) where?: Where<AssContenedor>,
  ): Promise<Count> {
    return this.assContenedorRepository.count(where);
  }

  @get('/ass-contenedors', {
    responses: {
      '200': {
        description: 'Array of AssContenedor model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(AssContenedor, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(AssContenedor) filter?: Filter<AssContenedor>,
  ): Promise<AssContenedor[]> {
    return this.assContenedorRepository.find(filter);
  }

  @patch('/ass-contenedors', {
    responses: {
      '200': {
        description: 'AssContenedor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AssContenedor, {partial: true}),
        },
      },
    })
    assContenedor: AssContenedor,
    @param.where(AssContenedor) where?: Where<AssContenedor>,
  ): Promise<Count> {
    return this.assContenedorRepository.updateAll(assContenedor, where);
  }

  @get('/ass-contenedors/{id}', {
    responses: {
      '200': {
        description: 'AssContenedor model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AssContenedor, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AssContenedor, {exclude: 'where'}) filter?: FilterExcludingWhere<AssContenedor>
  ): Promise<AssContenedor> {
    return this.assContenedorRepository.findById(id, filter);
  }

  @patch('/ass-contenedors/{id}', {
    responses: {
      '204': {
        description: 'AssContenedor PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AssContenedor, {partial: true}),
        },
      },
    })
    assContenedor: AssContenedor,
  ): Promise<void> {
    await this.assContenedorRepository.updateById(id, assContenedor);
  }

  @put('/ass-contenedors/{id}', {
    responses: {
      '204': {
        description: 'AssContenedor PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() assContenedor: AssContenedor,
  ): Promise<void> {
    await this.assContenedorRepository.replaceById(id, assContenedor);
  }

  @del('/ass-contenedors/{id}', {
    responses: {
      '204': {
        description: 'AssContenedor DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.assContenedorRepository.deleteById(id);
  }
}
