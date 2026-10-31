// price vem do Postgres como string (decimal) — converte pra number na saída da API
export function normalizeService(service) {
    if (!service) return service
    return { ...service, price: Number(service.price) }
}