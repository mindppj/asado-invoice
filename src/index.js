export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // ถ้าเป็น root หรือ / ให้ return index.html
    let path = url.pathname;
    if (path === '/' || path === '') {
      path = '/index.html';
    }
    
    // fetch ไฟล์จาก public folder
    const response = await fetch(`https://${url.host}${path}`, request);
    return response;
  }
};
