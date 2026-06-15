// ================================================
// SAYWEE - Main JavaScript
// script.js
// ================================================

document.addEventListener('DOMContentLoaded', () => {
  // Init language
  LangManager.init();

  // Page loader
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 400);
    });
  }

  // Sticky header
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Search overlay
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('open');
      setTimeout(() => searchInput && searchInput.focus(), 100);
    });
    searchOverlay.addEventListener('click', e => {
      if (e.target === searchOverlay) searchOverlay.classList.remove('open');
    });
    if (searchClose) searchClose.addEventListener('click', () => searchOverlay.classList.remove('open'));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') searchOverlay.classList.remove('open');
    });

    if (searchInput && searchResults) {
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim();
        if (q.length < 2) { searchResults.innerHTML = ''; return; }
        const results = getProducts({ search: q, limit: 8 });
        if (!results.length) {
          searchResults.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-muted)">${LangManager.get('no_products')}</div>`;
          return;
        }
        searchResults.innerHTML = results.map(p => `
          <div class="search-result-item" onclick="window.location.href='product.html?id=${p.id}';searchOverlay.classList.remove('open')">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1547592180-85f173990554?w=200'">
            <div class="search-result-info">
              <div class="name">${p.name}</div>
              <div class="meta">${countryFlag(p.country)} ${p.country} · ${p.category}</div>
            </div>
            <div class="search-result-price">${formatPrice(p.price)}</div>
          </div>
        `).join('');
      });

      // Enter to shop page
      searchInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          const q = searchInput.value.trim();
          if (q) window.location.href = `shop.html?search=${encodeURIComponent(q)}`;
        }
      });
    }
  }

  // Lang dropdown toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.closest('.lang-switcher').querySelector('.lang-dropdown').classList.toggle('open');
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('open'));
  });

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => obs.observe(el));
  }

  // Newsletter
  const newsletter = document.getElementById('newsletter-form');
  if (newsletter) {
    newsletter.addEventListener('submit', e => {
      e.preventDefault();
      const email = newsletter.querySelector('input').value.trim();
      if (!email) return;
      showToast(LangManager.get('toast_newsletter'), 'success');
      newsletter.reset();
    });
  }

  // Mark active nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── PAGE ROUTER ──────────────────────────────
  // Init page-specific logic BEFORE products load,
  // so event listeners are ready when productsLoaded fires
  if (page === 'index.html' || page === '') initHomePage();
  if (page === 'shop.html') initShopPage();
  if (page === 'product.html') initProductPage();
  if (page === 'cart.html') initCartPage();
  if (page === 'wishlist.html') initWishlistPage();
  if (page === 'login.html') initLoginPage();
  if (page === 'contact.html') initContactPage();
});

// ================================================
// HERO SLIDER
// ================================================
function initSlider() {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide');
  const dots = slider.querySelectorAll('.slider-dot');
  if (!slides.length) return;
  let current = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function autoPlay() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  slider.querySelector('.slider-prev')?.addEventListener('click', () => { goTo(current - 1); autoPlay(); });
  slider.querySelector('.slider-next')?.addEventListener('click', () => { goTo(current + 1); autoPlay(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); autoPlay(); }));

  goTo(0);
  autoPlay();
}

// ================================================
// HOME PAGE
// ================================================
function initHomePage() {
  initSlider();

  function renderHomeProducts() {
    const bsGrid = document.getElementById('bestsellers-grid');
    if (bsGrid) renderGrid(getBestsellers(8), bsGrid);

    const newGrid = document.getElementById('new-arrivals-grid');
    if (newGrid) renderGrid(getNewArrivals(8), newGrid);

    const drinksGrid = document.getElementById('drinks-track');
    if (drinksGrid) renderGrid(getByCategory('Asian Drinks', 8), drinksGrid);

    const snacksGrid = document.getElementById('snacks-track');
    if (snacksGrid) renderGrid(getByCategory('Asian Snacks', 8), snacksGrid);
  }

  if (ALL_PRODUCTS.length > 0) {
    renderHomeProducts();
  } else {
    document.addEventListener('productsLoaded', renderHomeProducts, { once: true });
  }
}

