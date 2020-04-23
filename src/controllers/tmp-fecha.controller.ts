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
import {TmpFecha} from '../models';
import {TmpFechaRepository} from '../repositories';

export class TmpFechaController {
  constructor(
    @repository(TmpFechaRepository)
    public tmpFechaRepository : TmpFechaRepository,
  ) {}

  @post('/tmp-fechas', {
    responses: {
      '200': {
        description: 'TmpFecha model instance',
        content: {'application/json': {schema: getModelSchemaRef(TmpFecha)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TmpFecha, {
            title: 'NewTmpFecha',
            exclude: ['idFecha'],
          }),
        },
      },
    })
    tmpFecha: Omit<TmpFecha, 'idFecha'>,
  ): Promise<TmpFecha> {
    return this.tmpFechaRepository.create(tmpFecha);
  }

  @get('/tmp-fechas/count', {
    responses: {
      '200': {
        description: 'TmpFecha model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(TmpFecha) where?: Where<TmpFecha>,
  ): Promise<Count> {
    return this.tmpFechaRepository.count(where);
  }

  @get('/tmp-fechas', {
    responses: {
      '200': {
        description: 'Array of TmpFecha model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(TmpFecha, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(TmpFecha) filter?: Filter<TmpFecha>,
  ): Promise<TmpFecha[]> {
    return this.tmpFechaRepository.find(filter);
  }

  @patch('/tmp-fechas', {
    responses: {
      '200': {
        description: 'TmpFecha PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TmpFecha, {partial: true}),
        },
      },
    })
    tmpFecha: TmpFecha,
    @param.where(TmpFecha) where?: Where<TmpFecha>,
  ): Promise<Count> {
    return this.tmpFechaRepository.updateAll(tmpFecha, where);
  }

  @get('/tmp-fechas/{id}', {
    responses: {
      '200': {
        description: 'TmpFecha model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TmpFecha, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TmpFecha, {exclude: 'where'}) filter?: FilterExcludingWhere<TmpFecha>
  ): Promise<TmpFecha> {
    return this.tmpFechaRepository.findById(id, filter);
  }

  @patch('/tmp-fechas/{id}', {
    responses: {
      '204': {
        description: 'TmpFecha PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TmpFecha, {partial: true}),
        },
      },
    })
    tmpFecha: TmpFecha,
  ): Promise<void> {
    await this.tmpFechaRepository.updateById(id, tmpFecha);
  }

  @put('/tmp-fechas/{id}', {
    responses: {
      '204': {
        description: 'TmpFecha PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tmpFecha: TmpFecha,
  ): Promise<void> {
    await this.tmpFechaRepository.replaceById(id, tmpFecha);
  }

  @del('/tmp-fechas/{id}', {
    responses: {
      '204': {
        description: 'TmpFecha DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tmpFechaRepository.deleteById(id);
  }
}
