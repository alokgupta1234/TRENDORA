/* =========================================================
   TRENDORA – Fashion & Lifestyle Store
   Vanilla JavaScript (no frameworks)
   ========================================================= */

/* ---------- 1. PRODUCT DATA ---------- */
// Helper that builds an Unsplash image URL
function unsplash(id) {
  return "images/products/" + id + ".jpg";
}

// Local fallback images (used if an online image fails to load)
const categoryImages = {
  Men: "images/men.jpg",
  Women: "images/women.jpg",
  Kids: "images/kids.jpg",
  Footwear: "images/footwear.jpg",
  Accessories: "images/accessories.jpg"
};

// All products in the store
const products = [
  // MEN
  { id: 1, name: "Premium Polo Shirt", category: "Men", price: 899, original: 1499, rating: 4.5, isNew: false, sizes: ["S","M","L","XL"], image: unsplash("1586790170083-2f9ceadc732d") },
  { id: 2, name: "Casual Hoodie", category: "Men", price: 1299, original: 1999, rating: 4.3, isNew: true, sizes: ["M","L","XL"], image: unsplash("1556821840-3a63f95609a7") },
  { id: 3, name: "Denim Jacket", category: "Men", price: 2199, original: 3499, rating: 4.6, isNew: false, sizes: ["S","M","L"], image: unsplash("1551028719-00167b16eac5") },
  { id: 4, name: "Slim Fit Chinos", category: "Men", price: 1099, original: 1799, rating: 4.2, isNew: false, sizes: ["M","L","XL"], image: unsplash("1473966968600-fa801b869a1a") },
  { id: 5, name: "Printed T-Shirt", category: "Men", price: 499, original: 899, rating: 4.1, isNew: true, sizes: ["S","M","L","XL"], image: unsplash("1521572163474-6864f9cf17ab") },
  { id: 6, name: "White Sneakers", category: "Men", price: 1999, original: 2999, rating: 4.7, isNew: false, sizes: ["M","L"], image: unsplash("1549298916-b41d501d3772") },
  { id: 7, name: "Beige Shirt", category: "Men", price: 999, original: 1599, rating: 4.4, isNew: false, sizes: ["S","M","L"], image: unsplash("1596755094514-f87e34085b2c") },
  { id: 8, name: "Leather Jacket", category: "Men", price: 4499, original: 6999, rating: 4.8, isNew: true, sizes: ["M","L","XL"], image: unsplash("1520975954732-35dd22299614") },
  // WOMEN
  { id: 9, name: "Elegant Dress", category: "Women", price: 1799, original: 2999, rating: 4.6, isNew: true, sizes: ["S","M","L"], image: unsplash("1595777457583-95e059d581b8") },
  { id: 10, name: "Traditional Lehenga", category: "Women", price: 4999, original: 8999, rating: 4.8, isNew: false, sizes: ["S","M","L"], image: "images/women.jpg" },
  { id: 11, name: "Silk Saree", category: "Women", price: 3299, original: 5499, rating: 4.7, isNew: false, sizes: ["M"], image: unsplash("1610030469983-98e550d6193c") },
  { id: 12, name: "Casual Tunic", category: "Women", price: 799, original: 1299, rating: 4.2, isNew: false, sizes: ["S","M","L","XL"], image: unsplash("1515372039744-b8f02a3ae446") },
  { id: 13, name: "Comfort Leggings", category: "Women", price: 599, original: 999, rating: 4.3, isNew: false, sizes: ["S","M","L","XL"], image: unsplash("1506629082955-511b1aa562c8") },
  { id: 14, name: "Handbag", category: "Women", price: 1499, original: 2499, rating: 4.5, isNew: true, sizes: ["M"], image: unsplash("1584917865442-de89df76afd3") },
  { id: 15, name: "Heels", category: "Women", price: 1699, original: 2599, rating: 4.4, isNew: false, sizes: ["S","M","L"], image: unsplash("1543163521-1bf539c55dd2") },
  { id: 16, name: "Women's Sneakers", category: "Women", price: 1899, original: 2799, rating: 4.5, isNew: true, sizes: ["S","M","L"], image: unsplash("1525966222134-fcfa99b8ae77") },
  // KIDS
  { id: 17, name: "Kids T-Shirt", category: "Kids", price: 349, original: 599, rating: 4.3, isNew: false, sizes: ["S","M"], image: unsplash("1519238263530-99bdd11df2ea") },
  { id: 18, name: "Kids Jeans", category: "Kids", price: 699, original: 1099, rating: 4.2, isNew: false, sizes: ["S","M","L"], image: unsplash("1503944583220-79d8926ad5e2") },
  { id: 19, name: "Kids Jacket", category: "Kids", price: 1199, original: 1899, rating: 4.6, isNew: true, sizes: ["S","M","L"], image: unsplash("1519689680058-324335c77eba") },
  { id: 20, name: "Kids Dress", category: "Kids", price: 899, original: 1499, rating: 4.5, isNew: false, sizes: ["S","M"], image: unsplash("1518831959646-742c3a14ebf7") },
  { id: 21, name: "Kids Shoes", category: "Kids", price: 999, original: 1599, rating: 4.4, isNew: true, sizes: ["S","M"], image: unsplash("1514090458221-65bb69cf63e6") },
  // MORE MEN
  { id: 22, name: "Oversized T-Shirt", category: "Men", price: 599, original: 999, rating: 4.4, isNew: true, sizes: ["S","M","L","XL"], image: unsplash("1583743814966-8936f5b7be1a") },
  { id: 23, name: "Formal Shirt", category: "Men", price: 1199, original: 1899, rating: 4.5, isNew: false, sizes: ["S","M","L","XL"], image: unsplash("1602810318383-e386cc2a3ccf") },
  { id: 24, name: "Cargo Pants", category: "Men", price: 1399, original: 2199, rating: 4.3, isNew: true, sizes: ["M","L","XL"], image: unsplash("1624378439575-d8705ad7ae80") },
  { id: 25, name: "Slim Fit Jeans", category: "Men", price: 1499, original: 2499, rating: 4.6, isNew: false, sizes: ["S","M","L","XL"], image: unsplash("1542272604-787c3835535d") },
  { id: 26, name: "Bomber Jacket", category: "Men", price: 2799, original: 4299, rating: 4.7, isNew: true, sizes: ["M","L","XL"], image: unsplash("1591047139829-d91aecb6caea") },
  { id: 27, name: "Denim Shirt", category: "Men", price: 1299, original: 1999, rating: 4.4, isNew: false, sizes: ["S","M","L"], image: unsplash("1588359348347-9bc6cbbb689e") },
  // MORE WOMEN
  { id: 28, name: "Floral Top", category: "Women", price: 699, original: 1199, rating: 4.3, isNew: true, sizes: ["S","M","L"], image: unsplash("1564257631407-4deb1f99d992") },
  { id: 29, name: "Wide Leg Jeans", category: "Women", price: 1599, original: 2499, rating: 4.5, isNew: false, sizes: ["S","M","L","XL"], image: unsplash("1541099649105-f69ad21f3246") },
  { id: 30, name: "Co-Ord Set", category: "Women", price: 1999, original: 3199, rating: 4.6, isNew: true, sizes: ["S","M","L"], image: unsplash("1594633312681-425c7b97ccd1") },
  { id: 31, name: "Summer Skirt", category: "Women", price: 899, original: 1499, rating: 4.2, isNew: false, sizes: ["S","M","L"], image: unsplash("1583496661160-fb5886a0aaaa") },
  { id: 32, name: "Casual Jumpsuit", category: "Women", price: 1799, original: 2899, rating: 4.4, isNew: true, sizes: ["S","M","L"], image: unsplash("1539008835657-9e8e9680c956") },
  // MORE KIDS
  { id: 33, name: "Printed Kids Hoodie", category: "Kids", price: 799, original: 1299, rating: 4.5, isNew: true, sizes: ["S","M","L"], image: unsplash("1622290291468-a28f7a7dc6a8") },
  { id: 34, name: "Kids Frock", category: "Kids", price: 999, original: 1599, rating: 4.6, isNew: false, sizes: ["S","M"], image: unsplash("1621452773781-0f992fd1f5cb") },
  { id: 35, name: "Kids Track Suit", category: "Kids", price: 1099, original: 1799, rating: 4.3, isNew: false, sizes: ["S","M","L"], image: unsplash("1471286174890-9c112ffca5b4") },
  { id: 36, name: "Kids Shorts", category: "Kids", price: 449, original: 799, rating: 4.2, isNew: true, sizes: ["S","M"], image: unsplash("1519457431-44ccd64a579b") },
  // FOOTWEAR
  { id: 37, name: "Running Shoes", category: "Footwear", price: 2499, original: 3999, rating: 4.7, isNew: true, sizes: ["S","M","L"], image: unsplash("1542291026-7eec264c27ff") },
  { id: 38, name: "Casual Sneakers", category: "Footwear", price: 1799, original: 2799, rating: 4.5, isNew: false, sizes: ["S","M","L"], image: unsplash("1600185365483-26d7a4cc7519") },
  { id: 39, name: "Suede Loafers", category: "Footwear", price: 2199, original: 3299, rating: 4.4, isNew: false, sizes: ["M","L"], image: unsplash("1614252235316-8c857d38b5f4") },
  { id: 40, name: "Formal Shoes", category: "Footwear", price: 2699, original: 4199, rating: 4.6, isNew: false, sizes: ["M","L","XL"], image: unsplash("1533867617858-e7b97e060509") },
  { id: 41, name: "Comfort Sandals", category: "Footwear", price: 899, original: 1499, rating: 4.2, isNew: true, sizes: ["S","M","L"], image: unsplash("1603487742131-4160ec999306") },
  { id: 42, name: "Ankle Boots", category: "Footwear", price: 3199, original: 4999, rating: 4.7, isNew: true, sizes: ["S","M","L"], image: unsplash("1608256246200-53e635b5b65f") },
  // ACCESSORIES
  { id: 43, name: "Leather Wallet", category: "Accessories", price: 799, original: 1299, rating: 4.5, isNew: false, sizes: ["M"], image: unsplash("1627123424574-724758594e93") },
  { id: 44, name: "Classic Sunglasses", category: "Accessories", price: 1199, original: 1999, rating: 4.4, isNew: true, sizes: ["M"], image: unsplash("1572635196237-14b3f281503f") },
  { id: 45, name: "Analog Watch", category: "Accessories", price: 3499, original: 4999, rating: 4.8, isNew: false, sizes: ["M"], image: unsplash("1524592094714-0f0654e20314") },
  { id: 46, name: "Everyday Backpack", category: "Accessories", price: 1599, original: 2499, rating: 4.6, isNew: true, sizes: ["M"], image: unsplash("1553062407-98eeb64c6a62") },
  { id: 47, name: "Baseball Cap", category: "Accessories", price: 499, original: 799, rating: 4.2, isNew: false, sizes: ["M"], image: unsplash("1588850561407-ed78c282e89b") },
  { id: 48, name: "Leather Belt", category: "Accessories", price: 699, original: 1199, rating: 4.3, isNew: false, sizes: ["M"], image: unsplash("1624222247344-550fb60583dc") },
  { id: 49, name: "Fashion Bracelet", category: "Accessories", price: 599, original: 999, rating: 4.4, isNew: true, sizes: ["M"], image: unsplash("1611591437281-460bfbe1220a") }
];

