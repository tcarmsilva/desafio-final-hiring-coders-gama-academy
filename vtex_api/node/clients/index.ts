import { IOClients } from '@vtex/api';

import Leads from './leads';

export class  Clients extends IOClients {
  public get listLeads() {
    return this.getOrSet('listLeads', Leads)
  }
}
