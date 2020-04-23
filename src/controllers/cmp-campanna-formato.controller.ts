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
import {CmpCampannaFormato} from '../models';
import {CmpCampannaFormatoRepository} from '../repositories';

export class CmpCampannaFormatoController {
  constructor(
    @repository(CmpCampannaFormatoRepository)
    public cmpCampannaFormatoRepository : CmpCampannaFormatoRepository,
  ) {}

  @post('/cmp-campanna-formatoes', {
    responses: {
      '200': {
        description: 'CmpCampannaFormato model instance',
        content: {'application/json': {schema: getModelSchemaRef(CmpCampannaFormato)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpCampannaFormato, {
            title: 'NewCmpCampannaFormato',
            exclude: ['idCampannaFormato'],
          }),
        },
      },
    })
    cmpCampannaFormato: Omit<CmpCampannaFormato, 'idCampannaFormato'>,
  ): Promise<CmpCampannaFormato> {
    return this.cmpCampannaFormatoRepository.create(cmpCampannaFormato);
  }

  @get('/cmp-campanna-formatoes/count', {
    responses: {
      '200': {
        description: 'CmpCampannaFormato model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CmpCampannaFormato) where?: Where<CmpCampannaFormato>,
  ): Promise<Count> {
    return this.cmpCampannaFormatoRepository.count(where);
  }

  @get('/cmp-campanna-formatoes', {
    responses: {
      '200': {
        description: 'Array of CmpCampannaFormato model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CmpCampannaFormato, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CmpCampannaFormato) filter?: Filter<CmpCampannaFormato>,
  ): Promise<CmpCampannaFormato[]> {
    return this.cmpCampannaFormatoRepository.find(filter);
  }

  @patch('/cmp-campanna-formatoes', {
    responses: {
      '200': {
        description: 'CmpCampannaFormato PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpCampannaFormato, {partial: true}),
        },
      },
    })
    cmpCampannaFormato: CmpCampannaFormato,
    @param.where(CmpCampannaFormato) where?: Where<CmpCampannaFormato>,
  ): Promise<Count> {
    return this.cmpCampannaFormatoRepository.updateAll(cmpCampannaFormato, where);
  }

  @get('/cmp-campanna-formatoes/{id}', {
    responses: {
      '200': {
        description: 'CmpCampannaFormato model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CmpCampannaFormato, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CmpCampannaFormato, {exclude: 'where'}) filter?: FilterExcludingWhere<CmpCampannaFormato>
  ): Promise<CmpCampannaFormato> {
    return this.cmpCampannaFormatoRepository.findById(id, filter);
  }

  @patch('/cmp-campanna-formatoes/{id}', {
    responses: {
      '204': {
        description: 'CmpCampannaFormato PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpCampannaFormato, {partial: true}),
        },
      },
    })
    cmpCampannaFormato: CmpCampannaFormato,
  ): Promise<void> {
    await this.cmpCampannaFormatoRepository.updateById(id, cmpCampannaFormato);
  }

  @put('/cmp-campanna-formatoes/{id}', {
    responses: {
      '204': {
        description: 'CmpCampannaFormato PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cmpCampannaFormato: CmpCampannaFormato,
  ): Promise<void> {
    await this.cmpCampannaFormatoRepository.replaceById(id, cmpCampannaFormato);
  }

  @del('/cmp-campanna-formatoes/{id}', {
    responses: {
      '204': {
        description: 'CmpCampannaFormato DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cmpCampannaFormatoRepository.deleteById(id);
  }
}
