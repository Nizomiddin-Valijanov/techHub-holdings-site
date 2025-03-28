import type { Language } from "@/providers/language-provider";

// English translations
const en = {
  // Header
  "nav.home": "Home",
  "nav.catalog": "Catalog",
  "nav.about": "About Us",
  "nav.contact": "Contact",
  "nav.login": "Login",
  "nav.register": "Register",
  "nav.search": "Search products...",
  "nav.account": "Account",
  "nav.cart": "Cart",

  // Categories
  // Endi "Marble Tiles" o‘rniga "Soft Towels" deb tarjima qilindi
  "category.marbleTiles": "Soft Towels",
  "category.granite": "Granite",
  "category.constructionMaterials": "Construction Materials",
  "category.tools": "Tools & Equipment",

  // Hero Section
  "hero.title": "Premium soft towels",
  "hero.subtitle":
    "Discover our exclusive collection of high-quality soft towels for your next project",
  "hero.exploreCatalog": "Explore Catalog",
  "hero.contactUs": "Contact Us",

  // Categories Section
  "categories.title": "Product Categories",
  "categories.subtitle": "Browse our wide range of high-quality products",
  "categories.explore": "Explore",
  // Izoh: Oldingi tavsiflar faqat marmar plitalarga tegishli bo'lgan edi
  "categories.marbleDesc": "Premium soft towels for various uses",
  "categories.graniteDesc": "Durable granite for countertops and surfaces",
  "categories.constructionDesc":
    "Quality materials for your construction projects",

  // Featured Products
  "featured.title": "Featured Products",
  "featured.subtitle": "Our most popular soft towels and materials",
  "featured.viewAll": "View All",
  "featured.details": "Details",
  "featured.inStock": "In Stock",
  "featured.outOfStock": "Out of Stock",

  // Testimonials
  "testimonials.title": "What Our Customers Say",
  "testimonials.subtitle": "Read testimonials from our satisfied customers",

  // Footer
  "footer.about":
    "Premium soft towels and construction materials for professionals and homeowners.",
  "footer.quickLinks": "Quick Links",
  "footer.contactUs": "Contact Us",
  "footer.newsletter": "Newsletter",
  "footer.subscribeText":
    "Subscribe to receive updates on new products and special offers.",
  "footer.subscribe": "Subscribe",
  "footer.rights": "All rights reserved.",

  // Catalog
  "catalog.title": "Product Catalog",
  "catalog.subtitle":
    "Browse our collection of premium soft towels and construction materials",
  "catalog.filters": "Filters",
  "catalog.clearAll": "Clear All",
  "catalog.category": "Category",
  "catalog.color": "Color",
  "catalog.thickness": "Thickness",
  "catalog.size": "Size",
  "catalog.priceRange": "Price Range",
  "catalog.availability": "Availability",
  "catalog.inStockOnly": "In Stock Only",
  "catalog.sortBy": "Sort by:",
  "catalog.showing": "Showing",
  "catalog.products": "products",

  // Product Details
  "product.backToCatalog": "Back to Catalog",
  "product.addToCart": "Add to Cart",
  "product.addToWishlist": "Add to Wishlist",
  "product.freeShipping": "Free Shipping",
  "product.onOrdersOver": "On orders over $500",
  "product.qualityGuarantee": "Quality Guarantee",
  "product.moneyBack": "30-day money-back guarantee",
  "product.specifications": "Specifications",
  "product.installation": "Installation Guide",
  "product.reviews": "Reviews",
  "product.relatedProducts": "Related Products",
  "product.viewDetails": "View Details",
  "product.writeReview": "Write a Review",
  "product.customerReviews": "Customer Reviews",
  "product.basedOn": "Based on",
  "product.verifiedPurchase": "Verified Purchase",
  "product.loadMore": "Load More Reviews",
};

