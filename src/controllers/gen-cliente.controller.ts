import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {GenCliente} from '../models';
import {GenClienteRepository} from '../repositories';

export class GenClienteController {
  constructor(
    @repository(GenClienteRepository)
    public genClienteRepository: GenClienteRepository,
  ) {}

  @post('/gen-clientes', {
    responses: {
      '200': {
        description: 'GenCliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(GenCliente)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenCliente, {
            title: 'NewGenCliente',
            exclude: ['idCliente'],
          }),
        },
      },
    })
    genCliente: Omit<GenCliente, 'idCliente'>,
  ): Promise<GenCliente> {
    return this.genClienteRepository.create(genCliente);
  }

  @get('/gen-clientes/count', {
    responses: {
      '200': {
        description: 'GenCliente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(GenCliente) where?: Where<GenCliente>,
  ): Promise<Count> {
    return this.genClienteRepository.count(where);
  }

  @get('/gen-clientes', {
    responses: {
      '200': {
        description: 'Array of GenCliente model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GenCliente, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(GenCliente) filter?: Filter<GenCliente>,
  ): Promise<GenCliente[]> {
    return this.genClienteRepository.find(filter);
  }

  @patch('/gen-clientes', {
    responses: {
      '200': {
        description: 'GenCliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenCliente, {partial: true}),
        },
      },
    })
    genCliente: GenCliente,
    @param.where(GenCliente) where?: Where<GenCliente>,
  ): Promise<Count> {
    return this.genClienteRepository.updateAll(genCliente, where);
  }

  @get('/gen-clientes/{id}', {
    responses: {
      '200': {
        description: 'GenCliente model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(GenCliente, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GenCliente, {exclude: 'where'})
    filter?: FilterExcludingWhere<GenCliente>,
  ): Promise<GenCliente> {
    return this.genClienteRepository.findById(id, filter);
  }

  @patch('/gen-clientes/{id}', {
    responses: {
      '204': {
        description: 'GenCliente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenCliente, {partial: true}),
        },
      },
    })
    genCliente: GenCliente,
  ): Promise<void> {
    await this.genClienteRepository.updateById(id, genCliente);
  }

  @put('/gen-clientes/{id}', {
    responses: {
      '204': {
        description: 'GenCliente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() genCliente: GenCliente,
  ): Promise<void> {
    await this.genClienteRepository.replaceById(id, genCliente);
  }

  @del('/gen-clientes/{id}', {
    responses: {
      '204': {
        description: 'GenCliente DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.genClienteRepository.deleteById(id);
  }
}