// Category cards on the home page
const categories = [
  { name: "MEN", filter: "Men", desc: "Smart casuals & streetwear", image: unsplash("1596755094514-f87e34085b2c") },
  { name: "WOMEN", filter: "Women", desc: "Ethnic, western & party wear", image: "images/women.jpg" },
  { name: "KIDS", filter: "Kids", desc: "Fun, comfy & colourful", image: unsplash("1519689680058-324335c77eba") },
  { name: "FOOTWEAR", filter: "footwear", desc: "Sneakers, heels & more", image: "images/footwear.jpg" },
  { name: "ACCESSORIES", filter: "accessories", desc: "Bags, watches & shades", image: "images/accessories.jpg" }
];

/* ---------- 2. APP STATE (saved in localStorage) ---------- */
let cart = JSON.parse(localStorage.getItem("trendoraCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("trendoraWishlist")) || [];
let searchText = "";
let selectedSize = "All";
let keywordFilter = ""; // used for Footwear / Accessories category cards

// Short helper to get an element by id
function $(id) { return document.getElementById(id); }

function saveCart() { localStorage.setItem("trendoraCart", JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem("trendoraWishlist", JSON.stringify(wishlist)); }

// Format a number as Indian Rupees
function rupees(amount) { return "₹" + amount.toLocaleString("en-IN"); }
function discountPercent(p) { return Math.round((1 - p.price / p.original) * 100); }
function stars(rating) { return "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating)); }

/* ---------- 3. PAGE NAVIGATION ---------- */
// Shows one "page" (section with class .view) and hides the rest
function showView(name) {
  document.querySelectorAll(".view").forEach(function (v) { v.classList.remove("active"); });
  $(name + "Page").classList.add("active");
  window.scrollTo(0, 0);
}

// Any element with data-go="auth" / "landing" switches page
document.querySelectorAll("[data-go]").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const target = el.dataset.go;
    // If already logged in, buttons on landing page go straight to the store
    if (target === "auth" && getCurrentUser()) { openStore(); return; }
    showView(target);
  });
});