// ================================================
// SHOP PAGE
// ================================================
function initShopPage() {
  const params = new URLSearchParams(window.location.search);
  const initSearch = params.get('search') || '';
  const initCountry = params.get('country') || 'all';
  const initCategory = params.get('category') || 'all';

  const grid = document.getElementById('shop-grid');
  const sortSel = document.getElementById('sort-select');
  const searchInput = document.getElementById('shop-search-input');
  const resultsCount = document.getElementById('results-count');
  const countryFilters = document.querySelectorAll('.filter-country');
  const categoryFilters = document.querySelectorAll('.filter-category');
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const filterApply = document.getElementById('filter-apply');

  if (searchInput && initSearch) searchInput.value = initSearch;
  if (initCountry !== 'all') {
    countryFilters.forEach(cb => { if (cb.value === initCountry) cb.checked = true; });
  }
  if (initCategory !== 'all') {
    categoryFilters.forEach(cb => { if (cb.value === initCategory) cb.checked = true; });
  }

  function applyFilters() {
    const selectedCountries = [...document.querySelectorAll('.filter-country:checked')].map(c => c.value);
    const selectedCats = [...document.querySelectorAll('.filter-category:checked')].map(c => c.value);
    const sort = sortSel ? sortSel.value : 'bestseller';
    const search = searchInput ? searchInput.value.trim() : '';
    const minP = minPriceInput ? parseFloat(minPriceInput.value) || 0 : 0;
    const maxP = maxPriceInput ? parseFloat(maxPriceInput.value) || 9999 : 9999;

    let result = [...ALL_PRODUCTS];

    if (selectedCountries.length > 0) {
      result = result.filter(p => selectedCountries.includes(p.country));
    }
    if (selectedCats.length > 0) {
      result = result.filter(p => selectedCats.includes(p.category));
    }
    result = result.filter(p => p.price >= minP && p.price <= maxP);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case 'bestseller': result.sort((a, b) => b.sold - a.sold); break;
      case 'new': result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      case 'price_asc': result.sort((a, b) => a.price - b.price); break;
      case 'price_desc': result.sort((a, b) => b.price - a.price); break;
    }

    if (resultsCount) resultsCount.textContent = `${result.length} products`;
    renderGrid(result, grid);
  }

  function onProductsReady() {
    applyFilters();
    // Populate counts
    document.querySelectorAll('.filter-category').forEach(cb => {
      const cnt = ALL_PRODUCTS.filter(p => p.category === cb.value).length;
      const label = cb.closest('.filter-item')?.querySelector('.filter-count');
      if (label) label.textContent = cnt;
    });
    document.querySelectorAll('.filter-country').forEach(cb => {
      const cnt = ALL_PRODUCTS.filter(p => p.country === cb.value).length;
      const label = cb.closest('.filter-item')?.querySelector('.filter-count');
      if (label) label.textContent = cnt;
    });
  }

  if (ALL_PRODUCTS.length > 0) {
    onProductsReady();
  } else {
    document.addEventListener('productsLoaded', onProductsReady, { once: true });
  }

  if (sortSel) sortSel.addEventListener('change', applyFilters);
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (filterApply) filterApply.addEventListener('click', applyFilters);
  document.querySelectorAll('.filter-country, .filter-category').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });
}