// Russian translations
const ru = {
  // Header
  "nav.home": "Главная",
  "nav.catalog": "Каталог",
  "nav.about": "О нас",
  "nav.contact": "Контакты",
  "nav.login": "Войти",
  "nav.register": "Регистрация",
  "nav.search": "Поиск товаров...",
  "nav.account": "Аккаунт",
  "nav.cart": "Корзина",

  // Categories
  // Endi "Мраморная плитка" o‘rniga "Мягкие полотенца" deb tarjima qilindi
  "category.marbleTiles": "Мягкие полотенца",
  "category.granite": "Гранит",
  "category.constructionMaterials": "Строительные материалы",
  "category.tools": "Инструменты и оборудование",

  // Hero Section
  "hero.title": "Премиальные мягкие полотенца",
  "hero.subtitle":
    "Откройте для себя нашу эксклюзивную коллекцию высококачественных мягких полотенец для вашего следующего проекта",
  "hero.exploreCatalog": "Просмотреть каталог",
  "hero.contactUs": "Связаться с нами",

  // Categories Section
  "categories.title": "Категории товаров",
  "categories.subtitle":
    "Ознакомьтесь с нашим широким ассортиментом высококачественных товаров",
  "categories.explore": "Просмотреть",
  "categories.marbleDesc": "Премиальные мягкие полотенца для различных нужд",
  "categories.graniteDesc": "Прочный гранит для столешниц и поверхностей",
  "categories.constructionDesc":
    "Качественные материалы для ваших строительных проектов",

  // Featured Products
  "featured.title": "Популярные товары",
  "featured.subtitle": "Наши самые популярные мягкие полотенца и материалы",
  "featured.viewAll": "Смотреть все",
  "featured.details": "Подробнее",
  "featured.inStock": "В наличии",
  "featured.outOfStock": "Нет в наличии",

  // Testimonials
  "testimonials.title": "Что говорят наши клиенты",
  "testimonials.subtitle": "Прочитайте отзывы наших довольных клиентов",

  // Footer
  "footer.about":
    "Премиальные мягкие полотенца и строительные материалы для профессионалов и домовладельцев.",
  "footer.quickLinks": "Быстрые ссылки",
  "footer.contactUs": "Связаться с нами",
  "footer.newsletter": "Рассылка",
  "footer.subscribeText":
    "Подпишитесь, чтобы получать обновления о новых товарах и специальных предложениях.",
  "footer.subscribe": "Подписаться",
  "footer.rights": "Все права защищены.",

  // Catalog
  "catalog.title": "Каталог товаров",
  "catalog.subtitle":
    "Просмотрите нашу коллекцию премиальных мягких полотенец и строительных материалов",
  "catalog.filters": "Фильтры",
  "catalog.clearAll": "Очистить все",
  "catalog.category": "Категория",
  "catalog.color": "Цвет",
  "catalog.thickness": "Толщина",
  "catalog.size": "Размер",
  "catalog.priceRange": "Ценовой диапазон",
  "catalog.availability": "Наличие",
  "catalog.inStockOnly": "Только в наличии",
  "catalog.sortBy": "Сортировать по:",
  "catalog.showing": "Показано",
  "catalog.products": "товаров",

  // Product Details
  "product.backToCatalog": "Назад в каталог",
  "product.addToCart": "Добавить в корзину",
  "product.addToWishlist": "Добавить в избранное",
  "product.freeShipping": "Бесплатная доставка",
  "product.onOrdersOver": "При заказе от $500",
  "product.qualityGuarantee": "Гарантия качества",
  "product.moneyBack": "30-дневная гарантия возврата денег",
  "product.specifications": "Характеристики",
  "product.installation": "Руководство по установке",
  "product.reviews": "Отзывы",
  "product.relatedProducts": "Похожие товары",
  "product.viewDetails": "Подробнее",
  "product.writeReview": "Написать отзыв",
  "product.customerReviews": "Отзывы клиентов",
  "product.basedOn": "На основе",
  "product.verifiedPurchase": "Подтвержденная покупка",
  "product.loadMore": "Загрузить больше отзывов",
};

