import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestExpressApplication } from '@nestjs/platform-express';
import express = require('express');
import ejs = require('ejs');
import serverless from 'serverless-http';
import { AppModule } from '../src/app.module';

let cachedHandler: ReturnType<typeof serverless> | null = null;

async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  app.useStaticAssets(join(process.cwd(), 'src', 'public'));
  app.setBaseViewsDir(join(process.cwd(), 'src', 'views'));
  // Explicitly register EJS so Vercel file tracing includes the package.
  app.engine('ejs', (ejs as any).__express);
  app.setViewEngine('ejs');

  await app.init();

  return serverless(expressApp);
}

export default async function handler(req: any, res: any) {
  if (!cachedHandler) {
    cachedHandler = await bootstrap();
  }

  return cachedHandler(req, res);
}