// ================================================
// PRODUCT DETAIL PAGE
// ================================================
function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  if (!productId) { window.location.href = 'shop.html'; return; }

  function onReady() {
    const product = getProductById(productId);
    if (!product) { window.location.href = 'shop.html'; return; }

    // Track recently viewed
    RecentlyViewed.add(productId);

    // Update page title
    document.title = `${product.name} – SAYWEE`;

    // Breadcrumb
    setEl('breadcrumb-category', product.category);
    setEl('breadcrumb-name', product.name);

    // Badges
    const badgesEl = document.getElementById('detail-badges');
    if (badgesEl) {
      let html = '';
      if (product.isNew) html += `<span class="badge-item badge-new">New</span>`;
      if (product.isBestseller) html += `<span class="badge-item badge-best">Best Seller</span>`;
      if (product.isOnSale) html += `<span class="badge-item badge-sale">Sale</span>`;
      badgesEl.innerHTML = html;
    }

    // Title, brand, etc.
    setEl('product-title', product.name);
    setEl('product-brand', product.brand);
    setEl('product-country', `${countryFlag(product.country)} ${product.country}`);
    setEl('product-category', product.category);
    setEl('product-weight', product.weight);

    // Price
    setEl('product-price', formatPrice(product.price));
    if (product.originalPrice) {
      setEl('product-price-original', formatPrice(product.originalPrice));
      const disc = discountPct(product.originalPrice, product.price);
      setEl('product-price-save', `-${disc}%`);
    }

    // Rating
    setEl('rating-big', product.rating);
    const ratingStars = document.getElementById('rating-stars-big');
    if (ratingStars) ratingStars.innerHTML = starsHtml(product.rating);
    setEl('rating-count-big', `(${product.reviews.toLocaleString()} ${LangManager.get('reviews_count')})`);

    // Social proof
    setEl('proof-viewing', Math.floor(Math.random() * 40 + 10) + ' ' + LangManager.get('currently_viewing'));
    setEl('proof-cart', Math.floor(Math.random() * 80 + 20) + ' ' + LangManager.get('added_today'));
    setEl('proof-sold', product.sold.toLocaleString() + ' ' + LangManager.get('total_sold'));
    setEl('proof-wishlist', Math.floor(product.sold * 0.15).toLocaleString() + ' ' + LangManager.get('wishlist_count'));

    // Main image
    const mainImg = document.getElementById('gallery-main-img');
    if (mainImg) mainImg.src = product.image;

    // Description
    setEl('product-description', product.description);

    // Nutrition
    const nutTable = document.getElementById('nutrition-table');
    if (nutTable && product.nutrition) {
      nutTable.innerHTML = Object.entries(product.nutrition).map(([k, v]) => `
        <tr><td>${k.charAt(0).toUpperCase() + k.slice(1)}</td><td>${v}</td></tr>
      `).join('');
    }

    // Ingredients / allergens / storage
    setEl('product-ingredients', product.ingredients);
    setEl('product-allergens', product.allergens);
    setEl('product-storage', product.storage);
    setEl('product-expiry', product.expiry);
    setEl('product-weight-detail', product.weight);

    // Quantity
    const qtyInput = document.getElementById('qty-input');
    document.getElementById('qty-minus')?.addEventListener('click', () => {
      if (qtyInput.value > 1) qtyInput.value = parseInt(qtyInput.value) - 1;
    });
    document.getElementById('qty-plus')?.addEventListener('click', () => {
      qtyInput.value = parseInt(qtyInput.value) + 1;
    });

    // Add to cart
    document.getElementById('btn-add-cart')?.addEventListener('click', () => {
      Cart.add(productId, parseInt(qtyInput?.value || 1));
    });
    document.getElementById('btn-buy-now')?.addEventListener('click', () => {
      Cart.add(productId, parseInt(qtyInput?.value || 1));
      window.location.href = 'cart.html';
    });

    // Wishlist
    const wishBtn = document.getElementById('btn-wishlist');
    if (wishBtn) {
      function updateWishBtn() {
        const has = Wishlist.has(productId);
        wishBtn.classList.toggle('active', has);
        wishBtn.querySelector('span') && (wishBtn.querySelector('span').textContent = has ? '♥ ' + LangManager.get('add_wish') : '♡ ' + LangManager.get('add_wish'));
      }
      updateWishBtn();
      wishBtn.addEventListener('click', () => { Wishlist.toggle(productId); updateWishBtn(); });
    }

    // Sticky bar
    const stickyBar = document.getElementById('sticky-bar');
    const purchaseSection = document.querySelector('.product-info');
    if (stickyBar && purchaseSection) {
      setEl('sticky-product-name', product.name);
      setEl('sticky-product-price', formatPrice(product.price));
      const obs = new IntersectionObserver((entries) => {
        stickyBar.classList.toggle('show', !entries[0].isIntersecting);
      }, { threshold: 0.1 });
      obs.observe(purchaseSection);
      document.getElementById('sticky-add-cart')?.addEventListener('click', () => Cart.add(productId, 1));
    }

    // Reviews
    loadReviews(productId, product);

    // Related products
    const relatedGrid = document.getElementById('related-grid');
    if (relatedGrid) renderGrid(getRelated(product, 6), relatedGrid);

    // Recently viewed
    const recentGrid = document.getElementById('recent-grid');
    if (recentGrid) {
      const recent = RecentlyViewed.getProducts(6).filter(p => p.id !== productId);
      if (recent.length) {
        renderGrid(recent, recentGrid);
      } else {
        document.getElementById('recent-section')?.classList.add('hidden');
      }
    }

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab)?.classList.add('active');
      });
    });
  }

  if (ALL_PRODUCTS.length > 0) {
    onReady();
  } else {
    document.addEventListener('productsLoaded', onReady, { once: true });
  }
}

