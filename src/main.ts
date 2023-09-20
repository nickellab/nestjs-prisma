import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule } from '@nestjs/swagger'
import { readFileSync } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  try {
    execSync('pnpm nestia swagger')
    const docs = JSON.parse(readFileSync(join(__dirname, '../../schema/swagger.json'), 'utf-8'))
    SwaggerModule.setup('api', app, docs)
  } catch (e) {
    console.log(e)
  }

  await app.listen(3001)
}
bootstrap()
