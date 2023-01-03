```bash
# create workspaces
nest g app admin

# start
nest start -w admin
```

```bash
# install typegoose
yarn add nestjs-typegoose @typegoose/typegoose

# install mongoose
yarn add mongoose @types/mongoose

# create lib
nest g lib db
```

```js
// connect database
// @libs\db\src\db.module.ts
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/vue-elementplus-admin', {}),
  ],
})

# @apps\admin\src\admin.module.ts
import { DbModule } from 'libs/db/src';

@Module({
  imports: [DbModule],
})
```

```js
// create models
// @libs\db\src → md \models → >user.model.ts
import { prop } from '@typegoose/typegoose';

export class User {
  @prop()
  username: string;

  @prop()
  password: string;
}

// @libs\db\src\db.module.ts
import { User } from './models/user.model';

const models = TypegooseModule.forFeature([User]);

@Module({
  imports: [
    models,
  ],
  exports: [models],
})
```

```bash
# create module
nest g mo -p admin users
nest g co -p admin users

# install TPPS
yarn add nestjs-mongoose-crud

# install swagger
yarn add @nestjs/swagger swagger-ui-express
```

```js
// @apps\admin\src\main.ts
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```
