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
import {ArcMasterClasificacion} from '../models';
import {ArcMasterClasificacionRepository} from '../repositories';

export class ArcMasterClasificacionController {
  constructor(
    @repository(ArcMasterClasificacionRepository)
    public arcMasterClasificacionRepository : ArcMasterClasificacionRepository,
  ) {}

  @post('/arc-master-clasificacions', {
    responses: {
      '200': {
        description: 'ArcMasterClasificacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(ArcMasterClasificacion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcMasterClasificacion, {
            title: 'NewArcMasterClasificacion',
            exclude: ['idMasterClasificacion'],
          }),
        },
      },
    })
    arcMasterClasificacion: Omit<ArcMasterClasificacion, 'idMasterClasificacion'>,
  ): Promise<ArcMasterClasificacion> {
    return this.arcMasterClasificacionRepository.create(arcMasterClasificacion);
  }

  @get('/arc-master-clasificacions/count', {
    responses: {
      '200': {
        description: 'ArcMasterClasificacion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ArcMasterClasificacion) where?: Where<ArcMasterClasificacion>,
  ): Promise<Count> {
    return this.arcMasterClasificacionRepository.count(where);
  }

  @get('/arc-master-clasificacions', {
    responses: {
      '200': {
        description: 'Array of ArcMasterClasificacion model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ArcMasterClasificacion, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ArcMasterClasificacion) filter?: Filter<ArcMasterClasificacion>,
  ): Promise<ArcMasterClasificacion[]> {
    return this.arcMasterClasificacionRepository.find(filter);
  }

  @patch('/arc-master-clasificacions', {
    responses: {
      '200': {
        description: 'ArcMasterClasificacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcMasterClasificacion, {partial: true}),
        },
      },
    })
    arcMasterClasificacion: ArcMasterClasificacion,
    @param.where(ArcMasterClasificacion) where?: Where<ArcMasterClasificacion>,
  ): Promise<Count> {
    return this.arcMasterClasificacionRepository.updateAll(arcMasterClasificacion, where);
  }

  @get('/arc-master-clasificacions/{id}', {
    responses: {
      '200': {
        description: 'ArcMasterClasificacion model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ArcMasterClasificacion, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ArcMasterClasificacion, {exclude: 'where'}) filter?: FilterExcludingWhere<ArcMasterClasificacion>
  ): Promise<ArcMasterClasificacion> {
    return this.arcMasterClasificacionRepository.findById(id, filter);
  }

  @patch('/arc-master-clasificacions/{id}', {
    responses: {
      '204': {
        description: 'ArcMasterClasificacion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcMasterClasificacion, {partial: true}),
        },
      },
    })
    arcMasterClasificacion: ArcMasterClasificacion,
  ): Promise<void> {
    await this.arcMasterClasificacionRepository.updateById(id, arcMasterClasificacion);
  }

  @put('/arc-master-clasificacions/{id}', {
    responses: {
      '204': {
        description: 'ArcMasterClasificacion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() arcMasterClasificacion: ArcMasterClasificacion,
  ): Promise<void> {
    await this.arcMasterClasificacionRepository.replaceById(id, arcMasterClasificacion);
  }

  @del('/arc-master-clasificacions/{id}', {
    responses: {
      '204': {
        description: 'ArcMasterClasificacion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.arcMasterClasificacionRepository.deleteById(id);
  }
}
