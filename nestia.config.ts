import { INestiaConfig } from '@nestia/sdk'

const config: INestiaConfig = {
  input: {
    include: ['src/**/*.controller.ts'],
  },
  swagger: {
    output: 'schema/openapi.json',
    servers: [
      {
        url: 'http://localhost:3011',
      },
    ],
  },
}
export default config
