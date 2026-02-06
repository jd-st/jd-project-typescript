// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrdersAPI from './orders';
import { OrderCreateParams, Orders } from './orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class St00000re extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);

  /**
   * Returns a map of status codes to quantities
   *
   * @example
   * ```ts
   * const response = await client.st00000re.listInventory();
   * ```
   */
  listInventory(options?: RequestOptions): APIPromise<St00000reListInventoryResponse> {
    return this._client.get('/st00000re/inventory', options);
  }
}

export type St00000reListInventoryResponse = { [key: string]: number };

St00000re.Orders = Orders;

export declare namespace St00000re {
  export { type St00000reListInventoryResponse as St00000reListInventoryResponse };

  export { Orders as Orders, type OrderCreateParams as OrderCreateParams };
}