/* ---------- 4. TOAST NOTIFICATIONS ---------- */
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  $("toastWrap").appendChild(toast);
  setTimeout(function () { toast.remove(); }, 2700);
}

/* ---------- 5. AUTHENTICATION (Sign In / Sign Up) ---------- */
function getCurrentUser() { return JSON.parse(localStorage.getItem("trendoraCurrentUser")); }
function getUsers() { return JSON.parse(localStorage.getItem("trendoraUsers")) || []; }

// Switch between Sign In and Sign Up tabs
function switchTab(showSignUp) {
  $("signInTab").classList.toggle("active", !showSignUp);
  $("signUpTab").classList.toggle("active", showSignUp);
  $("tabIndicator").classList.toggle("right", showSignUp);
  $("signInForm").classList.toggle("active", !showSignUp);
  $("signUpForm").classList.toggle("active", showSignUp);
}
$("signInTab").addEventListener("click", function () { switchTab(false); });
$("signUpTab").addEventListener("click", function () { switchTab(true); });

// Show / hide password buttons
document.querySelectorAll(".toggle-pass").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const input = btn.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
    btn.textContent = input.type === "password" ? "Show" : "Hide";
  });
});

// Display or clear an error under a form field
function setError(inputId, message) {
  const field = $(inputId).closest(".field");
  field.classList.toggle("error", !!message);
  field.querySelector("small").textContent = message || "";
  return !message; // true = valid
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// SIGN IN
$("signInForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = $("loginEmail").value.trim().toLowerCase();
  const password = $("loginPassword").value;
  let ok = true;
  ok = setError("loginEmail", !email ? "Email is required" : !emailPattern.test(email) ? "Enter a valid email" : "") && ok;
  ok = setError("loginPassword", !password ? "Password is required" : password.length < 8 ? "Password must be at least 8 characters" : "") && ok;
  if (!ok) return;

  const user = getUsers().find(function (u) { return u.email === email; });
  if (!user) { setError("loginEmail", "No account found. Please sign up first."); return; }
  if (user.password !== password) { setError("loginPassword", "Incorrect password"); return; }

  localStorage.setItem("trendoraCurrentUser", JSON.stringify({ name: user.name, email: user.email, phone: user.phone }));
  if ($("rememberMe").checked) localStorage.setItem("trendoraRemember", email);
  showToast("Welcome back, " + user.name + "! 👋");
  openStore();
});

