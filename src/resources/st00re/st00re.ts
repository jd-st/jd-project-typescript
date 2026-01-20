// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrdersAPI from './orders';
import { OrderCreateParams, Orders } from './orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class St00re extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);

  /**
   * Returns a map of status codes to quantities
   *
   * @example
   * ```ts
   * const response = await client.st00re.listInventory();
   * ```
   */
  listInventory(options?: RequestOptions): APIPromise<St00reListInventoryResponse> {
    return this._client.get('/st00re/inventory', options);
  }
}

export type St00reListInventoryResponse = { [key: string]: number };

St00re.Orders = Orders;

export declare namespace St00re {
  export { type St00reListInventoryResponse as St00reListInventoryResponse };

  export { Orders as Orders, type OrderCreateParams as OrderCreateParams };
}
