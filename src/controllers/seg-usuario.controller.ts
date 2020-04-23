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
import {SegUsuario} from '../models';
import {SegUsuarioRepository} from '../repositories';

export class SegUsuarioController {
  constructor(
    @repository(SegUsuarioRepository)
    public segUsuarioRepository : SegUsuarioRepository,
  ) {}

  @post('/seg-usuarios', {
    responses: {
      '200': {
        description: 'SegUsuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(SegUsuario)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SegUsuario, {
            title: 'NewSegUsuario',
            exclude: ['idUsuario'],
          }),
        },
      },
    })
    segUsuario: Omit<SegUsuario, 'idUsuario'>,
  ): Promise<SegUsuario> {
    return this.segUsuarioRepository.create(segUsuario);
  }

  @get('/seg-usuarios/count', {
    responses: {
      '200': {
        description: 'SegUsuario model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SegUsuario) where?: Where<SegUsuario>,
  ): Promise<Count> {
    return this.segUsuarioRepository.count(where);
  }

  @get('/seg-usuarios', {
    responses: {
      '200': {
        description: 'Array of SegUsuario model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SegUsuario, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SegUsuario) filter?: Filter<SegUsuario>,
  ): Promise<SegUsuario[]> {
    return this.segUsuarioRepository.find(filter);
  }

  @patch('/seg-usuarios', {
    responses: {
      '200': {
        description: 'SegUsuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SegUsuario, {partial: true}),
        },
      },
    })
    segUsuario: SegUsuario,
    @param.where(SegUsuario) where?: Where<SegUsuario>,
  ): Promise<Count> {
    return this.segUsuarioRepository.updateAll(segUsuario, where);
  }

  @get('/seg-usuarios/{id}', {
    responses: {
      '200': {
        description: 'SegUsuario model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SegUsuario, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SegUsuario, {exclude: 'where'}) filter?: FilterExcludingWhere<SegUsuario>
  ): Promise<SegUsuario> {
    return this.segUsuarioRepository.findById(id, filter);
  }

  @patch('/seg-usuarios/{id}', {
    responses: {
      '204': {
        description: 'SegUsuario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SegUsuario, {partial: true}),
        },
      },
    })
    segUsuario: SegUsuario,
  ): Promise<void> {
    await this.segUsuarioRepository.updateById(id, segUsuario);
  }

  @put('/seg-usuarios/{id}', {
    responses: {
      '204': {
        description: 'SegUsuario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() segUsuario: SegUsuario,
  ): Promise<void> {
    await this.segUsuarioRepository.replaceById(id, segUsuario);
  }

  @del('/seg-usuarios/{id}', {
    responses: {
      '204': {
        description: 'SegUsuario DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.segUsuarioRepository.deleteById(id);
  }
}