// SIGN UP
$("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = $("signupName").value.trim();
  const email = $("signupEmail").value.trim().toLowerCase();
  const phone = $("signupPhone").value.trim();
  const password = $("signupPassword").value;
  const confirm = $("signupConfirm").value;
  let ok = true;
  ok = setError("signupName", name ? "" : "Full name is required") && ok;
  ok = setError("signupEmail", !email ? "Email is required" : !emailPattern.test(email) ? "Enter a valid email" : "") && ok;
  ok = setError("signupPhone", !phone ? "Phone number is required" : !/^\d{10}$/.test(phone) ? "Enter a 10-digit phone number" : "") && ok;
  ok = setError("signupPassword", password.length < 8 ? "Password must be at least 8 characters" : "") && ok;
  ok = setError("signupConfirm", !confirm ? "Please confirm your password" : confirm !== password ? "Passwords do not match" : "") && ok;
  ok = setError("signupTerms", $("signupTerms").checked ? "" : "Please accept the Terms & Conditions") && ok;
  if (!ok) return;

  const users = getUsers();
  if (users.some(function (u) { return u.email === email; })) { setError("signupEmail", "This email is already registered"); return; }
  users.push({ name: name, email: email, phone: phone, password: password });
  localStorage.setItem("trendoraUsers", JSON.stringify(users));
  localStorage.setItem("trendoraCurrentUser", JSON.stringify({ name: name, email: email, phone: phone }));
  showToast("Account created! Welcome to Trendora 🎉");
  openStore();
});

$("forgotLink").addEventListener("click", function (e) {
  e.preventDefault();
  showToast("Password reset link sent to your email (demo)");
});

// Pre-fill remembered email
if (localStorage.getItem("trendoraRemember")) {
  $("loginEmail").value = localStorage.getItem("trendoraRemember");
  $("rememberMe").checked = true;
}

// LOGOUT
$("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("trendoraCurrentUser");
  $("profileMenu").classList.remove("open");
  showToast("You have been logged out");
  showView("landing");
});

// Open the main store page
function openStore() {
  const user = getCurrentUser();
  $("userName").textContent = user ? user.name.split(" ")[0] : "Guest";
  showView("store");
  setTimeout(revealOnScroll, 100);
}

/* ---------- 6. RENDERING PRODUCTS ---------- */
// Returns the HTML for one product card
function productCardHTML(p) {
  const liked = wishlist.includes(p.id);
  return (
    '<div class="product-card">' +
      '<div class="product-img" data-open="' + p.id + '">' +
        '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" onerror="this.onerror=null;this.src=\'' + categoryImages[p.category] + '\'" />' +
        (p.isNew ? '<span class="tag-new">NEW</span>' : "") +
        '<span class="tag-off">' + discountPercent(p) + '% OFF</span>' +
        '<button class="wish-btn ' + (liked ? "active" : "") + '" data-wish="' + p.id + '">' + (liked ? "♥" : "♡") + "</button>" +
      "</div>" +
      '<div class="product-body">' +
        '<p class="product-cat">' + p.category + "</p>" +
        '<h4 class="product-name" data-open="' + p.id + '">' + p.name + "</h4>" +
        '<div class="rating">' + stars(p.rating) + " <span>" + p.rating + "</span></div>" +
        '<div class="price-row"><span class="price">' + rupees(p.price) + '</span><span class="old-price">' + rupees(p.original) +
        '</span><span class="discount">' + discountPercent(p) + "% off</span></div>" +
        '<button class="add-btn" data-add="' + p.id + '">Add to Cart</button>' +
      "</div>" +
    "</div>"
  );
}

function renderCategories() {
  $("categoryGrid").innerHTML = categories.map(function (c) {
    return '<div class="category-card" data-cat="' + c.filter + '"><img src="' + c.image + '" alt="' + c.name + '" loading="lazy" />' +
      '<div class="category-info"><h3>' + c.name + "</h3><p>" + c.desc + '</p><button class="btn btn-primary">Shop Now</button></div></div>';
  }).join("");
}

function renderNewArrivals() {
  $("newGrid").innerHTML = products.filter(function (p) { return p.isNew; }).slice(0, 8).map(productCardHTML).join("");
}

