import express from 'express';
import {CommonRoutesConfig} from "../common/common.routes.config";
import {CryptocurrencyController} from "./cryptocurrency.controller";

export class CryptocurrencyRoutesConfig extends CommonRoutesConfig {
    private cryptocurrencyController: CryptocurrencyController;

    constructor(app: express.Application, cryptocurrencyController: CryptocurrencyController) {
        super(app, 'CryptocurrencyRoutes');
        this.cryptocurrencyController = cryptocurrencyController
    }

    configureRoutes() {
        this.app.route(`/cryptocurrency/exchangeInfo`)
            .get(async (req: express.Request, res: express.Response) => {
                const exchangeIndo = await this.cryptocurrencyController.getExchangeInfo()

                res.status(200).send(exchangeIndo);
            })

        return this.app;
    }
}