function loadReviews(productId, product) {
  const userReviews = Reviews.get(productId);

  // Rich realistic reviews per product type
  const reviewPool = {
    'Instant Noodles': [
      { name: 'Kim Min-jun', rating: 5, title: '진짜 맛있어요! 완전 중독됨', body: '해외에 있는데 이거 없으면 못 살 것 같아요. 스프 양도 딱 적당하고 면이 쫄깃해서 진짜 좋아요. 3박스 사뒀어요 😂', date: '2025-04-12', initials: 'KM', helpful: 142, country: '🇦🇺' },
      { name: 'Sarah Johnson', rating: 5, title: 'Finally found authentic taste!', body: "I've been looking for this exact product for years. The spice level is perfect and the noodles have that satisfying chew I love. Ships fast and well-packaged. Already ordered 3 more packs!", date: '2025-04-08', initials: 'SJ', helpful: 98, country: '🇺🇸' },
      { name: 'Nguyen Thi Lan', rating: 4, title: 'Rất ngon, giao hàng nhanh', body: 'Mì ngon và đúng vị như khi còn ở Việt Nam. Đóng gói cẩn thận, không bị vỡ. Chỉ mong có nhiều vị hơn thôi!', date: '2025-03-25', initials: 'NL', helpful: 67, country: '🇩🇪' },
      { name: 'Yamada Kenji', rating: 5, title: '本当においしい！また買います', body: '本場の味がそのまま届きました。辛さも程よく、麺のコシもバッチリ。日本では手に入りにくいのでSAYWEEさんには感謝です！', date: '2025-03-18', initials: 'YK', helpful: 54, country: '🇯🇵' },
      { name: 'Alex Chen', rating: 5, title: 'Addictive! Cannot stop eating', body: 'My whole office is now addicted. We do a weekly noodle lunch now because of SAYWEE. The packaging is solid and delivery was lightning fast.', date: '2025-03-10', initials: 'AC', helpful: 211, country: '🇨🇦' },
    ],
    'Asian Snacks': [
      { name: 'Emma Wilson', rating: 5, title: 'Nostalgic and delicious!', body: "These taste exactly like the ones I ate while studying abroad. I've been searching for them for 3 years! SAYWEE had them and shipped within 2 days. Absolutely perfect.", date: '2025-04-15', initials: 'EW', helpful: 178, country: '🇬🇧' },
      { name: 'Park Jisoo', rating: 5, title: '어릴 때 먹던 그 맛 그대로!', body: '어릴 때 편의점에서 사먹던 그 맛이에요. 해외에서도 이런 걸 먹을 수 있다니 진짜 감사해요. 가족들 선물로도 샀어요!', date: '2025-04-05', initials: 'PJ', helpful: 89, country: '🇺🇸' },
      { name: 'Marie Dubois', rating: 4, title: 'Excellent qualité, très bon goût', body: "Produit de qualité supérieure. Le goût est authentique et l'emballage est parfait. Livraison rapide, très satisfaite. Je recommande!", date: '2025-03-28', initials: 'MD', helpful: 44, country: '🇫🇷' },
      { name: 'Li Wei', rating: 5, title: '非常好吃，和在国内买的一样！', body: '在国外很难买到这么正宗的零食，SAYWEE的质量完全没问题。下次还会继续购买！', date: '2025-03-12', initials: 'LW', helpful: 132, country: '🇨🇦' },
    ],
    'Asian Drinks': [
      { name: 'Tran Minh Duc', rating: 5, title: 'Đúng vị quê nhà!', body: 'Uống một ngụm là nhớ nhà ngay. Cảm ơn SAYWEE đã mang hương vị Việt Nam sang đây. Đóng gói rất cẩn thận, không bị vỡ hay rỉ gì cả.', date: '2025-04-18', initials: 'TD', helpful: 203, country: '🇩🇪' },
      { name: 'Jessica Park', rating: 5, title: 'So refreshing and authentic!', body: "This is my go-to morning drink now. The flavor is so much better than any local alternatives. I stock up 3-4 times a month. Best thing about SAYWEE!", date: '2025-04-10', initials: 'JP', helpful: 156, country: '🇺🇸' },
      { name: 'Suzuki Haruki', rating: 4, title: '思った以上においしかった！', body: '商品の質は問題なく、味も本格的でした。配送も速く、梱包も丁寧で安心して注文できます。次回もリピートします！', date: '2025-03-20', initials: 'SH', helpful: 88, country: '🇯🇵' },
      { name: 'Chen Xiaoming', rating: 5, title: '正宗！和在家乡喝的一样', body: '这个味道真的太正宗了！在国外喝到这个感觉很感动。包装完好，发货很快，非常推荐！', date: '2025-03-05', initials: 'CX', helpful: 174, country: '🇦🇺' },
    ],
    'default': [
      { name: 'Michael Brown', rating: 5, title: 'Exactly as described, fast shipping!', body: "I was skeptical ordering Asian food online but SAYWEE completely changed my mind. The product is 100% authentic, well packaged and arrived in perfect condition. This is my new go-to store.", date: '2025-04-20', initials: 'MB', helpful: 245, country: '🇺🇸' },
      { name: 'Aiko Tanaka', rating: 5, title: '最高です！また注文します', body: '品質が素晴らしく、本格的な味わいです。注文から3日で届きました。梱包も丁寧で大満足です。次回もよろしくお願いします！', date: '2025-04-14', initials: 'AT', helpful: 167, country: '🇯🇵' },
      { name: 'Priya Sharma', rating: 5, title: 'Just like back home in Mumbai!', body: "Living in Europe, I've tried many places to find authentic products. SAYWEE is the only one that gets it right. The quality is superb and prices are fair. My family loves it!", date: '2025-03-30', initials: 'PS', helpful: 198, country: '🇬🇧' },
      { name: 'Trần Thị Mai', rating: 4, title: 'Chất lượng tốt, đóng gói cẩn thận', body: 'Hàng đúng mô tả, đóng gói rất cẩn thận. Giao hàng nhanh hơn tôi mong đợi. Sẽ mua tiếp và giới thiệu cho bạn bè!', date: '2025-03-22', initials: 'TM', helpful: 93, country: '🇫🇷' },
      { name: 'Wang Fang', rating: 5, title: '质量很好，发货迅速', body: '商品质量没话说，包装严密，发货速度超快。已经买了三次了，每次都很满意。强烈推荐给海外华人！', date: '2025-03-15', initials: 'WF', helpful: 221, country: '🇨🇦' },
    ]
  };

  // Pick review pool based on category
  const cat = product.category;
  let pool = reviewPool[cat] || reviewPool['default'];
  const sampleReviews = [...pool];
  const allReviews = [...userReviews, ...sampleReviews];

  // Rating breakdown
  const breakdown = document.getElementById('rating-breakdown');
  if (breakdown) {
    const counts = [0, 0, 0, 0, 0];
    const allRatings = [product.rating, ...allReviews.map(r => r.rating)];
    allRatings.forEach(r => { if (r >= 1 && r <= 5) counts[Math.round(r) - 1]++; });
    const total = allRatings.length;
    breakdown.innerHTML = [5,4,3,2,1].map(star => {
      const cnt = counts[star-1];
      const pct = total ? Math.round(cnt / total * 100) : 0;
      return `
        <div class="rating-bar-row">
          <span class="label">${star}★</span>
          <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${pct}%"></div></div>
          <span class="pct">${pct}%</span>
        </div>
      `;
    }).join('');
  }

  // Reviews list
  const list = document.getElementById('reviews-list');
  if (list) {
    list.innerHTML = allReviews.map(r => `
      <div class="review-item">
        <div class="review-item-header">
          <div class="review-item-avatar" style="background:var(--primary);color:var(--text);font-weight:800;">${r.initials || r.name[0]}</div>
          <div class="review-item-meta">
            <div class="name" style="font-weight:700;">${r.name} <span style="font-size:11px;color:var(--text-muted);font-weight:400;">${r.country || ''}</span></div>
            <div class="date" style="font-size:11px;color:var(--text-muted);">✅ Verified Purchase · ${new Date(r.date).toLocaleDateString()}</div>
          </div>
          <div class="review-item-rating" style="color:#F8C400;">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        </div>
        <div class="review-item-title" style="font-weight:700;margin-bottom:6px;">${r.title}</div>
        <div class="review-item-body" style="font-size:14px;color:var(--text-light);line-height:1.7;">${r.body}</div>
        <div style="margin-top:12px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:12px;color:var(--text-muted);">도움이 되었나요?</span>
          <button onclick="this.innerHTML='👍 '+(parseInt(this.dataset.n)+1)+' Helpful';this.style.color='#22c55e'" data-n="${r.helpful||0}" style="font-size:12px;border:1px solid var(--border);padding:4px 12px;border-radius:20px;cursor:pointer;background:var(--bg);">👍 ${r.helpful||0} Helpful</button>
        </div>
      </div>
    `).join('');
  }

  // Write review
  const writeForm = document.getElementById('write-review-form');
  if (writeForm) {
    let selectedRating = 0;
    const stars = writeForm.querySelectorAll('.star-pick');
    stars.forEach((s, i) => {
      s.addEventListener('mouseenter', () => {
        stars.forEach((st, j) => st.classList.toggle('filled', j <= i));
      });
      s.addEventListener('mouseleave', () => {
        stars.forEach((st, j) => st.classList.toggle('filled', j < selectedRating));
      });
      s.addEventListener('click', () => { selectedRating = i + 1; });
    });
    writeForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!selectedRating) { showToast('Please select a rating', 'warning'); return; }
      const name = writeForm.querySelector('#review-name').value.trim();
      const title = writeForm.querySelector('#review-title').value.trim();
      const body = writeForm.querySelector('#review-body').value.trim();
      if (!name || !title || !body) { showToast('Please fill all fields', 'warning'); return; }
      Reviews.add(productId, { name, rating: selectedRating, title, body, initials: name[0].toUpperCase() });
      showToast(LangManager.get('toast_review'), 'success');
      writeForm.reset();
      selectedRating = 0;
      stars.forEach(s => s.classList.remove('filled'));
      loadReviews(productId, product);
    });
  }

  // Q&A
  const qaList = document.getElementById('qa-list');
  const qaForm = document.getElementById('qa-form');
  if (qaList) {
    const qas = QA.get(productId);
    const sampleQAs = [
      { question: '이 제품 채식주의자도 먹을 수 있나요? (Is this vegetarian?)', answer: '원재료 성분표를 확인해 주세요. 일부 제품은 생선 추출물이나 육류가 포함될 수 있습니다. / Please check the ingredients list. Some products may contain fish extract or meat.', date: '2025-03-15' },
      { question: '배송 기간이 얼마나 걸리나요? (How long is shipping?)', answer: '일반 배송은 3-7 영업일, 빠른 배송은 1-3 영업일 소요됩니다. / Standard shipping takes 3-7 business days, express 1-3 days.', date: '2025-03-10' },
      { question: 'Can I order multiple items together?', answer: 'Yes! Orders over $35 qualify for free shipping. You can mix products from different countries in one order.', date: '2025-02-28' },
      { question: '冷藏保存还是常温保存？(Refrigerate or room temp?)', answer: '请按照包装上的保存说明操作。大多数干货产品可常温保存，开封后需冷藏。/ Please follow storage instructions on the package.', date: '2025-02-20' },
      { question: '賞味期限はどのくらいですか？(What is the shelf life?)', answer: '商品により異なりますが、商品説明ページに記載されています。配送時には最低6ヶ月の残存賞味期限を保証しています。', date: '2025-02-10' },
    ];
    const allQAs = [...qas, ...sampleQAs];
    qaList.innerHTML = allQAs.map(q => `
      <div style="padding:16px;border:1px solid var(--border-light);border-radius:var(--radius-md);margin-bottom:12px">
        <div style="font-weight:700;margin-bottom:6px">❓ ${q.question}</div>
        ${q.answer ? `<div style="color:var(--text-light);font-size:14px">💬 ${q.answer}</div>` : `<div style="color:var(--text-muted);font-size:13px">No answer yet.</div>`}
        <div style="font-size:11px;color:var(--text-muted);margin-top:6px">${new Date(q.date).toLocaleDateString()}</div>
      </div>
    `).join('') || '<p style="color:var(--text-muted)">No questions yet. Be the first to ask!</p>';
  }
  if (qaForm) {
    qaForm.addEventListener('submit', e => {
      e.preventDefault();
      const q = qaForm.querySelector('#qa-input').value.trim();
      if (!q) return;
      QA.add(productId, q);
      showToast(LangManager.get('toast_question'), 'success');
      qaForm.reset();
      loadReviews(productId, product);
    });
  }
}

