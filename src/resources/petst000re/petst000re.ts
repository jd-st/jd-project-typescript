// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrdersAPI from './orders';
import { OrderCreateParams, Orders } from './orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Petst000re extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);

  /**
   * Returns a map of status codes to quantities
   *
   * @example
   * ```ts
   * const response = await client.petst000re.listInventory();
   * ```
   */
  listInventory(options?: RequestOptions): APIPromise<Petst000reListInventoryResponse> {
    return this._client.get('/petst000re/inventory', options);
  }
}

export type Petst000reListInventoryResponse = { [key: string]: number };

Petst000re.Orders = Orders;

export declare namespace Petst000re {
  export { type Petst000reListInventoryResponse as Petst000reListInventoryResponse };

  export { Orders as Orders, type OrderCreateParams as OrderCreateParams };
}
