import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule } from '@nestjs/swagger'
import { readFileSync } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  if (process.env.NODE_ENV === 'development') {
    try {
      execSync('pnpm nestia swagger')
      const docs = JSON.parse(readFileSync(join(__dirname, '../../schema/openapi.json'), 'utf-8'))
      SwaggerModule.setup('api', app, docs)
    } catch (e) {
      console.log(e)
    }
  }

  await app.listen(3001)
}
bootstrap()