// Apply search + filters + sort, then draw the main product grid
function renderProducts() {
  const category = $("filterCategory").value;
  const maxPrice = Number($("filterPrice").value);
  const minRating = Number($("filterRating").value);
  const sortBy = $("sortSelect").value;

  let list = products.filter(function (p) {
    const text = (p.name + " " + p.category).toLowerCase();
    return (category === "All" || p.category === category) &&
      p.price <= maxPrice &&
      p.rating >= minRating &&
      (selectedSize === "All" || p.sizes.includes(selectedSize)) &&
      text.includes(searchText) &&
      (!keywordFilter || keywordMatches(p, keywordFilter));
  });

  if (sortBy === "low") list.sort(function (a, b) { return a.price - b.price; });
  if (sortBy === "high") list.sort(function (a, b) { return b.price - a.price; });
  if (sortBy === "rating") list.sort(function (a, b) { return b.rating - a.rating; });
  if (sortBy === "new") list.sort(function (a, b) { return b.isNew - a.isNew; });

  $("productGrid").innerHTML = list.map(productCardHTML).join("");
  $("resultCount").textContent = list.length + " product" + (list.length === 1 ? "" : "s");
  $("noResults").classList.toggle("show", list.length === 0);
}

// Footwear / accessories are spread across categories, so match by name
function keywordMatches(p, keyword) {
  if (p.category.toLowerCase() === keyword) return true;
  const words = keyword === "footwear" ? ["sneakers", "heels", "shoes"] : ["handbag"];
  return words.some(function (w) { return p.name.toLowerCase().includes(w); });
}

/* ---------- 7. FILTERS, SEARCH & SORT EVENTS ---------- */
["filterCategory", "filterRating", "sortSelect"].forEach(function (id) {
  $(id).addEventListener("change", function () { keywordFilter = ""; updateShopTitle(); renderProducts(); });
});
$("filterPrice").addEventListener("input", function () {
  $("priceLabel").textContent = $("filterPrice").value;
  renderProducts();
});
document.querySelectorAll("#filterSize button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll("#filterSize button").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    selectedSize = btn.dataset.size;
    renderProducts();
  });
});
$("resetFilters").addEventListener("click", function () {
  $("filterCategory").value = "All";
  $("filterPrice").value = 5000; $("priceLabel").textContent = 5000;
  $("filterRating").value = "0"; $("sortSelect").value = "recommended";
  $("searchInput").value = ""; searchText = ""; keywordFilter = "";
  selectedSize = "All";
  document.querySelectorAll("#filterSize button").forEach(function (b) { b.classList.toggle("active", b.dataset.size === "All"); });
  updateShopTitle(); renderProducts();
});

// Live search while typing
$("searchInput").addEventListener("input", function () {
  searchText = $("searchInput").value.trim().toLowerCase();
  renderProducts();
});
$("searchInput").addEventListener("keydown", function (e) { if (e.key === "Enter") scrollToSection("shop"); });
$("searchBtn").addEventListener("click", function () {
  if ($("searchInput").value) scrollToSection("shop"); else $("searchInput").focus();
});

function updateShopTitle() {
  const c = $("filterCategory").value;
  $("shopTitle").textContent = keywordFilter ? (keywordFilter === "footwear" ? "Footwear" : "Accessories") : c === "All" ? "All Products" : c + "'s Collection";
}

// Set a category filter and jump to the shop section
function filterByCategory(value) {
  if (value === "footwear" || value === "accessories") { $("filterCategory").value = "All"; keywordFilter = value; }
  else { $("filterCategory").value = value; keywordFilter = ""; }
  updateShopTitle(); renderProducts(); scrollToSection("shop");
}

function scrollToSection(id) {
  $("navLinks").classList.remove("open");
  if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  $(id).scrollIntoView({ behavior: "smooth" });
}

/* ---------- 8. CLICK HANDLING (event delegation) ---------- */
document.addEventListener("click", function (e) {
  const t = e.target;

  // Wishlist heart
  const wishBtn = t.closest("[data-wish]");
  if (wishBtn) { e.stopPropagation(); toggleWishlist(Number(wishBtn.dataset.wish)); return; }

  // Add to cart from card
  const addBtn = t.closest("[data-add]");
  if (addBtn) { addToCart(Number(addBtn.dataset.add), "M", 1); return; }

  // Open product details
  const openEl = t.closest("[data-open]");
  if (openEl) { openProductModal(Number(openEl.dataset.open)); return; }

  // Category card
  const catCard = t.closest("[data-cat]");
  if (catCard) { filterByCategory(catCard.dataset.cat); return; }

  // Nav links with category filter
  const filterLink = t.closest("[data-filter]");
  if (filterLink) { e.preventDefault(); filterByCategory(filterLink.dataset.filter); return; }

  // Nav links that scroll
  const scrollLink = t.closest("[data-scroll]");
  if (scrollLink) { e.preventDefault(); scrollToSection(scrollLink.dataset.scroll); return; }

  // Close profile menu when clicking outside
  if (!t.closest(".profile")) $("profileMenu").classList.remove("open");
});

$("profileBtn").addEventListener("click", function () { $("profileMenu").classList.toggle("open"); });
$("hamburger").addEventListener("click", function () { $("navLinks").classList.toggle("open"); });

