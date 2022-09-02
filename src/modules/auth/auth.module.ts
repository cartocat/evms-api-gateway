import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_CLIENT',
        transport: Transport.TCP,
        options: {
          host: process.env.MICROSERVICE_TCP_HOST,
          port: process.env.EVMS_USER_SERVICE_PORT as unknown as number,
        },
      },
    ]),
  ],
})
export class AuthModule {}
