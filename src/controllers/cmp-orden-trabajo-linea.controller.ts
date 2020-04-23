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
import {CmpOrdenTrabajoLinea} from '../models';
import {CmpOrdenTrabajoLineaRepository} from '../repositories';

export class CmpOrdenTrabajoLineaController {
  constructor(
    @repository(CmpOrdenTrabajoLineaRepository)
    public cmpOrdenTrabajoLineaRepository : CmpOrdenTrabajoLineaRepository,
  ) {}

  @post('/cmp-orden-trabajo-lineas', {
    responses: {
      '200': {
        description: 'CmpOrdenTrabajoLinea model instance',
        content: {'application/json': {schema: getModelSchemaRef(CmpOrdenTrabajoLinea)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpOrdenTrabajoLinea, {
            title: 'NewCmpOrdenTrabajoLinea',
            exclude: ['idOrdenTrabajoLinea'],
          }),
        },
      },
    })
    cmpOrdenTrabajoLinea: Omit<CmpOrdenTrabajoLinea, 'idOrdenTrabajoLinea'>,
  ): Promise<CmpOrdenTrabajoLinea> {
    return this.cmpOrdenTrabajoLineaRepository.create(cmpOrdenTrabajoLinea);
  }

  @get('/cmp-orden-trabajo-lineas/count', {
    responses: {
      '200': {
        description: 'CmpOrdenTrabajoLinea model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CmpOrdenTrabajoLinea) where?: Where<CmpOrdenTrabajoLinea>,
  ): Promise<Count> {
    return this.cmpOrdenTrabajoLineaRepository.count(where);
  }

  @get('/cmp-orden-trabajo-lineas', {
    responses: {
      '200': {
        description: 'Array of CmpOrdenTrabajoLinea model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CmpOrdenTrabajoLinea, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CmpOrdenTrabajoLinea) filter?: Filter<CmpOrdenTrabajoLinea>,
  ): Promise<CmpOrdenTrabajoLinea[]> {
    return this.cmpOrdenTrabajoLineaRepository.find(filter);
  }

  @patch('/cmp-orden-trabajo-lineas', {
    responses: {
      '200': {
        description: 'CmpOrdenTrabajoLinea PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpOrdenTrabajoLinea, {partial: true}),
        },
      },
    })
    cmpOrdenTrabajoLinea: CmpOrdenTrabajoLinea,
    @param.where(CmpOrdenTrabajoLinea) where?: Where<CmpOrdenTrabajoLinea>,
  ): Promise<Count> {
    return this.cmpOrdenTrabajoLineaRepository.updateAll(cmpOrdenTrabajoLinea, where);
  }

  @get('/cmp-orden-trabajo-lineas/{id}', {
    responses: {
      '200': {
        description: 'CmpOrdenTrabajoLinea model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CmpOrdenTrabajoLinea, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CmpOrdenTrabajoLinea, {exclude: 'where'}) filter?: FilterExcludingWhere<CmpOrdenTrabajoLinea>
  ): Promise<CmpOrdenTrabajoLinea> {
    return this.cmpOrdenTrabajoLineaRepository.findById(id, filter);
  }

  @patch('/cmp-orden-trabajo-lineas/{id}', {
    responses: {
      '204': {
        description: 'CmpOrdenTrabajoLinea PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpOrdenTrabajoLinea, {partial: true}),
        },
      },
    })
    cmpOrdenTrabajoLinea: CmpOrdenTrabajoLinea,
  ): Promise<void> {
    await this.cmpOrdenTrabajoLineaRepository.updateById(id, cmpOrdenTrabajoLinea);
  }

  @put('/cmp-orden-trabajo-lineas/{id}', {
    responses: {
      '204': {
        description: 'CmpOrdenTrabajoLinea PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cmpOrdenTrabajoLinea: CmpOrdenTrabajoLinea,
  ): Promise<void> {
    await this.cmpOrdenTrabajoLineaRepository.replaceById(id, cmpOrdenTrabajoLinea);
  }

  @del('/cmp-orden-trabajo-lineas/{id}', {
    responses: {
      '204': {
        description: 'CmpOrdenTrabajoLinea DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cmpOrdenTrabajoLineaRepository.deleteById(id);
  }
}