/* ---------- 9. WISHLIST ---------- */
function toggleWishlist(id) {
  const product = products.find(function (p) { return p.id === id; });
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(function (w) { return w !== id; });
    showToast("Removed from wishlist");
  } else {
    wishlist.push(id);
    showToast("♥ " + product.name + " added to wishlist");
  }
  saveWishlist();
  updateBadges();
  // Update every heart for this product without re-rendering
  document.querySelectorAll('[data-wish="' + id + '"]').forEach(function (btn) {
    const liked = wishlist.includes(id);
    btn.classList.toggle("active", liked);
    btn.textContent = liked ? "♥" : "♡";
  });
  if (drawerMode === "wishlist") renderWishlistDrawer();
}

/* ---------- 10. CART ---------- */
function addToCart(id, size, qty) {
  const existing = cart.find(function (item) { return item.id === id && item.size === size; });
  if (existing) existing.qty += qty;
  else cart.push({ id: id, size: size, qty: qty });
  saveCart();
  updateBadges(true);
  const product = products.find(function (p) { return p.id === id; });
  showToast("✓ " + product.name + " added to cart");
  if (drawerMode === "cart") renderCart();
}

function changeQty(index, amount) {
  cart[index].qty += amount;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart(); updateBadges(); renderCart();
}
function removeItem(index) {
  cart.splice(index, 1);
  saveCart(); updateBadges(); renderCart();
  showToast("Item removed from cart");
}

// Calculates subtotal, discount, delivery and total
function cartTotals() {
  let mrp = 0, subtotal = 0;
  cart.forEach(function (item) {
    const p = products.find(function (x) { return x.id === item.id; });
    mrp += p.original * item.qty;
    subtotal += p.price * item.qty;
  });
  const extra = subtotal > 2999 ? Math.round(subtotal * 0.1) : 0; // "Buy more save more"
  const delivery = subtotal === 0 || subtotal >= 999 ? 0 : 99;
  return { mrp: mrp, discount: mrp - subtotal + extra, delivery: delivery, total: subtotal - extra + delivery };
}

function totalsHTML() {
  const t = cartTotals();
  return '<div class="total-row"><span>Subtotal (MRP)</span><span>' + rupees(t.mrp) + "</span></div>" +
    '<div class="total-row"><span>Discount</span><span style="color:#4cd38a">− ' + rupees(t.discount) + "</span></div>" +
    '<div class="total-row"><span>Delivery</span><span>' + (t.delivery ? rupees(t.delivery) : "FREE") + "</span></div>" +
    '<div class="total-row grand"><span>Total</span><span>' + rupees(t.total) + "</span></div>";
}

let drawerMode = ""; // "cart" or "wishlist"

function renderCart() {
  $("drawerTitle").textContent = "Your Cart";
  if (cart.length === 0) {
    $("cartItems").innerHTML = '<div class="empty">🛍<br><br>Your cart is empty</div>';
    $("cartFoot").innerHTML = "";
    return;
  }
  $("cartItems").innerHTML = cart.map(function (item, i) {
    const p = products.find(function (x) { return x.id === item.id; });
    return '<div class="cart-item"><img src="' + p.image + '" alt="' + p.name + '" onerror="this.src=\'' + categoryImages[p.category] + '\'" />' +
      "<div><h5>" + p.name + "</h5><small>Size: " + item.size + " · " + rupees(p.price) + "</small><br>" +
      '<div class="qty"><button onclick="changeQty(' + i + ',-1)">−</button>' + item.qty + '<button onclick="changeQty(' + i + ',1)">+</button></div></div>' +
      '<button class="remove-btn" onclick="removeItem(' + i + ')">Remove</button></div>';
  }).join("");
  $("cartFoot").innerHTML = totalsHTML() + '<button class="btn btn-primary btn-block" onclick="goToCheckout()">Proceed to Checkout</button>';
}

function renderWishlistDrawer() {
  $("drawerTitle").textContent = "Your Wishlist";
  $("cartFoot").innerHTML = "";
  if (wishlist.length === 0) { $("cartItems").innerHTML = '<div class="empty">♡<br><br>Your wishlist is empty</div>'; return; }
  $("cartItems").innerHTML = wishlist.map(function (id) {
    const p = products.find(function (x) { return x.id === id; });
    return '<div class="cart-item"><img src="' + p.image + '" alt="' + p.name + '" onerror="this.src=\'' + categoryImages[p.category] + '\'" />' +
      "<div><h5>" + p.name + "</h5><small>" + rupees(p.price) + '</small><br><button class="btn-link" data-add="' + p.id + '">+ Add to cart</button></div>' +
      '<button class="remove-btn" data-wish="' + p.id + '">Remove</button></div>';
  }).join("");
}

