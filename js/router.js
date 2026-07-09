// js/router.js
// ============================================
// Simple SPA Router for Tab Navigation
// ============================================

class Router {
    constructor(config) {
        this.config = config;
        this.currentPage = 'home';
        this.pages = {
            home: 'index.html',
            blog: 'blog.html',
            press: 'press.html'
        };
        this.init();
    }

    init() {
        this.detectCurrentPage();
        this.setupNavigation();
        this.setupPopState();
    }

    detectCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().replace('.html', '');
        
        if (this.pages[page]) {
            this.currentPage = page;
        } else if (path.endsWith('/') || path.endsWith('index.html')) {
            this.currentPage = 'home';
        }
        
        this.updateActiveTab();
    }

    setupNavigation() {
        document.querySelectorAll('.nav__tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const page = tab.dataset.page;
                
                if (page === 'contact') {
                    // Scroll to contact section on same page
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
                
                if (page && this.pages[page]) {
                    this.navigateTo(page);
                }
            });
        });
    }

    navigateTo(page) {
        if (this.currentPage === page) return;
        
        // Add transition effect
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.2s ease';
        
        setTimeout(() => {
            window.location.href = this.pages[page];
        }, 200);
    }

    setupPopState() {
        window.addEventListener('popstate', () => {
            this.detectCurrentPage();
        });
    }

    updateActiveTab() {
        document.querySelectorAll('.nav__tab').forEach(tab => {
            const tabPage = tab.dataset.page;
            
            if (tabPage === this.currentPage || 
                (this.currentPage === 'home' && tabPage === 'home')) {
                tab.classList.add('nav__tab--active');
            } else {
                tab.classList.remove('nav__tab--active');
            }
        });
    }

    getCurrentPage() {
        return this.currentPage;
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Router;
}