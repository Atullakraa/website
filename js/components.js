// js/components.js
// ============================================
// Reusable UI Components
// ============================================

class Components {
    constructor(config) {
        this.config = config;
    }

    // Create Navigation
    createNavigation() {
        const { logo, menu } = this.config.navigation;
        const currentPage = this.getCurrentPage();
        
        return `
            <a href="${logo.url}" class="nav__logo">${logo.text}</a>
            <div class="nav__tabs" role="tablist">
                ${menu.map(item => `
                    <a href="${item.url}" 
                       class="nav__tab ${item.page === currentPage ? 'nav__tab--active' : ''}" 
                       data-page="${item.page}"
                       role="tab"
                       aria-selected="${item.page === currentPage}">
                        <i class="fas ${item.icon}"></i>
                        ${item.text}
                    </a>
                `).join('')}
            </div>
        `;
    }

    // Create Blog Card
    createBlogCard(post) {
        return `
            <article class="blog-card ${post.featured ? 'blog-card--featured' : ''}" 
                     data-post-id="${post.id}"
                     onclick="window.blogApp?.openPost(${post.id})">
                <div class="blog-card__meta">
                    <span class="blog-card__date">${post.displayDate}</span>
                    <span class="blog-card__read-time">${post.readTime}</span>
                </div>
                <h2 class="blog-card__title">${post.title}</h2>
                <p class="blog-card__excerpt">${post.excerpt}</p>
                <div class="blog-card__tags">
                    ${post.tags.map(tag => `<span class="blog-card__tag">${tag}</span>`).join('')}
                </div>
            </article>
        `;
    }

    // Create Blog Detail View
    createBlogDetail(post) {
        return `
            <div class="blog-detail" id="blog-detail-${post.id}">
                <a class="blog-detail__back" onclick="window.blogApp?.closePost()">
                    ← Back to all posts
                </a>
                <div class="blog-card__meta">
                    <span class="blog-card__date">${post.displayDate}</span>
                    <span class="blog-card__read-time">${post.readTime}</span>
                </div>
                <h2 class="blog-card__title" style="font-size: 2rem; margin: 1rem 0;">
                    ${post.title}
                </h2>
                <div class="blog-card__tags" style="margin-bottom: 1.5rem;">
                    ${post.tags.map(tag => `<span class="blog-card__tag">${tag}</span>`).join('')}
                </div>
                <div class="blog-detail__content">
                    ${post.fullContent}
                </div>
            </div>
        `;
    }

    // Create Press Card
    createPressCard(item) {
        return `
            <article class="press-card" data-category="${item.category}">
                <div class="press-card__outlet">
                    <div class="press-card__logo">${item.publicationLogo}</div>
                    <div>
                        <div class="press-card__outlet-name">${item.outlet}</div>
                        <span class="press-card__category">${item.category}</span>
                    </div>
                </div>
                <h3 class="press-card__headline">${item.headline}</h3>
                <p class="press-card__excerpt">${item.excerpt}</p>
                <div class="press-card__date">
                    <i class="far fa-calendar"></i>
                    ${item.date}
                </div>
            </article>
        `;
    }

    // Create Filter Tabs
    createFilterTabs(categories, activeCategory = 'All') {
        return `
            <div class="filter-tabs">
                ${categories.map(cat => `
                    <button class="filter-tab ${cat === activeCategory ? 'filter-tab--active' : ''}" 
                            data-filter="${cat}"
                            onclick="window.pressApp?.filterPress('${cat}')">
                        ${cat}
                    </button>
                `).join('')}
            </div>
        `;
    }

    // Create Contact Section
    createContactSection() {
        const { links } = this.config.social;
        const { email, availability, responseTime } = this.config.personal;
        
        return `
            <section id="contact" class="contact-section">
                <div class="section__header">
                    <i class="fas fa-link"></i> Connect & Code
                </div>
                <div class="social-links">
                    ${links.map(link => `
                        <a href="${link.url}" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               class="social-link"
                               data-platform="${link.platform}">
                                <i class="${link.icon}"></i>
                                <span>${link.platform}</span>
                                <span style="color: #888; font-weight: 300;">· ${link.username}</span>
                            </a>
                    `).join('')}
                </div>
                <div style="margin-top: 1.5rem; color: #7a7a7a; font-size: 0.9rem;">
                    <i class="fas fa-circle" style="font-size: 0.3rem; margin-right: 0.5rem; color: #4f4f4f;"></i>
                    ${responseTime} · ${availability}
                </div>
            </section>
        `;
    }

    // Create Footer
    createFooter() {
        const { copyright, links } = this.config.footer;
        
        return `
            <span>${copyright}</span>
            <div class="footer__links">
                ${links.map(link => `
                    <a href="${link.url}" class="footer__link">${link.text}</a>
                `).join('')}
            </div>
        `;
    }

    // Helper: Get current page from URL
    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().replace('.html', '');
        
        if (page === 'blog') return 'blog';
        if (page === 'press') return 'press';
        return 'home';
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Components;
}