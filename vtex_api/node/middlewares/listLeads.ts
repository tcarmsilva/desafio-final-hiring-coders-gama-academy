import { Context } from "vm";

export async function leads(ctx: Context, next: () => Promise<any>) {
  const {
    clients: {
      listLeads
    },
  } = ctx

  ctx.set('Cache-Control', 'no-cache, no-store');
  ctx.set('X-VTEX-Use-Https', 'true');
  ctx.set('Proxy-Authorization', 'ctx.authToken');

  const res = await listLeads.getLeads();

  ctx.body = res
  console.log(res);

  await next()
}
