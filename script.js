/* =========================================
   Design System & Variables
   ========================================= */
:root {
    /* Colors inspired by the poster */
    --red: #ff3333;
    --red-hover: #e60000;
    --blue: #2a3dff;
    --blue-dark: #1a2acc;
    --beige: #fff5e1;
    --beige-dark: #f0e6d2;
    --black: #1a1a1a;
    --white: #ffffff;
    
    /* Typography */
    --font-heading: 'Outfit', 'Noto Sans TC', sans-serif;
    --font-body: 'Noto Sans TC', sans-serif;
    
    /* Spacing */
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;
    
    /* Radii & Shadows */
    --radius: 12px;
    --radius-lg: 24px;
    --shadow: 8px 8px 0px var(--black);
    --shadow-hover: 12px 12px 0px var(--black);
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* =========================================
   Reset & Base Styles
   ========================================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    background-color: var(--beige);
    color: var(--black);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

/* =========================================
   Typography
   ========================================= */
h1, h2, h3, h4 {
    font-family: var(--font-heading);
    font-weight: 900;
    line-height: 1.2;
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
}

.section-header h2 {
    font-size: 3rem;
    color: var(--red);
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 3px 3px 0px var(--black);
}

.section-header p {
    font-size: 1.2rem;
    font-family: var(--font-heading);
    font-weight: 800;
    color: var(--blue);
    letter-spacing: 4px;
    margin-top: -5px;
}

/* =========================================
   Buttons
   ========================================= */
.btn-primary {
    display: inline-block;
    background-color: var(--blue);
    color: var(--white);
    font-family: var(--font-heading);
    font-weight: 800;
    text-decoration: none;
    padding: 12px 28px;
    border: 3px solid var(--black);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
}

.btn-primary:hover {
    transform: translate(-4px, -4px);
    box-shadow: var(--shadow-hover);
    background-color: var(--red);
}

.btn-large {
    font-size: 1.5rem;
    padding: 20px 40px;
    border-radius: var(--radius-lg);
}

/* =========================================
   Navigation
   ========================================= */
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(255, 245, 225, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 3px solid var(--black);
    z-index: 1000;
    padding: var(--spacing-md) 0;
}

.navbar {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--red);
    text-shadow: 2px 2px 0px var(--black);
}

.logo span {
    color: var(--blue);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: var(--spacing-lg);
}

.nav-links a {
    text-decoration: none;
    color: var(--black);
    font-weight: 700;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    position: relative;
}

.nav-links a:hover {
    color: var(--red);
}

.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    background: var(--blue);
    bottom: -5px;
    left: 0;
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

@media (max-width: 768px) {
    .nav-links { display: none; }
    .nav-btn { display: none; }
}

/* =========================================
   Hero Section
   ========================================= */
.hero {
    min-height: 100vh;
    padding-top: 120px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero-title-img {
    margin: 0 auto var(--spacing-lg) auto;
    max-width: 600px;
    width: 100%;
    transform: rotate(-2deg);
}

.hero-title-img img {
    width: 100%;
    height: auto;
    filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.1));
}

.hero .subtitle {
    font-size: 2rem;
    font-family: var(--font-heading);
    color: var(--blue);
    margin-bottom: var(--spacing-sm);
    letter-spacing: 2px;
    text-shadow: 2px 2px 0px var(--black);
}

.hero-dates {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
}

.date-box {
    background: var(--white);
    border: 3px solid var(--black);
    padding: 10px 20px;
    border-radius: var(--radius);
    text-align: center;
    box-shadow: 4px 4px 0px var(--black);
    transform: rotate(2deg);
}

.date-box:last-child {
    transform: rotate(-2deg);
    background: var(--blue);
    color: var(--white);
}

.date-box span { display: block; }
.date-box .month { font-weight: 700; font-size: 1rem; }
.date-box .day { font-size: 2.5rem; font-weight: 900; line-height: 1; font-family: var(--font-heading); }
.date-box .weekday { font-size: 0.9rem; font-weight: 700; }

.hero-dates .arrow {
    font-size: 2rem;
    font-weight: 900;
    color: var(--red);
}

/* Abstract shapes for background */
.hero-graphics {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 1;
    pointer-events: none;
}

.hero-img {
    position: absolute;
    filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.1));
    transition: transform 0.5s ease;
    z-index: 1;
}

.hero-img.img-1 {
    width: clamp(200px, 30vw, 400px);
    right: 2%;
    top: 50%;
    transform: translateY(-50%) rotate(5deg);
}

.hero-img.img-2 {
    width: clamp(150px, 25vw, 350px);
    left: 2%;
    top: 60%;
    transform: translateY(-50%) rotate(-5deg);
}

.hero-img:hover {
    transform: scale(1.05) rotate(0deg);
}

/* =========================================
   Marquee
   ========================================= */
.marquee-container {
    background-color: var(--black);
    color: var(--white);
    padding: 15px 0;
    overflow: hidden;
    border-top: 3px solid var(--black);
    border-bottom: 3px solid var(--black);
    white-space: nowrap;
    position: relative;
    transform: rotate(-1deg);
    margin: var(--spacing-xl) -20px;
    width: calc(100% + 40px);
}

.marquee {
    display: inline-block;
    animation: marquee 20s linear infinite;
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 2px;
}

.marquee span { margin-right: 50px; }

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

/* =========================================
   Info Section
   ========================================= */
.info {
    padding: var(--spacing-xl) 0;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
}

