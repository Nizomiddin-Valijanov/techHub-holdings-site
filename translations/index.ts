import type { Language } from "@/providers/language-provider"

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
  "category.marbleTiles": "Marble Tiles",
  "category.granite": "Granite",
  "category.constructionMaterials": "Construction Materials",
  "category.tools": "Tools & Equipment",

  // Hero Section
  "hero.title": "Premium Quality",
  "hero.subtitle": "Marble and Construction Materials",
  "hero.exploreCatalog": "Explore Catalog",
  "hero.contactUs": "Contact Us",

  // Categories Section
  "categories.title": "Product Categories",
  "categories.subtitle": "Browse our wide range of high-quality products",
  "categories.explore": "Explore",
  "categories.marbleDesc": "Premium marble tiles for various uses",
  "categories.graniteDesc": "Durable granite for countertops and surfaces",
  "categories.constructionDesc": "Quality materials for your construction projects",

  // Featured Products
  "featured.title": "Featured Products",
  "featured.subtitle": "Our most popular marble tiles and materials",
  "featured.viewAll": "View All",
  "featured.details": "Details",
  "featured.inStock": "In Stock",
  "featured.outOfStock": "Out of Stock",

  // Testimonials
  "testimonials.title": "What Our Customers Say",
  "testimonials.subtitle": "Read testimonials from our satisfied customers",

  // Footer
  "footer.about": "Premium marble tiles and construction materials for professionals and homeowners.",
  "footer.quickLinks": "Quick Links",
  "footer.contactUs": "Contact Us",
  "footer.newsletter": "Newsletter",
  "footer.subscribeText": "Subscribe to receive updates on new products and special offers.",
  "footer.subscribe": "Subscribe",
  "footer.rights": "All rights reserved.",

  // Product
  "product.code": "Product Code",
  "product.size": "Size",
  "product.unit": "Unit",
  "product.category": "Category",
  "product.inStock": "In Stock",
  "product.outOfStock": "Out of Stock",
  "product.addToCart": "Add to Cart",
  "product.addToWishlist": "Add to Wishlist",
  "product.freeShipping": "Free Shipping",
  "product.onOrdersOver": "On orders over 500,000 UZS",
  "product.qualityGuarantee": "Quality Guarantee",
  "product.moneyBack": "30-day money-back guarantee",
  "product.specifications": "Specifications",
  "product.reviews": "reviews",
  "product.relatedProducts": "Related Products",
  "product.viewDetails": "View Details",
  "product.backToCatalog": "Back to Catalog",
  "product.notFound": "Product not found",
  "product.noDescription": "No description available",
  "product.pricePerUnit": "Price per {unit}",
}

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
  "category.marbleTiles": "Мраморная плитка",
  "category.granite": "Гранит",
  "category.constructionMaterials": "Строительные материалы",
  "category.tools": "Инструменты и оборудование",

  // Hero Section
  "hero.title": "Премиальное качество",
  "hero.subtitle": "Мрамор и строительные материалы",
  "hero.exploreCatalog": "Просмотреть каталог",
  "hero.contactUs": "Связаться с нами",

  // Categories Section
  "categories.title": "Категории товаров",
  "categories.subtitle": "Ознакомьтесь с нашим широким ассортиментом высококачественных товаров",
  "categories.explore": "Просмотреть",
  "categories.marbleDesc": "Премиальная мраморная плитка для различных нужд",
  "categories.graniteDesc": "Прочный гранит для столешниц и поверхностей",
  "categories.constructionDesc": "Качественные материалы для ваших строительных проектов",

  // Featured Products
  "featured.title": "Популярные товары",
  "featured.subtitle": "Наши самые популярные мраморные плитки и материалы",
  "featured.viewAll": "Смотреть все",
  "featured.details": "Подробнее",
  "featured.inStock": "В наличии",
  "featured.outOfStock": "Нет в наличии",

  // Testimonials
  "testimonials.title": "Что говорят наши клиенты",
  "testimonials.subtitle": "Прочитайте отзывы наших довольных клиентов",

  // Footer
  "footer.about": "Премиальная мраморная плитка и строительные материалы для профессионалов и домовладельцев.",
  "footer.quickLinks": "Быстрые ссылки",
  "footer.contactUs": "Связаться с нами",
  "footer.newsletter": "Рассылка",
  "footer.subscribeText": "Подпишитесь, чтобы получать обновления о новых товарах и специальных предложениях.",
  "footer.subscribe": "Подписаться",
  "footer.rights": "Все права защищены.",

  // Product
  "product.code": "Код товара",
  "product.size": "Размер",
  "product.unit": "Единица измерения",
  "product.category": "Категория",
  "product.inStock": "В наличии",
  "product.outOfStock": "Нет в наличии",
  "product.addToCart": "Добавить в корзину",
  "product.addToWishlist": "Добавить в избранное",
  "product.freeShipping": "Бесплатная доставка",
  "product.onOrdersOver": "При заказе от 500,000 UZS",
  "product.qualityGuarantee": "Гарантия качества",
  "product.moneyBack": "30-дневная гарантия возврата денег",
  "product.specifications": "Характеристики",
  "product.reviews": "отзывов",
  "product.relatedProducts": "Похожие товары",
  "product.viewDetails": "Подробнее",
  "product.backToCatalog": "Назад в каталог",
  "product.notFound": "Товар не найден",
  "product.noDescription": "Описание отсутствует",
  "product.pricePerUnit": "Цена за {unit}",
}

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
  "category.marbleTiles": "Marmar plitalar",
  "category.granite": "Granit",
  "category.constructionMaterials": "Qurilish materiallari",
  "category.tools": "Asboblar va uskunalar",

  // Hero Section
  "hero.title": "Premium sifat",
  "hero.subtitle": "Marmar va qurilish materiallari",
  "hero.exploreCatalog": "Katalogni ko'rish",
  "hero.contactUs": "Biz bilan bog'lanish",

  // Categories Section
  "categories.title": "Mahsulot kategoriyalari",
  "categories.subtitle": "Yuqori sifatli mahsulotlarimizning keng assortimentini ko'rib chiqing",
  "categories.explore": "Ko'rish",
  "categories.marbleDesc": "Turli ehtiyojlar uchun premium marmar plitalar",
  "categories.graniteDesc": "Oshxona stollari va yuzalar uchun chidamli granit",
  "categories.constructionDesc": "Qurilish loyihalaringiz uchun sifatli materiallar",

  // Featured Products
  "featured.title": "Mashhur mahsulotlar",
  "featured.subtitle": "Eng mashhur marmar plitalar va materiallarimiz",
  "featured.viewAll": "Hammasini ko'rish",
  "featured.details": "Batafsil",
  "featured.inStock": "Mavjud",
  "featured.outOfStock": "Mavjud emas",

  // Testimonials
  "testimonials.title": "Mijozlarimiz nima deyishadi",
  "testimonials.subtitle": "Mamnun mijozlarimizning sharhlarini o'qing",

  // Footer
  "footer.about": "Professionallar va uy egalari uchun premium marmar plitalar va qurilish materiallari.",
  "footer.quickLinks": "Tezkor havolalar",
  "footer.contactUs": "Biz bilan bog'lanish",
  "footer.newsletter": "Yangiliklar",
  "footer.subscribeText": "Yangi mahsulotlar va maxsus takliflar haqida yangilanishlarni olish uchun obuna bo'ling.",
  "footer.subscribe": "Obuna bo'lish",
  "footer.rights": "Barcha huquqlar himoyalangan.",

  // Product
  "product.code": "Mahsulot kodi",
  "product.size": "O'lcham",
  "product.unit": "O'lchov birligi",
  "product.category": "Kategoriya",
  "product.inStock": "Mavjud",
  "product.outOfStock": "Mavjud emas",
  "product.addToCart": "Savatga qo'shish",
  "product.addToWishlist": "Sevimlilar ro'yxatiga qo'shish",
  "product.freeShipping": "Bepul yetkazib berish",
  "product.onOrdersOver": "500,000 UZS dan ortiq buyurtmalar uchun",
  "product.qualityGuarantee": "Sifat kafolati",
  "product.moneyBack": "30 kunlik pul qaytarish kafolati",
  "product.specifications": "Xususiyatlar",
  "product.reviews": "sharhlar",
  "product.relatedProducts": "O'xshash mahsulotlar",
  "product.viewDetails": "Batafsil ko'rish",
  "product.backToCatalog": "Katalogga qaytish",
  "product.notFound": "Mahsulot topilmadi",
  "product.noDescription": "Tavsif mavjud emas",
  "product.pricePerUnit": "Narx {unit} uchun",
}

export const translations: Record<Language, Record<string, string>> = {
  en,
  ru,
  uz,
}

