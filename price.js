// api/price.js - 获取商品价格API
// Vercel Serverless Function

// 模拟商品数据库（后续可以换成真实数据库，比如Vercel KV / Supabase）
let products = [
  {
    id: "s24ultra",
    name: "Samsung Galaxy S24 Ultra 512GB",
    price: 3899,
    oldPrice: 5299,
    store: "Mercado Libre",
    storeCode: "ML",
    lastUpdated: new Date().toISOString(),
    history: [
      { date: "2026-10-10", price: 4199 },
      { date: "2026-10-15", price: 3999 },
      { date: "2026-10-18", price: 3899 }
    ]
  },
  {
    id: "lg-oled-c4",
    name: "LG OLED evo C4 55\" 4K Smart TV",
    price: 3499,
    oldPrice: 4899,
    store: "Falabella",
    storeCode: "FA",
    lastUpdated: new Date().toISOString(),
    history: [
      { date: "2026-10-10", price: 3799 },
      { date: "2026-10-15", price: 3599 },
      { date: "2026-10-18", price: 3499 }
    ]
  },
  {
    id: "lenovo-legion5",
    name: "Lenovo Legion 5 Gaming Laptop RTX 4060",
    price: 4299,
    oldPrice: 5499,
    store: "Ripley",
    storeCode: "RP",
    lastUpdated: new Date().toISOString(),
    history: [
      { date: "2026-10-10", price: 4599 },
      { date: "2026-10-15", price: 4399 },
      { date: "2026-10-18", price: 4299 }
    ]
  },
  {
    id: "xiaomi-vacuum-x20",
    name: "Xiaomi Robot Vacuum X20+ Aspirador",
    price: 1499,
    oldPrice: 2199,
    store: "Mercado Libre",
    storeCode: "ML",
    lastUpdated: new Date().toISOString(),
    history: [
      { date: "2026-10-10", price: 1699 },
      { date: "2026-10-15", price: 1599 },
      { date: "2026-10-18", price: 1499 }
    ]
  }
];

export default async function handler(req, res) {
  // 设置CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  // 返回所有商品价格
  res.status(200).json({
    success: true,
    data: products,
    lastUpdated: new Date().toISOString()
  });
}
