import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.PORTFOLIO_DB_HOST,
			port: +process.env.PORTFOLIO_DB_PORT,
			database: process.env.PORTFOLIO_DB,
			username: process.env.PORTFOLIO_DB_USER,
			password: process.env.PORTFOLIO_DB_PASSWORD
		})
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
