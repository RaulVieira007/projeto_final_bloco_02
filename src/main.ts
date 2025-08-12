import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const theme = new SwaggerTheme();

  const config = new DocumentBuilder()
    .setTitle("Projeto DrogaLisa")
    .setDescription("Projeto Final Bloco 2 Generation - Brasil")
    .setContact('Raul da Silva Vieira', 'https://github.com/RaulVieira007', 'raul.vieiras2001@gmail.com')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config);

  const options = {
    customSiteTitle: "DrogaLisa",
    customCss: theme.getBuffer(SwaggerThemeNameEnum.DRACULA)
  }

  SwaggerModule.setup("/swagger", app, document, options);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();