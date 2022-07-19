import { AbsCoinData, IAbsCoinDataOptions } from './AbsCoinData';
import { Erc20CoinData } from './Erc20CoinData';

export interface ICoinDataOptions extends IAbsCoinDataOptions {
  customCoinIndex: string;
  coinIndex: string;
  fees: string;
  tokenList?: Record<string, Erc20CoinData>;
}

export class CoinData extends AbsCoinData {
  // Custom coin index will be sent to device while adding coins
  public customCoinIndex: string;
  // The actual coin index for caculation purposes
  public coinIndex: string;
  public fees: string;
  public tokenList: Record<string, Erc20CoinData> = {};

  constructor(coinData: ICoinDataOptions) {
    super(coinData);

    this.customCoinIndex = coinData.customCoinIndex;
    this.coinIndex = coinData.coinIndex;
    this.fees = coinData.fees;
    this.tokenList = coinData.tokenList ? coinData.tokenList : {};
  }
}
