// js/main.js
// ============================================
// Main Application - Home Page Logic
// ============================================

class MainApp {
    constructor(config) {
        this.config = config;
        this.components = new Components(config);
        this.init();
    }

    init() {
        this.renderNavigation();
        this.renderHero();
        this.renderContact();
        this.renderFooter();
        this.setupBackToTop();
        this.trackPageView();
    }

    renderNavigation() {
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.innerHTML = this.components.createNavigation();
            new Router(this.config); // Initialize router
        }
    }

    renderHero() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const { name, tagline } = this.config.personal;
        hero.innerHTML = `
            <h1 class="hero__title">${name}</h1>
            <div class="hero__subtitle">${tagline}</div>
        `;
    }

    renderContact() {
        const contactContainer = document.getElementById('contact-container');
        if (contactContainer) {
            contactContainer.innerHTML = this.components.createContactSection();
        }
    }

    renderFooter() {
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.innerHTML = this.components.createFooter();
        }
    }

    setupBackToTop() {
        const btn = document.createElement('div');
        btn.className = 'back-to-top';
        btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                btn.classList.add('back-to-top--visible');
            } else {
                btn.classList.remove('back-to-top--visible');
            }
        });
    }

    trackPageView() {
        console.log(`Page view: Home - ${this.config.personal.name}`);
        // Integrate with analytics here
    }
}

// Blog Page Application
class BlogApp {
    constructor(config) {
        this.config = config;
        this.components = new Components(config);
        this.currentPost = null;
        this.init();
    }

    init() {
        this.renderNavigation();
        this.renderBlogGrid();
        this.renderContact();
        this.renderFooter();
    }

    renderNavigation() {
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.innerHTML = this.components.createNavigation();
            new Router(this.config);
        }
    }

    renderBlogGrid() {
        const blogContainer = document.getElementById('blog-container');
        if (!blogContainer) return;

        const { posts } = this.config.blog;
        
        let html = '<div class="blog-grid">';
        posts.forEach(post => {
            html += this.components.createBlogCard(post);
        });
        html += '</div>';
        
        // Add detail containers
        posts.forEach(post => {
            html += this.components.createBlogDetail(post);
        });
        
        blogContainer.innerHTML = html;
    }

    openPost(postId) {
        // Hide all posts grid
        document.querySelector('.blog-grid').style.display = 'none';
        
        // Show selected post detail
        const detail = document.getElementById(`blog-detail-${postId}`);
        if (detail) {
            detail.classList.add('blog-detail--active');
            detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        this.currentPost = postId;
        
        // Update URL hash
        window.history.pushState({ postId }, '', `#post-${postId}`);
    }

    closePost() {
        // Show posts grid
        document.querySelector('.blog-grid').style.display = '';
        
        // Hide all details
        document.querySelectorAll('.blog-detail').forEach(detail => {
            detail.classList.remove('blog-detail--active');
        });
        
        this.currentPost = null;
        window.history.pushState({}, '', window.location.pathname);
    }

    renderContact() {
        const contactContainer = document.getElementById('contact-container');
        if (contactContainer) {
            contactContainer.innerHTML = this.components.createContactSection();
        }
    }

    renderFooter() {
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.innerHTML = this.components.createFooter();
        }
    }
}

// Press Page Application
class PressApp {
    constructor(config) {
        this.config = config;
        this.components = new Components(config);
        this.activeFilter = 'All';
        this.init();
    }

    init() {
        this.renderNavigation();
        this.renderFilters();
        this.renderPressGrid();
        this.renderContact();
        this.renderFooter();
    }

    renderNavigation() {
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.innerHTML = this.components.createNavigation();
            new Router(this.config);
        }
    }

    renderFilters() {
        const filterContainer = document.getElementById('filter-container');
        if (filterContainer) {
            filterContainer.innerHTML = this.components.createFilterTabs(
                this.config.press.categories
            );
        }
    }

    renderPressGrid(category = 'All') {
        const pressContainer = document.getElementById('press-container');
        if (!pressContainer) return;

        const { items } = this.config.press;
        
        let filteredItems = items;
        if (category !== 'All') {
            filteredItems = items.filter(item => item.category === category);
        }
        
        let html = '<div class="press-grid">';
        filteredItems.forEach(item => {
            html += this.components.createPressCard(item);
        });
        html += '</div>';
        
        // Show count
        html += `<p style="color: var(--text-dark); margin-top: 1rem; font-size: 0.9rem;">
            Showing ${filteredItems.length} of ${items.length} mentions
        </p>`;
        
        pressContainer.innerHTML = html;
        this.activeFilter = category;
    }

    filterPress(category) {
        // Update active filter button
        document.querySelectorAll('.filter-tab').forEach(btn => {
            btn.classList.toggle('filter-tab--active', btn.dataset.filter === category);
        });
        
        this.renderPressGrid(category);
    }

    renderContact() {
        const contactContainer = document.getElementById('contact-container');
        if (contactContainer) {
            contactContainer.innerHTML = this.components.createContactSection();
        }
    }

    renderFooter() {
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.innerHTML = this.components.createFooter();
        }
    }
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PORTFOLIO_CONFIG === 'undefined') {
        console.error('Configuration not loaded');
        return;
    }

    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '');

    switch(page) {
        case 'blog':
            window.blogApp = new BlogApp(PORTFOLIO_CONFIG);
            console.log('Blog page initialized');
            break;
        case 'press':
            window.pressApp = new PressApp(PORTFOLIO_CONFIG);
            console.log('Press page initialized');
            break;
        default:
            window.mainApp = new MainApp(PORTFOLIO_CONFIG);
            console.log('Home page initialized');
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MainApp, BlogApp, PressApp, Components, Router };
}