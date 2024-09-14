export default defineAppConfig({
  title: 'AprendaNaWeb',
  description: 'Um Simples / Rápido / Seguro Link Shortener com Analytics, 100% rodando na Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
