// api/update-prices.js - 定时更新价格的爬虫函数
// Vercel Cron Job 每天自动调用这个函数

export default async function handler(req, res) {
  // 验证是否是Vercel Cron调用（防止外部恶意触发）
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  console.log('开始更新价格...');

  try {
    // TODO: 这里写真实的爬虫逻辑
    // 示例：抓取Falabella价格
    // const falabellaPrice = await scrapeFalabella('product-url');
    
    // 示例：抓取Mercado Libre价格
    // const mlPrice = await scrapeMercadoLibre('product-url');
    
    // 现在先模拟价格更新（随机波动±5%）
    const products = [
      { id: "s24ultra", price: 3899 * (0.95 + Math.random() * 0.1) },
      { id: "lg-oled-c4", price: 3499 * (0.95 + Math.random() * 0.1) },
      { id: "lenovo-legion5", price: 4299 * (0.95 + Math.random() * 0.1) },
      { id: "xiaomi-vacuum-x20", price: 1499 * (0.95 + Math.random() * 0.1) },
    ];

    // TODO: 把更新后的价格存入数据库（Vercel KV / Supabase）
    // await kv.set('products', JSON.stringify(updatedProducts));

    console.log('价格更新完成:', products);

    res.status(200).json({
      success: true,
      message: '价格更新完成',
      updatedAt: new Date().toISOString(),
      products: products.map(p => ({
        ...p,
        price: Math.round(p.price)
      }))
    });

  } catch (error) {
    console.error('价格更新失败:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