// ================================================
// CART PAGE
// ================================================
function initCartPage() {
  function renderCart() {
    const cart = Cart.get();
    const container = document.getElementById('cart-items');
    const emptyState = document.getElementById('cart-empty');
    const cartSection = document.getElementById('cart-section');

    if (!cart.length) {
      if (emptyState) emptyState.style.display = 'block';
      if (cartSection) cartSection.style.display = 'none';
      return;
    }
    if (emptyState) emptyState.style.display = 'none';
    if (cartSection) cartSection.style.display = 'grid';

    if (container) {
      container.innerHTML = cart.map(item => {
        const p = getProductById(item.id);
        if (!p) return '';
        return `
          <div class="cart-item">
            <div class="cart-item-img" onclick="window.location.href='product.html?id=${p.id}'">
              <img src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1547592180-85f173990554?w=300'">
            </div>
            <div class="cart-item-info">
              <div class="cart-item-name" onclick="window.location.href='product.html?id=${p.id}'">${p.name}</div>
              <div class="cart-item-meta">${countryFlag(p.country)} ${p.country} · ${p.brand}</div>
              <div class="cart-item-price">${formatPrice(p.price)}</div>
            </div>
            <div class="cart-item-actions">
              <div class="quantity-selector">
                <button class="qty-btn" onclick="Cart.updateQty('${p.id}', ${item.qty - 1}); renderCartPage()">−</button>
                <input class="qty-input" type="number" value="${item.qty}" min="1" onchange="Cart.updateQty('${p.id}', parseInt(this.value)||1); renderCartPage()">
                <button class="qty-btn" onclick="Cart.updateQty('${p.id}', ${item.qty + 1}); renderCartPage()">+</button>
              </div>
              <button class="cart-remove-btn" onclick="Cart.remove('${p.id}'); renderCartPage()">🗑</button>
            </div>
          </div>
        `;
      }).join('');
    }

    const subtotal = Cart.total();
    const shipping = subtotal >= 35 ? 0 : 5.99;
    setEl('cart-subtotal', formatPrice(subtotal));
    setEl('cart-shipping', shipping === 0 ? LangManager.get('free_shipping') : formatPrice(shipping));
    setEl('cart-total', formatPrice(subtotal + shipping));
    setEl('cart-count', Cart.count());
  }

  window.renderCartPage = renderCart;

  if (ALL_PRODUCTS.length > 0) {
    renderCart();
  } else {
    document.addEventListener('productsLoaded', renderCart, { once: true });
  }
  document.addEventListener('cartChange', renderCart);

  const clearBtn = document.getElementById('clear-cart');
  if (clearBtn) clearBtn.addEventListener('click', () => { Cart.clear(); renderCart(); });

  // checkout button is now a direct <a href="checkout.html"> link in cart.html

  const couponApply = document.getElementById('coupon-apply');
  if (couponApply) {
    couponApply.addEventListener('click', () => {
      const code = document.getElementById('coupon-input').value.trim().toUpperCase();
      if (code === 'SAYWEE10') {
        showToast('10% discount applied!', 'success');
      } else if (code === 'FREESHIP') {
        showToast('Free shipping applied!', 'success');
      } else {
        showToast('Invalid coupon code', 'error');
      }
    });
  }
}

