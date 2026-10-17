// ===== MiraIdeal - 多语言切换 =====
const translations = {
  es: {
    searchPlaceholder: "Busca productos, marcas o tiendas...",
    navHome: "首页",
    navDeals: "好价",
    navGuides: "指南文章",
    navBlackFriday: "黑五",
    hotRecommended: "🔥 热门推荐",
    allCategories: "🏷️ 全部分类",
    dealsToday: "⚡ 今日好价",
    guidesTitle: "📚 选购指南和评测",
    newsletterTitle: "📬 Recibe las mejores ofertas",
    newsletterDesc: "Te enviamos solo las ofertas que realmente valen la pena, una vez a la semana. Sin spam.",
    subscribeBtn: "Suscribirme",
    verOferta: "Ver oferta →",
  },
  en: {
    searchPlaceholder: "Search products, brands or stores...",
    navHome: "Home",
    navDeals: "Deals",
    navGuides: "Buying Guides",
    navBlackFriday: "Black Friday",
    hotRecommended: "🔥 Hot Picks",
    allCategories: "🏷️ All Categories",
    dealsToday: "⚡ Today's Best Deals",
    guidesTitle: "📚 Buying Guides & Reviews",
    newsletterTitle: "📬 Get the best deals",
    newsletterDesc: "We only send deals that are actually worth it, once a week. No spam.",
    subscribeBtn: "Subscribe",
    verOferta: "View deal →",
  },
  zh: {
    searchPlaceholder: "搜索商品、品牌或商店...",
    navHome: "首页",
    navDeals: "好价",
    navGuides: "选购指南",
    navBlackFriday: "黑五",
    hotRecommended: "🔥 热门推荐",
    allCategories: "🏷️ 全部分类",
    dealsToday: "⚡ 今日好价",
    guidesTitle: "📚 选购指南和评测",
    newsletterTitle: "📬 订阅最佳优惠",
    newsletterDesc: "每周只发真正值得买的优惠，不发垃圾邮件。",
    subscribeBtn: "立即订阅",
    verOferta: "查看优惠 →",
  }
};

let currentLang = localStorage.getItem('preferredLang') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  const t = translations[lang];
  
  // 翻译所有带data-i18n属性的元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
  // 翻译placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
  
  // 更新语言切换按钮状态
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

// 初始化语言
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  
  // 绑定语言切换按钮
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
