"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgDBConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '.env' });
const dbConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
    migrationsRun: false,
    synchronize: process.env.SYNCHRONIZE === 'true' || true,
    logging: process.env.SYNCHRONIZE === 'true' || false,
    entityPrefix: process.env.ENTITY_PREFIX,
};
exports.pgDBConfig = dbConfig;
//# sourceMappingURL=db.config.js.map