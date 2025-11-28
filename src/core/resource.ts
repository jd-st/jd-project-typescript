// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { JdProject } from '../client';

export abstract class APIResource {
  protected _client: JdProject;

  constructor(client: JdProject) {
    this._client = client;
  }
}
