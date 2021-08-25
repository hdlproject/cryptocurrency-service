import axios, {AxiosInstance} from 'axios';

export class CryptocurrencyModelProvider {
    private httpClient: AxiosInstance;

    constructor(baseUrl: string) {
        this.httpClient = axios.create({
            baseURL: baseUrl
        })
    }

    async getExchangeInfo() {
        const exchangeInfo = await this.httpClient.get('/api/v3/exchangeInfo');
        console.log(typeof exchangeInfo)
    }
}
