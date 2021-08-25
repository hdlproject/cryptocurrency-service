import {CryptocurrencyService} from "./cryptocurrency.service";

export class CryptocurrencyController {
    private cryptocurrencyService: CryptocurrencyService;

    constructor(cryptocurrencyService: CryptocurrencyService) {
        this.cryptocurrencyService = cryptocurrencyService
    }

    async getExchangeInfo() {
        await this.cryptocurrencyService.getExchangeInfo()
    }
}
