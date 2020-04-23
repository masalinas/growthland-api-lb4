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
import {GenFormatoPublicacion} from '../models';
import {GenFormatoPublicacionRepository} from '../repositories';

export class GenFormatoPublicacionController {
  constructor(
    @repository(GenFormatoPublicacionRepository)
    public genFormatoPublicacionRepository : GenFormatoPublicacionRepository,
  ) {}

  @post('/gen-formato-publicacions', {
    responses: {
      '200': {
        description: 'GenFormatoPublicacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(GenFormatoPublicacion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenFormatoPublicacion, {
            title: 'NewGenFormatoPublicacion',
            exclude: ['idFormatoPublicacion'],
          }),
        },
      },
    })
    genFormatoPublicacion: Omit<GenFormatoPublicacion, 'idFormatoPublicacion'>,
  ): Promise<GenFormatoPublicacion> {
    return this.genFormatoPublicacionRepository.create(genFormatoPublicacion);
  }

  @get('/gen-formato-publicacions/count', {
    responses: {
      '200': {
        description: 'GenFormatoPublicacion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(GenFormatoPublicacion) where?: Where<GenFormatoPublicacion>,
  ): Promise<Count> {
    return this.genFormatoPublicacionRepository.count(where);
  }

  @get('/gen-formato-publicacions', {
    responses: {
      '200': {
        description: 'Array of GenFormatoPublicacion model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GenFormatoPublicacion, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(GenFormatoPublicacion) filter?: Filter<GenFormatoPublicacion>,
  ): Promise<GenFormatoPublicacion[]> {
    return this.genFormatoPublicacionRepository.find(filter);
  }

  @patch('/gen-formato-publicacions', {
    responses: {
      '200': {
        description: 'GenFormatoPublicacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenFormatoPublicacion, {partial: true}),
        },
      },
    })
    genFormatoPublicacion: GenFormatoPublicacion,
    @param.where(GenFormatoPublicacion) where?: Where<GenFormatoPublicacion>,
  ): Promise<Count> {
    return this.genFormatoPublicacionRepository.updateAll(genFormatoPublicacion, where);
  }

  @get('/gen-formato-publicacions/{id}', {
    responses: {
      '200': {
        description: 'GenFormatoPublicacion model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(GenFormatoPublicacion, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GenFormatoPublicacion, {exclude: 'where'}) filter?: FilterExcludingWhere<GenFormatoPublicacion>
  ): Promise<GenFormatoPublicacion> {
    return this.genFormatoPublicacionRepository.findById(id, filter);
  }

  @patch('/gen-formato-publicacions/{id}', {
    responses: {
      '204': {
        description: 'GenFormatoPublicacion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenFormatoPublicacion, {partial: true}),
        },
      },
    })
    genFormatoPublicacion: GenFormatoPublicacion,
  ): Promise<void> {
    await this.genFormatoPublicacionRepository.updateById(id, genFormatoPublicacion);
  }

  @put('/gen-formato-publicacions/{id}', {
    responses: {
      '204': {
        description: 'GenFormatoPublicacion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() genFormatoPublicacion: GenFormatoPublicacion,
  ): Promise<void> {
    await this.genFormatoPublicacionRepository.replaceById(id, genFormatoPublicacion);
  }

  @del('/gen-formato-publicacions/{id}', {
    responses: {
      '204': {
        description: 'GenFormatoPublicacion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.genFormatoPublicacionRepository.deleteById(id);
  }
}
