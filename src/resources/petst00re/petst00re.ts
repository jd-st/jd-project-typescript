// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrdersAPI from './orders';
import { OrderCreateParams, Orders } from './orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Petst00re extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);

  /**
   * Returns a map of status codes to quantities
   *
   * @example
   * ```ts
   * const response = await client.petst00re.listInventory();
   * ```
   */
  listInventory(options?: RequestOptions): APIPromise<Petst00reListInventoryResponse> {
    return this._client.get('/petst00re/inventory', options);
  }
}

export type Petst00reListInventoryResponse = { [key: string]: number };

Petst00re.Orders = Orders;

export declare namespace Petst00re {
  export { type Petst00reListInventoryResponse as Petst00reListInventoryResponse };

  export { Orders as Orders, type OrderCreateParams as OrderCreateParams };
}
