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
import {CmpCampannaPropuesta} from '../models';
import {CmpCampannaPropuestaRepository} from '../repositories';

export class CmpCampannaPropuestaController {
  constructor(
    @repository(CmpCampannaPropuestaRepository)
    public cmpCampannaPropuestaRepository : CmpCampannaPropuestaRepository,
  ) {}

  @post('/cmp-campanna-propuestas', {
    responses: {
      '200': {
        description: 'CmpCampannaPropuesta model instance',
        content: {'application/json': {schema: getModelSchemaRef(CmpCampannaPropuesta)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpCampannaPropuesta, {
            title: 'NewCmpCampannaPropuesta',
            exclude: ['idCampannaPropuesta'],
          }),
        },
      },
    })
    cmpCampannaPropuesta: Omit<CmpCampannaPropuesta, 'idCampannaPropuesta'>,
  ): Promise<CmpCampannaPropuesta> {
    return this.cmpCampannaPropuestaRepository.create(cmpCampannaPropuesta);
  }

  @get('/cmp-campanna-propuestas/count', {
    responses: {
      '200': {
        description: 'CmpCampannaPropuesta model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CmpCampannaPropuesta) where?: Where<CmpCampannaPropuesta>,
  ): Promise<Count> {
    return this.cmpCampannaPropuestaRepository.count(where);
  }

  @get('/cmp-campanna-propuestas', {
    responses: {
      '200': {
        description: 'Array of CmpCampannaPropuesta model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CmpCampannaPropuesta, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CmpCampannaPropuesta) filter?: Filter<CmpCampannaPropuesta>,
  ): Promise<CmpCampannaPropuesta[]> {
    return this.cmpCampannaPropuestaRepository.find(filter);
  }

  @patch('/cmp-campanna-propuestas', {
    responses: {
      '200': {
        description: 'CmpCampannaPropuesta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpCampannaPropuesta, {partial: true}),
        },
      },
    })
    cmpCampannaPropuesta: CmpCampannaPropuesta,
    @param.where(CmpCampannaPropuesta) where?: Where<CmpCampannaPropuesta>,
  ): Promise<Count> {
    return this.cmpCampannaPropuestaRepository.updateAll(cmpCampannaPropuesta, where);
  }

  @get('/cmp-campanna-propuestas/{id}', {
    responses: {
      '200': {
        description: 'CmpCampannaPropuesta model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CmpCampannaPropuesta, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CmpCampannaPropuesta, {exclude: 'where'}) filter?: FilterExcludingWhere<CmpCampannaPropuesta>
  ): Promise<CmpCampannaPropuesta> {
    return this.cmpCampannaPropuestaRepository.findById(id, filter);
  }

  @patch('/cmp-campanna-propuestas/{id}', {
    responses: {
      '204': {
        description: 'CmpCampannaPropuesta PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpCampannaPropuesta, {partial: true}),
        },
      },
    })
    cmpCampannaPropuesta: CmpCampannaPropuesta,
  ): Promise<void> {
    await this.cmpCampannaPropuestaRepository.updateById(id, cmpCampannaPropuesta);
  }

  @put('/cmp-campanna-propuestas/{id}', {
    responses: {
      '204': {
        description: 'CmpCampannaPropuesta PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cmpCampannaPropuesta: CmpCampannaPropuesta,
  ): Promise<void> {
    await this.cmpCampannaPropuestaRepository.replaceById(id, cmpCampannaPropuesta);
  }

  @del('/cmp-campanna-propuestas/{id}', {
    responses: {
      '204': {
        description: 'CmpCampannaPropuesta DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cmpCampannaPropuestaRepository.deleteById(id);
  }
}