.info-card {
    background: var(--white);
    border: 3px solid var(--black);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    text-align: center;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.info-card:nth-child(even) { transform: translateY(20px); }
.info-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    background: var(--beige-dark);
}

.info-card .icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
}

.info-card h3 {
    color: var(--blue);
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
}

.info-card p {
    font-weight: 700;
    font-size: 1.2rem;
}

.info-card .small-text {
    font-size: 0.95rem;
    font-weight: 400;
}

/* =========================================
   Guests Section
   ========================================= */
.guests {
    padding: var(--spacing-xl) 0;
    background-color: var(--blue);
    border-top: 3px solid var(--black);
    border-bottom: 3px solid var(--black);
}

.guests .section-header h2 { color: var(--white); }
.guests .section-header p { color: var(--red); }

.guest-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.guest-card {
    background: var(--beige);
    border: 3px solid var(--black);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md);
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
}

.guest-card:hover {
    transform: translateY(-10px) rotate(2deg);
    box-shadow: var(--shadow-hover);
}

.guest-img-placeholder {
    width: 100%;
    aspect-ratio: 1;
    border-radius: var(--radius);
    border: 3px solid var(--black);
    margin-bottom: var(--spacing-md);
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%231a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>');
    background-size: 30%;
    background-position: center;
    background-repeat: no-repeat;
}

.guest-card h3 {
    font-size: 1.8rem;
    color: var(--black);
    margin-bottom: 5px;
}

.guest-tag {
    display: inline-block;
    background: var(--red);
    color: var(--white);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 700;
    border: 2px solid var(--black);
}

/* =========================================
   Pricing Section
   ========================================= */
.pricing {
    padding: var(--spacing-xl) 0;
}

.alert-box {
    background-color: var(--white);
    border: 3px solid var(--black);
    padding: var(--spacing-md);
    border-radius: var(--radius);
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: var(--spacing-lg);
    box-shadow: 4px 4px 0px var(--red);
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
}

.price-card {
    background: var(--white);
    border: 3px solid var(--black);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl) var(--spacing-lg);
    text-align: center;
    box-shadow: var(--shadow);
    position: relative;
    transition: var(--transition);
}

.price-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.early-bird {
    background: var(--blue);
    color: var(--white);
}

.badge {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--black);
    color: var(--white);
    padding: 8px 24px;
    border-radius: 30px;
    font-weight: 900;
    font-family: var(--font-heading);
    letter-spacing: 1px;
    border: 3px solid var(--white);
}

.badge-accent {
    background: var(--red);
    color: var(--white);
    border-color: var(--black);
    transform: translateX(-50%) rotate(-3deg);
}

.price-card h3 {
    font-size: 1.8rem;
    margin-bottom: var(--spacing-sm);
}

.price-card .price {
    font-size: 3rem;
    font-family: var(--font-heading);
    font-weight: 900;
    line-height: 1;
    margin-bottom: var(--spacing-md);
    color: var(--red);
    text-shadow: 2px 2px 0px var(--black);
}

.early-bird .price {
    color: var(--white);
}

.price-card .price span {
    font-size: 1.5rem;
    color: inherit;
    text-shadow: none;
}

.price-card .deadline {
    font-weight: 700;
    opacity: 0.8;
}

/* Group Pricing Table */
.group-title {
    text-align: center;
    font-size: 2.5rem;
    color: var(--black);
    margin-bottom: 5px;
}

.group-subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: var(--blue);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
}

.group-pricing-table {
    background: var(--white);
    border: 3px solid var(--black);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow);
    margin-bottom: var(--spacing-xl);
}

.table-row {
    display: flex;
    border-bottom: 2px solid var(--black);
}

.table-row:last-child {
    border-bottom: none;
}

.table-header {
    background: var(--black);
    color: var(--white);
    font-weight: 900;
    font-family: var(--font-heading);
    font-size: 1.2rem;
}

.col {
    flex: 1;
    padding: 20px;
    text-align: center;
    font-weight: 700;
    border-right: 2px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
}

.col:last-child {
    border-right: none;
}

.highlight-col {
    background-color: var(--red);
    color: var(--white);
    font-size: 1.2rem;
}

.table-header .highlight-col {
    background-color: var(--red-hover);
}

@media (max-width: 768px) {
    .table-row {
        flex-direction: column;
    }
    .table-header {
        display: none;
    }
    .col {
        border-right: none;
        border-bottom: 1px solid var(--black);
        padding: 15px;
        justify-content: space-between;
    }
    .col::before {
        content: attr(data-label);
        font-weight: 900;
    }
    .col:last-child { border-bottom: none; }
}

.cta-container {
    text-align: center;
    margin-top: var(--spacing-xl);
}

/* =========================================
   Footer
   ========================================= */
.footer {
    background-color: var(--black);
    color: var(--white);
    text-align: center;
    padding: var(--spacing-xl) 0;
    border-top: 5px solid var(--red);
}

.footer h2 {
    font-size: 2rem;
    margin-bottom: var(--spacing-sm);
    color: var(--red);
}

.footer p {
    opacity: 0.8;
    margin-bottom: var(--spacing-lg);
}

.footer .copyright {
    font-size: 0.9rem;
    opacity: 0.5;
    margin-bottom: 0;
}

/* =========================================
   Animations (Triggered by JS)
   ========================================= */
.fade-in {
    opacity: 0;
    transition: opacity 0.8s ease;
}

.fade-in.visible {
    opacity: 1;
}

.slide-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-delay: var(--delay, 0s);
}

.slide-up.visible {
    opacity: 1;
    transform: translateY(0);
}
