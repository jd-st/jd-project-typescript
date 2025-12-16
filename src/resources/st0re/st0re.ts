// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrdersAPI from './orders';
import { OrderCreateParams, Orders } from './orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class St0re extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);

  /**
   * Returns a map of status codes to quantities
   *
   * @example
   * ```ts
   * const response = await client.st0re.listInventory();
   * ```
   */
  listInventory(options?: RequestOptions): APIPromise<St0reListInventoryResponse> {
    return this._client.get('/st0re/inventory', options);
  }
}

export type St0reListInventoryResponse = { [key: string]: number };

St0re.Orders = Orders;

export declare namespace St0re {
  export { type St0reListInventoryResponse as St0reListInventoryResponse };

  export { Orders as Orders, type OrderCreateParams as OrderCreateParams };
}
