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
import {ArcDocumento} from '../models';
import {ArcDocumentoRepository} from '../repositories';

export class ArcDocumentoController {
  constructor(
    @repository(ArcDocumentoRepository)
    public arcDocumentoRepository : ArcDocumentoRepository,
  ) {}

  @post('/arc-documentos', {
    responses: {
      '200': {
        description: 'ArcDocumento model instance',
        content: {'application/json': {schema: getModelSchemaRef(ArcDocumento)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcDocumento, {
            title: 'NewArcDocumento',
            exclude: ['idDocumento'],
          }),
        },
      },
    })
    arcDocumento: Omit<ArcDocumento, 'idDocumento'>,
  ): Promise<ArcDocumento> {
    return this.arcDocumentoRepository.create(arcDocumento);
  }

  @get('/arc-documentos/count', {
    responses: {
      '200': {
        description: 'ArcDocumento model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ArcDocumento) where?: Where<ArcDocumento>,
  ): Promise<Count> {
    return this.arcDocumentoRepository.count(where);
  }

  @get('/arc-documentos', {
    responses: {
      '200': {
        description: 'Array of ArcDocumento model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ArcDocumento, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ArcDocumento) filter?: Filter<ArcDocumento>,
  ): Promise<ArcDocumento[]> {
    return this.arcDocumentoRepository.find(filter);
  }

  @patch('/arc-documentos', {
    responses: {
      '200': {
        description: 'ArcDocumento PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcDocumento, {partial: true}),
        },
      },
    })
    arcDocumento: ArcDocumento,
    @param.where(ArcDocumento) where?: Where<ArcDocumento>,
  ): Promise<Count> {
    return this.arcDocumentoRepository.updateAll(arcDocumento, where);
  }

  @get('/arc-documentos/{id}', {
    responses: {
      '200': {
        description: 'ArcDocumento model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ArcDocumento, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ArcDocumento, {exclude: 'where'}) filter?: FilterExcludingWhere<ArcDocumento>
  ): Promise<ArcDocumento> {
    return this.arcDocumentoRepository.findById(id, filter);
  }

  @patch('/arc-documentos/{id}', {
    responses: {
      '204': {
        description: 'ArcDocumento PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArcDocumento, {partial: true}),
        },
      },
    })
    arcDocumento: ArcDocumento,
  ): Promise<void> {
    await this.arcDocumentoRepository.updateById(id, arcDocumento);
  }

  @put('/arc-documentos/{id}', {
    responses: {
      '204': {
        description: 'ArcDocumento PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() arcDocumento: ArcDocumento,
  ): Promise<void> {
    await this.arcDocumentoRepository.replaceById(id, arcDocumento);
  }

  @del('/arc-documentos/{id}', {
    responses: {
      '204': {
        description: 'ArcDocumento DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.arcDocumentoRepository.deleteById(id);
  }
}