function openDrawer(mode) {
  drawerMode = mode;
  mode === "cart" ? renderCart() : renderWishlistDrawer();
  $("cartDrawer").classList.add("open");
  $("overlay").classList.add("show");
}
function closeDrawer() {
  drawerMode = "";
  $("cartDrawer").classList.remove("open");
  $("overlay").classList.remove("show");
}
$("cartBtn").addEventListener("click", function () { openDrawer("cart"); });
$("wishlistBtn").addEventListener("click", function () { openDrawer("wishlist"); });
$("closeCart").addEventListener("click", closeDrawer);
$("overlay").addEventListener("click", closeDrawer);

// Update the little number bubbles on the cart & wishlist icons
function updateBadges(animate) {
  const count = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
  $("cartCount").textContent = count;
  $("wishCount").textContent = wishlist.length;
  if (animate) {
    $("cartCount").classList.remove("bump");
    void $("cartCount").offsetWidth; // restart animation
    $("cartCount").classList.add("bump");
  }
}

/* ---------- 11. PRODUCT DETAIL MODAL ---------- */
let modalSize = "M";
let modalQty = 1;

function openProductModal(id) {
  const p = products.find(function (x) { return x.id === id; });
  modalSize = p.sizes[0];
  modalQty = 1;
  $("modalBox").innerHTML =
    '<button class="icon-btn modal-close" onclick="closeModal()">✕</button>' +
    '<img src="' + p.image + '" alt="' + p.name + '" onerror="this.src=\'' + categoryImages[p.category] + '\'" />' +
    '<div class="modal-info">' +
      '<p class="eyebrow">' + p.category + (p.isNew ? " · New Arrival" : "") + "</p>" +
      "<h2>" + p.name + "</h2>" +
      '<div class="rating">' + stars(p.rating) + " <span>" + p.rating + " / 5</span></div>" +
      '<div class="price-row"><span class="price" style="font-size:1.6rem">' + rupees(p.price) + '</span><span class="old-price">' + rupees(p.original) +
      '</span><span class="discount">' + discountPercent(p) + "% off</span></div>" +
      '<p class="desc">Crafted from premium quality fabric, the ' + p.name + " blends comfort with modern style. Perfect for everyday wear and special occasions alike. 10-Days Easy Returns.</p>" +
      "<h4>Select Size</h4>" +
      '<div class="size-pick">' + p.sizes.map(function (s) {
        return '<button class="' + (s === modalSize ? "active" : "") + '" onclick="pickSize(this,\'' + s + '\')">' + s + "</button>";
      }).join("") + "</div>" +
      "<h4>Quantity</h4>" +
      '<div class="qty"><button onclick="changeModalQty(-1)">−</button><span id="modalQty">1</span><button onclick="changeModalQty(1)">+</button></div>' +
      '<button class="btn btn-primary btn-block" style="margin-top:22px" onclick="addFromModal(' + p.id + ')">Add to Cart</button>' +
      '<button class="btn btn-outline btn-block" data-wish="' + p.id + '">' + (wishlist.includes(p.id) ? "♥" : "♡") + " Wishlist</button>" +
    "</div>";
  $("productModal").classList.add("open");
}
function pickSize(btn, size) {
  modalSize = size;
  btn.parentElement.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
  btn.classList.add("active");
}
function changeModalQty(amount) {
  modalQty = Math.max(1, modalQty + amount);
  $("modalQty").textContent = modalQty;
}
function addFromModal(id) { addToCart(id, modalSize, modalQty); closeModal(); }
function closeModal() { $("productModal").classList.remove("open"); }
$("productModal").addEventListener("click", function (e) { if (e.target.id === "productModal") closeModal(); });
document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeModal(); closeDrawer(); } });

/* ---------- 12. CHECKOUT ---------- */
function goToCheckout() {
  if (cart.length === 0) { showToast("Your cart is empty"); return; }
  closeDrawer();
  // Pre-fill customer details from logged-in user
  const user = getCurrentUser();
  if (user) { $("coName").value = user.name; $("coEmail").value = user.email; $("coPhone").value = user.phone || ""; }
  renderSummary();
  showView("checkout");
}

function renderSummary() {
  $("summaryItems").innerHTML = cart.map(function (item) {
    const p = products.find(function (x) { return x.id === item.id; });
    return '<div class="summary-item"><img src="' + p.image + '" alt="" onerror="this.src=\'' + categoryImages[p.category] + '\'" /><div>' + p.name +
      "<br><small style=\"color:var(--muted)\">Size " + item.size + " × " + item.qty + "</small></div><b>" + rupees(p.price * item.qty) + "</b></div>";
  }).join("");
  $("summaryTotals").innerHTML = totalsHTML();
}

$("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let ok = true;
  ["coName", "coHouse", "coStreet", "coCity", "coState"].forEach(function (id) {
    ok = setError(id, $(id).value.trim() ? "" : "This field is required") && ok;
  });
  const email = $("coEmail").value.trim();
  ok = setError("coEmail", emailPattern.test(email) ? "" : "Enter a valid email") && ok;
  ok = setError("coPhone", /^\d{10}$/.test($("coPhone").value.trim()) ? "" : "Enter a 10-digit phone number") && ok;
  ok = setError("coPin", /^\d{6}$/.test($("coPin").value.trim()) ? "" : "Enter a 6-digit pincode") && ok;
  if (!ok) { showToast("Please fill all details correctly"); return; }

  // Generate a simple order ID like TRD-482913
  const orderId = "TRD-" + Math.floor(100000 + Math.random() * 900000);
  $("orderId").textContent = orderId;
  cart = []; saveCart(); updateBadges();
  $("checkoutForm").reset();
  showView("success");
});

