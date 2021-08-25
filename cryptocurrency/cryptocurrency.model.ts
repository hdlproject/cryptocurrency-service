export interface SymbolToken {
    symbol: string;
    status: string;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quotePrecision: number;
    quoteAssetPrecision: number;
    orderTypes: string[];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: any[];
    permissions: string[];
}

export interface ExchangeInfo {
    timezone: string;
    serverTime: number;
    rateLimits: {};
    exchangeFilters: any[];
    symbols: SymbolToken[];
}
