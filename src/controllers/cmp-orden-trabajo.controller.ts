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
import {CmpOrdenTrabajo} from '../models';
import {CmpOrdenTrabajoRepository} from '../repositories';

export class CmpOrdenTrabajoController {
  constructor(
    @repository(CmpOrdenTrabajoRepository)
    public cmpOrdenTrabajoRepository : CmpOrdenTrabajoRepository,
  ) {}

  @post('/cmp-orden-trabajos', {
    responses: {
      '200': {
        description: 'CmpOrdenTrabajo model instance',
        content: {'application/json': {schema: getModelSchemaRef(CmpOrdenTrabajo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpOrdenTrabajo, {
            title: 'NewCmpOrdenTrabajo',
            exclude: ['idOrdenTrabajo'],
          }),
        },
      },
    })
    cmpOrdenTrabajo: Omit<CmpOrdenTrabajo, 'idOrdenTrabajo'>,
  ): Promise<CmpOrdenTrabajo> {
    return this.cmpOrdenTrabajoRepository.create(cmpOrdenTrabajo);
  }

  @get('/cmp-orden-trabajos/count', {
    responses: {
      '200': {
        description: 'CmpOrdenTrabajo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CmpOrdenTrabajo) where?: Where<CmpOrdenTrabajo>,
  ): Promise<Count> {
    return this.cmpOrdenTrabajoRepository.count(where);
  }

  @get('/cmp-orden-trabajos', {
    responses: {
      '200': {
        description: 'Array of CmpOrdenTrabajo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CmpOrdenTrabajo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CmpOrdenTrabajo) filter?: Filter<CmpOrdenTrabajo>,
  ): Promise<CmpOrdenTrabajo[]> {
    return this.cmpOrdenTrabajoRepository.find(filter);
  }

  @patch('/cmp-orden-trabajos', {
    responses: {
      '200': {
        description: 'CmpOrdenTrabajo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpOrdenTrabajo, {partial: true}),
        },
      },
    })
    cmpOrdenTrabajo: CmpOrdenTrabajo,
    @param.where(CmpOrdenTrabajo) where?: Where<CmpOrdenTrabajo>,
  ): Promise<Count> {
    return this.cmpOrdenTrabajoRepository.updateAll(cmpOrdenTrabajo, where);
  }

  @get('/cmp-orden-trabajos/{id}', {
    responses: {
      '200': {
        description: 'CmpOrdenTrabajo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CmpOrdenTrabajo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CmpOrdenTrabajo, {exclude: 'where'}) filter?: FilterExcludingWhere<CmpOrdenTrabajo>
  ): Promise<CmpOrdenTrabajo> {
    return this.cmpOrdenTrabajoRepository.findById(id, filter);
  }

  @patch('/cmp-orden-trabajos/{id}', {
    responses: {
      '204': {
        description: 'CmpOrdenTrabajo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpOrdenTrabajo, {partial: true}),
        },
      },
    })
    cmpOrdenTrabajo: CmpOrdenTrabajo,
  ): Promise<void> {
    await this.cmpOrdenTrabajoRepository.updateById(id, cmpOrdenTrabajo);
  }

  @put('/cmp-orden-trabajos/{id}', {
    responses: {
      '204': {
        description: 'CmpOrdenTrabajo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cmpOrdenTrabajo: CmpOrdenTrabajo,
  ): Promise<void> {
    await this.cmpOrdenTrabajoRepository.replaceById(id, cmpOrdenTrabajo);
  }

  @del('/cmp-orden-trabajos/{id}', {
    responses: {
      '204': {
        description: 'CmpOrdenTrabajo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cmpOrdenTrabajoRepository.deleteById(id);
  }
}
