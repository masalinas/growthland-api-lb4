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
import {CmpCampanna} from '../models';
import {CmpCampannaRepository} from '../repositories';

export class CmpCampannaController {
  constructor(
    @repository(CmpCampannaRepository)
    public cmpCampannaRepository : CmpCampannaRepository,
  ) {}

  @post('/cmp-campannas', {
    responses: {
      '200': {
        description: 'CmpCampanna model instance',
        content: {'application/json': {schema: getModelSchemaRef(CmpCampanna)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpCampanna, {
            title: 'NewCmpCampanna',
            exclude: ['idCampanna'],
          }),
        },
      },
    })
    cmpCampanna: Omit<CmpCampanna, 'idCampanna'>,
  ): Promise<CmpCampanna> {
    return this.cmpCampannaRepository.create(cmpCampanna);
  }

  @get('/cmp-campannas/count', {
    responses: {
      '200': {
        description: 'CmpCampanna model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CmpCampanna) where?: Where<CmpCampanna>,
  ): Promise<Count> {
    return this.cmpCampannaRepository.count(where);
  }

  @get('/cmp-campannas', {
    responses: {
      '200': {
        description: 'Array of CmpCampanna model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CmpCampanna, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CmpCampanna) filter?: Filter<CmpCampanna>,
  ): Promise<CmpCampanna[]> {
    return this.cmpCampannaRepository.find(filter);
  }

  @patch('/cmp-campannas', {
    responses: {
      '200': {
        description: 'CmpCampanna PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpCampanna, {partial: true}),
        },
      },
    })
    cmpCampanna: CmpCampanna,
    @param.where(CmpCampanna) where?: Where<CmpCampanna>,
  ): Promise<Count> {
    return this.cmpCampannaRepository.updateAll(cmpCampanna, where);
  }

  @get('/cmp-campannas/{id}', {
    responses: {
      '200': {
        description: 'CmpCampanna model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CmpCampanna, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CmpCampanna, {exclude: 'where'}) filter?: FilterExcludingWhere<CmpCampanna>
  ): Promise<CmpCampanna> {
    return this.cmpCampannaRepository.findById(id, filter);
  }

  @patch('/cmp-campannas/{id}', {
    responses: {
      '204': {
        description: 'CmpCampanna PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpCampanna, {partial: true}),
        },
      },
    })
    cmpCampanna: CmpCampanna,
  ): Promise<void> {
    await this.cmpCampannaRepository.updateById(id, cmpCampanna);
  }

  @put('/cmp-campannas/{id}', {
    responses: {
      '204': {
        description: 'CmpCampanna PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cmpCampanna: CmpCampanna,
  ): Promise<void> {
    await this.cmpCampannaRepository.replaceById(id, cmpCampanna);
  }

  @del('/cmp-campannas/{id}', {
    responses: {
      '204': {
        description: 'CmpCampanna DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cmpCampannaRepository.deleteById(id);
  }
}
