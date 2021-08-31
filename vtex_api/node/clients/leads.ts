import type { InstanceOptions, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import { IOContext } from '@vtex/api/lib/service/worker/runtime/typings'

export default class Leads extends ExternalClient {
  private routes = {
    leads: '/listall'
  }
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://elipn6vbv9.execute-api.sa-east-1.amazonaws.com', context, options)
  }

  public async getLeads(): Promise<string> {
    return this.http.get(this.routes.leads, {
      metric: 'leads-get',
    })
  }

  // public async postLeads(lead: Lead): Promise<string> {
  //   return this.http.post(this.routes.leads, lead, {
  //     metric: 'leads-post',
  //   })
  // }

  public async getLeadsWithHeaders(): Promise<IOResponse<string>> {
    return this.http.getRaw(this.routes.leads, {
      metric: 'leads-get-ram',
    })
  }

}
