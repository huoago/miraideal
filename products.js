// MiraIdeal - 商品数据库（静态版本，后续可接入API自动更新）
const productsDB = {
  // 按分类组织商品
  celulares: [
    {
      id: "s24ultra",
      name: "Samsung Galaxy S24 Ultra 512GB",
      price: 3899,
      oldPrice: 5299,
      store: "Mercado Libre",
      storeCode: "ML",
      url: "https://www.mercadolibre.com.pe/",
      image: "📱",
      category: "celulares"
    },
    {
      id: "iphone17pro",
      name: "iPhone 17 Pro 256GB",
      price: 6499,
      oldPrice: 7299,
      store: "Falabella",
      storeCode: "FA",
      url: "https://www.falabella.com.pe/",
      image: "📱",
      category: "celulares"
    }
  ],
  
  televisores: [
    {
      id: "lg-oled-c4",
      name: "LG OLED evo C4 55\" 4K Smart TV",
      price: 3499,
      oldPrice: 4899,
      store: "Falabella",
      storeCode: "FA",
      url: "https://www.falabella.com.pe/",
      image: "📺",
      category: "televisores"
    }
  ],

  laptops: [
    {
      id: "lenovo-legion5",
      name: "Lenovo Legion 5 Gaming Laptop RTX 4060",
      price: 4299,
      oldPrice: 5499,
      store: "Ripley",
      storeCode: "RP",
      url: "https://www.ripley.com.pe/",
      image: "💻",
      category: "laptops"
    }
  ],

  hogar: [
    {
      id: "xiaomi-vacuum-x20",
      name: "Xiaomi Robot Vacuum X20+ Aspirador",
      price: 1499,
      oldPrice: 2199,
      store: "Mercado Libre",
      storeCode: "ML",
      url: "https://www.mercadolibre.com.pe/",
      image: "🤖",
      category: "hogar"
    }
  ]
};

// 获取所有商品（扁平化）
function getAllProducts() {
  return Object.values(productsDB).flat();
}

// 按分类获取商品
function getProductsByCategory(category) {
  return productsDB[category] || [];
}

// 按ID获取商品
function getProductById(id) {
  return getAllProducts().find(p => p.id === id);
}

// 搜索商品
function searchProducts(query) {
  const q = query.toLowerCase();
  return getAllProducts().filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q)
  );
}
