import express from 'express';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';
import dotenv from 'dotenv';

import {CommonRoutesConfig} from './common/common.routes.config';
import {CryptocurrencyRoutesConfig} from './cryptocurrency/cryptocurrency.routes.config';
import {CryptocurrencyController} from "./cryptocurrency/cryptocurrency.controller";
import {CryptocurrencyService} from "./cryptocurrency/cryptocurrency.service";
import {CryptocurrencyModelProvider} from "./cryptocurrency/cryptocurrency.model.provider";

dotenv.config()

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());

app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({all: true})
    ),
};
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
app.use(expressWinston.logger(loggerOptions));

const cryptocurrencyModelProvider = new CryptocurrencyModelProvider(process.env.BINANCE_API_URL || '')
const cryptocurrencyService = new CryptocurrencyService(cryptocurrencyModelProvider)
const cryptocurrencyController = new CryptocurrencyController(cryptocurrencyService)
routes.push(new CryptocurrencyRoutesConfig(app, cryptocurrencyController));

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });

    // tslint:disable-next-line:no-console
    console.log(runningMessage);
});
