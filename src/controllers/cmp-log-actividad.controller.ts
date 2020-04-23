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
import {CmpLogActividad} from '../models';
import {CmpLogActividadRepository} from '../repositories';

export class CmpLogActividadController {
  constructor(
    @repository(CmpLogActividadRepository)
    public cmpLogActividadRepository : CmpLogActividadRepository,
  ) {}

  @post('/cmp-log-actividads', {
    responses: {
      '200': {
        description: 'CmpLogActividad model instance',
        content: {'application/json': {schema: getModelSchemaRef(CmpLogActividad)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpLogActividad, {
            title: 'NewCmpLogActividad',
            exclude: ['idLogActividad'],
          }),
        },
      },
    })
    cmpLogActividad: Omit<CmpLogActividad, 'idLogActividad'>,
  ): Promise<CmpLogActividad> {
    return this.cmpLogActividadRepository.create(cmpLogActividad);
  }

  @get('/cmp-log-actividads/count', {
    responses: {
      '200': {
        description: 'CmpLogActividad model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CmpLogActividad) where?: Where<CmpLogActividad>,
  ): Promise<Count> {
    return this.cmpLogActividadRepository.count(where);
  }

  @get('/cmp-log-actividads', {
    responses: {
      '200': {
        description: 'Array of CmpLogActividad model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CmpLogActividad, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CmpLogActividad) filter?: Filter<CmpLogActividad>,
  ): Promise<CmpLogActividad[]> {
    return this.cmpLogActividadRepository.find(filter);
  }

  @patch('/cmp-log-actividads', {
    responses: {
      '200': {
        description: 'CmpLogActividad PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpLogActividad, {partial: true}),
        },
      },
    })
    cmpLogActividad: CmpLogActividad,
    @param.where(CmpLogActividad) where?: Where<CmpLogActividad>,
  ): Promise<Count> {
    return this.cmpLogActividadRepository.updateAll(cmpLogActividad, where);
  }

  @get('/cmp-log-actividads/{id}', {
    responses: {
      '200': {
        description: 'CmpLogActividad model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CmpLogActividad, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CmpLogActividad, {exclude: 'where'}) filter?: FilterExcludingWhere<CmpLogActividad>
  ): Promise<CmpLogActividad> {
    return this.cmpLogActividadRepository.findById(id, filter);
  }

  @patch('/cmp-log-actividads/{id}', {
    responses: {
      '204': {
        description: 'CmpLogActividad PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CmpLogActividad, {partial: true}),
        },
      },
    })
    cmpLogActividad: CmpLogActividad,
  ): Promise<void> {
    await this.cmpLogActividadRepository.updateById(id, cmpLogActividad);
  }

  @put('/cmp-log-actividads/{id}', {
    responses: {
      '204': {
        description: 'CmpLogActividad PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cmpLogActividad: CmpLogActividad,
  ): Promise<void> {
    await this.cmpLogActividadRepository.replaceById(id, cmpLogActividad);
  }

  @del('/cmp-log-actividads/{id}', {
    responses: {
      '204': {
        description: 'CmpLogActividad DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cmpLogActividadRepository.deleteById(id);
  }
}
