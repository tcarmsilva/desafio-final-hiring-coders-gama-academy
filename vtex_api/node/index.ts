import type { ClientsConfig, ServiceContext, RecorderState } from '@vtex/api/lib/service/worker/runtime/typings';
import { LRUCache, method, Service } from '@vtex/api';

import { Clients } from './clients'
import { leads } from './middlewares/listLeads';
const TIMEOUT_MS = 800

const memoryCache = new LRUCache<string, any>({ max: 5000 })

metrics.trackCache('leads', memoryCache)

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    leads: {
      memoryCache,
    },
  },
}

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    code: number
  }
}

export default new Service({
  clients,
  routes: {
    leads: method({
      GET: [leads],
    }),
  },
})