$("backToShop").addEventListener("click", openStore);
$("successHome").addEventListener("click", openStore);

/* ---------- 13. COUNTDOWN TIMER ---------- */
// Sale ends at midnight tonight
function updateCountdown() {
  const now = new Date();
  const end = new Date(); end.setHours(24, 0, 0, 0);
  const diff = Math.max(0, end - now);
  const h = Math.floor(diff / 3600000), m = Math.floor((diff % 3600000) / 60000), s = Math.floor((diff % 60000) / 1000);
  $("cdHours").textContent = String(h).padStart(2, "0");
  $("cdMins").textContent = String(m).padStart(2, "0");
  $("cdSecs").textContent = String(s).padStart(2, "0");
}
setInterval(updateCountdown, 1000);

/* ---------- 14. NEWSLETTER ---------- */
$("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!emailPattern.test($("newsEmail").value.trim())) { showToast("Please enter a valid email"); return; }
  $("newsEmail").value = "";
  showToast("🎉 Subscribed! Watch your inbox for offers.");
});

/* ---------- 15. SCROLL EFFECTS ---------- */
// Sticky header becomes solid when scrolling
window.addEventListener("scroll", function () {
  $("header").classList.toggle("scrolled", window.scrollY > 40);
  revealOnScroll();
});
// Sections with class .reveal slide up when they enter the screen
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add("visible");
  });
}

/* ---------- 16. START THE APP ---------- */
renderCategories();
renderNewArrivals();
renderProducts();
updateBadges();
updateCountdown();

// If user is already logged in, skip straight to the store
if (getCurrentUser()) {
  openStore();
} else {
  showView("landing");  // ← ADD THIS LINE
}

/* ---------- PERSONAL SOCIAL LINKS (footer "Connect With Me") ---------- */
// Replace these with your real accounts. The WhatsApp number is only used
// when the button is clicked and is never shown on the page.
const SOCIAL = {
  gmail: "alokgupta1269@gmail.com",           // ✅ Your email
  github: "https://github.com/alokgupta1234", // ✅ Your GitHub
  linkedin: "https://linkedin.com/in/alok-gupta-3b348031a", // ✅ Your LinkedIn
  twitter: "https://x.com/AlokGupta_12",     // ✅ Your Twitter/X
  youtube: "https://www.youtube.com",         // ✅ Opens YouTube normally
  whatsapp: "917579928343"                    // Your WhatsApp
};
document.querySelectorAll("[data-social]").forEach(function (a) {
  const k = a.dataset.social;
  if (k === "gmail") a.href = "mailto:" + SOCIAL.gmail;
  else if (k !== "whatsapp") a.href = SOCIAL[k];
});
const waBtn = document.querySelector('[data-social="whatsapp"]');
if (waBtn) waBtn.addEventListener("click", function (e) {
  e.preventDefault(); e.stopPropagation();
  window.open("https://wa.me/" + SOCIAL.whatsapp, "_blank", "noopener");
});

/* ---------- PREMIUM CUSTOM CURSOR (mouse devices only) ---------- */
(function () {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const dot = document.createElement("div"); dot.className = "cursor-dot";
  const ring = document.createElement("div"); ring.className = "cursor-ring";
  document.body.append(dot, ring);
  document.body.classList.add("has-cursor");
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  const hoverSel = "a, button, .product-card, .product-img, .category-card, [data-open], [data-add], [data-wish], .socials a, select, label";
  let magnet = null;
  document.addEventListener("mousemove", function (e) {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = "translate(" + mx + "px," + my + "px)";
    const el = e.target.closest ? e.target.closest(hoverSel) : null;
    ring.classList.toggle("hover", !!el);
    ring.classList.toggle("on-image", !!(e.target.closest && e.target.closest(".product-img, .category-card")));
    const m = e.target.closest ? e.target.closest(".btn, .add-btn, .wish-btn, .icon-btn, .socials a") : null;
    if (magnet && magnet !== m) { magnet.style.translate = ""; }
    magnet = m;
    if (m) {
      const r = m.getBoundingClientRect();
      m.style.translate = ((mx - r.left - r.width / 2) * 0.18) + "px " + ((my - r.top - r.height / 2) * 0.25) + "px";
    }
  });
  document.addEventListener("mousedown", function () { ring.classList.add("down"); });
  document.addEventListener("mouseup", function () { ring.classList.remove("down"); });
  document.addEventListener("mouseleave", function () { dot.style.opacity = ring.style.opacity = 0; });
  document.addEventListener("mouseenter", function () { dot.style.opacity = ring.style.opacity = 1; });
  (function loop() {
    rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
    ring.style.transform = "translate(" + rx + "px," + ry + "px)";
    requestAnimationFrame(loop);
  })();
})();
