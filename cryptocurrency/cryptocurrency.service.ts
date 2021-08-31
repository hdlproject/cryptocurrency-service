import {CryptocurrencyModelProvider} from "./cryptocurrency.model.provider";

export class CryptocurrencyService {
    private cryptocurrencyModelProvider: CryptocurrencyModelProvider;

    constructor(cryptocurrencyModelProvider: CryptocurrencyModelProvider) {
        this.cryptocurrencyModelProvider = cryptocurrencyModelProvider
    }

    async getExchangeInfo() {
        return this.cryptocurrencyModelProvider.getExchangeInfo()
    }
}
