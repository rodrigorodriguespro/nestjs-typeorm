import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'listagem de cursos'
  }

  @Get(':id')
  findOne(@Param('id') id: String) {
    return `Curso com id ${id}`
  }

  @Post()
  create(@Body() body){
    return body
  }
}
