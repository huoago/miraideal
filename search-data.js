// MiraIdeal - 文章搜索索引
const articlesIndex = [
  {
    title: "Black Friday 2026 Perú: Guía completa de ofertas y fechas",
    description: "Todo lo que necesitas saber sobre el Black Friday peruano: fechas, tiendas participantes, categorías con mejores descuentos.",
    url: "black-friday-2026-peru.html",
    category: "Black Friday"
  },
  {
    title: "iPhone 17 Pro: ¿Dónde comprarlo más barato en Perú?",
    description: "Comparamos precios en Mercado Libre, Falabella, Ripley y tiendas oficiales. Incluye costo total con envío e impuestos.",
    url: "iphone-17-donde-comprar.html",
    category: "Celulares"
  },
  {
    title: "Mejores laptops por S/ 2000 en 2026",
    description: "Ranking de las mejores laptops calidad-precio para estudio y trabajo. Lenovo, HP, Asus y Dell comparadas.",
    url: "mejores-laptops-2000-soles.html",
    category: "Laptops"
  },
  {
    title: "TCL vs Samsung vs LG: ¿Qué TV conviene?",
    description: "Comparativa de las marcas de TV más vendidas en Perú. Calidad de imagen, precio, garantía y cuál elegir.",
    url: "tcl-vs-samsung-lg-tv.html",
    category: "Televisores"
  },
  {
    title: "Mejores aspiradoras robot en Perú 2026",
    description: "Xiaomi, Roborock y más. Cuál comprar según tu presupuesto y tamaño de departamento.",
    url: "mejores-aspiradoras-robot.html",
    category: "Hogar"
  },
  {
    title: "Mejores audífonos Bluetooth calidad-precio",
    description: "Los mejores TWS en Perú por menos de S/ 300. Sony, JBL, Redmi y Soundcore comparados.",
    url: "mejores-audifonos-bluetooth.html",
    category: "Audio"
  },
  {
    title: "Freidora de aire: ¿Vale la pena comprar una?",
    description: "Guía completa: qué capacidad necesitas, qué marcas comprar y cuánto deberías pagar en Perú.",
    url: "mejores-freidoras-aire.html",
    category: "Cocina"
  },
  {
    title: "Qué celular comprar por menos de S/ 1500",
    description: "Los mejores celulares gama media-baja en Perú. Samsung, Xiaomi, Motorola comparados.",
    url: "celulares-menos-1500-soles.html",
    category: "Celulares"
  },
  {
    title: "Cámaras de seguridad para casa: Guía 2026",
    description: "Xiaomi, TP-Link, EZVIZ. Qué características buscar y cuáles son las mejores opciones en Perú.",
    url: "camaras-seguridad-casa.html",
    category: "Seguridad"
  },
  {
    title: "Mejores tablets para estudiar en Perú",
    description: "Galaxy Tab, iPad, Xiaomi Pad. Cuál conviene para tomar apuntes y clases online.",
    url: "mejores-tablets-estudiar.html",
    category: "Tablets"
  },
  {
    title: "Smartwatch: ¿Cuál comprar en Perú?",
    description: "Por rango de precio: desde Xiaomi hasta Apple Watch. Cuál vale la pena según tu uso.",
    url: "mejores-smartwatch-peru.html",
    category: "Wearables"
  },
  {
    title: "Aire Acondicionado: Split vs Portátil",
    description: "Cuál conviene según tu caso. Comparativa de precio, consumo y potencia de enfriamiento.",
    url: "aire-acondicionado-split-vs-portatil.html",
    category: "Hogar"
  }
];

// 搜索功能
function searchArticles(query) {
  if (!query) return [];
  const q = query.toLowerCase().trim();
  return articlesIndex.filter(article => 
    article.title.toLowerCase().includes(q) || 
    article.description.toLowerCase().includes(q) ||
    article.category.toLowerCase().includes(q)
  );
}

// 渲染搜索结果
function renderSearchResults(results, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (results.length === 0) {
    container.innerHTML = '<p style="text-align:center; padding: 40px; color: var(--gray);">No se encontraron resultados. Intenta con otras palabras.</p>';
    return;
  }
  
  container.innerHTML = results.map(article => `
    <article class="articulo-card">
      <div class="articulo-body">
        <span class="articulo-tag">${article.category}</span>
        <h3><a href="${article.url}">${article.title}</a></h3>
        <p class="articulo-excerpt">${article.description}</p>
      </div>
    </article>
  `).join('');
}
