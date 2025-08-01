import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './Usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
    AuthModule,
    LocationsModule,
    UsuarioModule,  // Certifique-se de que UsuarioModule está correto
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