// ================================================
// WISHLIST PAGE
// ================================================
function initWishlistPage() {
  function renderWishlist() {
    const ids = Wishlist.get();
    const grid = document.getElementById('wishlist-grid');
    const empty = document.getElementById('wishlist-empty');
    if (!ids.length) {
      if (grid) grid.style.display = 'none';
      if (empty) empty.style.display = 'block';
      return;
    }
    if (grid) grid.style.display = 'grid';
    if (empty) empty.style.display = 'none';
    const products = ids.map(id => getProductById(id)).filter(Boolean);
    renderGrid(products, grid);
  }

  if (ALL_PRODUCTS.length > 0) {
    renderWishlist();
  } else {
    document.addEventListener('productsLoaded', renderWishlist, { once: true });
  }
  document.addEventListener('wishlistChange', renderWishlist);
}

// ================================================
// LOGIN PAGE
// ================================================
function initLoginPage() {
  const loginTab = document.getElementById('tab-login');
  const registerTab = document.getElementById('tab-register');
  const loginPanel = document.getElementById('panel-login');
  const registerPanel = document.getElementById('panel-register');

  loginTab?.addEventListener('click', () => {
    loginTab.classList.add('active'); registerTab.classList.remove('active');
    loginPanel.classList.add('active'); registerPanel.classList.remove('active');
  });
  registerTab?.addEventListener('click', () => {
    registerTab.classList.add('active'); loginTab.classList.remove('active');
    registerPanel.classList.add('active'); loginPanel.classList.remove('active');
  });

  document.getElementById('login-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    if (!Auth.login(email, password)) {
      showToast('Invalid email or password', 'error');
    } else {
      setTimeout(() => window.location.href = 'index.html', 800);
    }
  });

  document.getElementById('register-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;
    if (password !== confirm) { showToast('Passwords do not match', 'error'); return; }
    if (!Auth.register(name, email, password)) {
      showToast('Email already registered', 'error');
    } else {
      setTimeout(() => window.location.href = 'index.html', 800);
    }
  });
}

// ================================================
// CONTACT PAGE
// ================================================
function initContactPage() {
  document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Message sent! We\'ll reply within 24 hours.', 'success');
    e.target.reset();
  });
}

// ================================================
// HELPER
// ================================================
function setEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ================================================
// PAGE ROUTER
// ================================================
const page = window.location.pathname.split('/').pop() || 'index.html';
