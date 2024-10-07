// Enum for order types
enum OrderType {
  MARKET = "MARKET",
  LIMIT = "LIMIT",
}

// Enum for order side
enum OrderSide {
  BUY = "BUY",
  SELL = "SELL",
}

// Enum for order status
enum OrderStatus {
  PENDING = "PENDING",
  PARTIALLY_FILLED = "PARTIALLY_FILLED",
  FILLED = "FILLED",
  CANCELLED = "CANCELLED",
}

// Interface for base order properties
interface IOrder {
  id: string;
  userId: string;
  symbol: string;
  side: OrderSide;
  type: OrderType;
  quantity: number;
  filledQuantity: number;
  timestamp: Date;
  status: OrderStatus;
}

// Interface specifically for limit orders
interface ILimitOrder extends IOrder {
  type: OrderType.LIMIT;
  price: number;
}

// Interface specifically for market orders
interface IMarketOrder extends IOrder {
  type: OrderType.MARKET;
}

// Interface for order book level (price level)
interface IOrderBookLevel {
  price: number;
  quantity: number;
  orders: ILimitOrder[];
}

// Interface for the entire order book
interface IOrderBook {
  symbol: string;
  bids: IOrderBookLevel[]; // Sorted in descending order by price
  asks: IOrderBookLevel[]; // Sorted in ascending order by price
}

// Interface for trade/execution
interface ITrade {
  id: string;
  symbol: string;
  price: number;
  quantity: number;
  makerOrderId: string;
  takerOrderId: string;
  timestamp: Date;
}