// Uzbek translations
const uz = {
  // Header
  "nav.home": "Bosh sahifa",
  "nav.catalog": "Katalog",
  "nav.about": "Biz haqimizda",
  "nav.contact": "Aloqa",
  "nav.login": "Kirish",
  "nav.register": "Ro'yxatdan o'tish",
  "nav.search": "Mahsulotlarni qidirish...",
  "nav.account": "Profil",
  "nav.cart": "Savat",

  // Categories
  // Endi "Marmar plitalar" o‘rniga "Momiq sochiqlar" deb yozilgan
  "category.marbleTiles": "Momiq sochiqlar",
  "category.granite": "Granit",
  "category.constructionMaterials": "Qurilish materiallari",
  "category.tools": "Asboblar va uskunalar",

  // Hero Section
  "hero.title": "Premium momiq sochiqlar",
  "hero.subtitle":
    "Keyingi loyihangiz uchun yuqori sifatli va yumshoq momiq sochiqlar kolleksiyasini kashf eting",
  "hero.exploreCatalog": "Katalogni ko'rish",
  "hero.contactUs": "Biz bilan bog'lanish",

  // Categories Section
  "categories.title": "Mahsulot kategoriyalari",
  "categories.subtitle":
    "Yuqori sifatli mahsulotlarimizning keng assortimentini ko'rib chiqing",
  "categories.explore": "Ko'rish",
  "categories.marbleDesc": "Turli ehtiyojlar uchun premium momiq sochiqlar",
  "categories.graniteDesc": "Oshxona stollari va yuzalar uchun chidamli granit",
  "categories.constructionDesc":
    "Qurilish loyihalaringiz uchun sifatli materiallar",

  // Featured Products
  "featured.title": "Mashhur mahsulotlar",
  "featured.subtitle": "Eng mashhur momiq sochiqlar va materiallarimiz",
  "featured.viewAll": "Hammasini ko'rish",
  "featured.details": "Batafsil",
  "featured.inStock": "Mavjud",
  "featured.outOfStock": "Mavjud emas",

  // Testimonials
  "testimonials.title": "Mijozlarimiz nima deyishadi",
  "testimonials.subtitle": "Mamnun mijozlarimizning sharhlarini o'qing",

  // Footer
  "footer.about":
    "Professionallar va uy egalari uchun premium momiq sochiqlar va qurilish materiallari.",
  "footer.quickLinks": "Tezkor havolalar",
  "footer.contactUs": "Biz bilan bog'lanish",
  "footer.newsletter": "Yangiliklar",
  "footer.subscribeText":
    "Yangi mahsulotlar va maxsus takliflar haqida yangilanishlarni olish uchun obuna bo'ling.",
  "footer.subscribe": "Obuna bo'lish",
  "footer.rights": "Barcha huquqlar himoyalangan.",

  // Catalog
  "catalog.title": "Mahsulot katalogi",
  "catalog.subtitle":
    "Premium momiq sochiqlar va qurilish materiallari kolleksiyamizni ko'rib chiqing",
  "catalog.filters": "Filtrlar",
  "catalog.clearAll": "Hammasini tozalash",
  "catalog.category": "Kategoriya",
  "catalog.color": "Rang",
  "catalog.thickness": "Qalinlik",
  "catalog.size": "O'lcham",
  "catalog.priceRange": "Narx diapazoni",
  "catalog.availability": "Mavjudlik",
  "catalog.inStockOnly": "Faqat mavjud",
  "catalog.sortBy": "Saralash:",
  "catalog.showing": "Ko'rsatilmoqda",
  "catalog.products": "mahsulotlar",

  // Product Details
  "product.backToCatalog": "Katalogga qaytish",
  "product.addToCart": "Savatga qo'shish",
  "product.addToWishlist": "Sevimlilar ro'yxatiga qo'shish",
  "product.freeShipping": "Bepul yetkazib berish",
  "product.onOrdersOver": "$500 dan ortiq buyurtmalar uchun",
  "product.qualityGuarantee": "Sifat kafolati",
  "product.moneyBack": "30 kunlik pul qaytarish kafolati",
  "product.specifications": "Xususiyatlar",
  "product.installation": "O'rnatish bo'yicha qo'llanma",
  "product.reviews": "Sharhlar",
  "product.relatedProducts": "O'xshash mahsulotlar",
  "product.viewDetails": "Batafsil ko'rish",
  "product.writeReview": "Sharh yozish",
  "product.customerReviews": "Mijozlar sharhlari",
  "product.basedOn": "Asosida",
  "product.verifiedPurchase": "Tasdiqlangan xarid",
  "product.loadMore": "Ko'proq sharhlarni yuklash",
};

export const translations: Record<Language, Record<string, string>> = {
  en,
  ru,
  uz,
};
