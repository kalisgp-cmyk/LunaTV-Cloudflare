addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  if (url.pathname === '/api/get-m3u8') {
    // 假设这里从一个外部源获取 M3U8 文件的链接
    const m3u8_url = 'https://example.com/path/to/your.m3u8'
    
    // 你可以在这里增加广告过滤或其他逻辑
    return new Response(JSON.stringify({ m3u8_url }), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
  
  return new Response('Not Found', { status: 404 })
}
