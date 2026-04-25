window.onload = function () {
  const videoPlayer = document.getElementById('video');
  
  // 通过调用 Worker API 获取 M3U8 文件的链接
  fetch('/api/get-m3u8')
    .then(response => response.json())
    .then(data => {
      videoPlayer.src = data.m3u8_url;
    })
    .catch(err => console.error('Failed to fetch M3U8 link:', err));
}
