import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll(@Res() response) {
    return response.status(200).json({ menssage: 'lista de cursos' })
  }

  @Get(':id')
  findOne(@Param('id') id: String) {
    return `Curso com id ${id}`
  }

  @Post()
  create(@Body() body){
    return body
  }

  @Patch(':id')
  update(@Param('id') id: String, @Body() body) {
    return `Update course Id ${id}`
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: String) {
    return `Delete course Id ${id}`
  }

}
