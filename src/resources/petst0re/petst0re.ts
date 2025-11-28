// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrdersAPI from './orders';
import { OrderCreateParams, Orders } from './orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Petst0re extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);

  /**
   * Returns a map of status codes to quantities
   *
   * @example
   * ```ts
   * const response = await client.petst0re.listInventory();
   * ```
   */
  listInventory(options?: RequestOptions): APIPromise<Petst0reListInventoryResponse> {
    return this._client.get('/petst0re/inventory', options);
  }
}

export type Petst0reListInventoryResponse = { [key: string]: number };

Petst0re.Orders = Orders;

export declare namespace Petst0re {
  export { type Petst0reListInventoryResponse as Petst0reListInventoryResponse };

  export { Orders as Orders, type OrderCreateParams as OrderCreateParams };
}
