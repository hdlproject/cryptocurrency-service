import axios, {AxiosInstance} from 'axios';

import {ExchangeInfo} from "./cryptocurrency.model";

export class CryptocurrencyModelProvider {
    private httpClient: AxiosInstance;

    constructor(baseUrl: string) {
        this.httpClient = axios.create({
            baseURL: baseUrl
        })
    }

    async getExchangeInfo(): Promise<ExchangeInfo> {
        const exchangeInfo = await this.httpClient.get('/api/v3/exchangeInfo');
        return exchangeInfo.data as ExchangeInfo
    }
}
