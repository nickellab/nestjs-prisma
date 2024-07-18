import { INestiaConfig } from '@nestia/sdk'

const config: INestiaConfig = {
  input: {
    include: ['src/**/*.controller.ts'],
  },
  swagger: {
    output: 'schema/api-service-.json',
    servers: [
      {
        url: `http://localhost:${process.env.PORT ?? 3001}`,
      },
    ],
    decompose: true,
  },
}
export default config
