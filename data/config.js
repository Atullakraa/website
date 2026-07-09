// data/config.js
// ============================================
// PORTFOLIO CONFIGURATION - Central data store
// ============================================

const PORTFOLIO_CONFIG = {
    // Site Metadata
    site: {
        title: 'UHQ · Portfolio',
        description: 'Creative technologist & designer - Black theme portfolio',
        author: 'Atul Lakra',
        url: 'https://your-domain.com',
        language: 'en'
    },

    // Personal Information
    personal: {
        name: 'Atul Lakra',
        title: 'Creative Technologist & Designer',
        tagline: 'A guy with a computer, exploring the world of code and ethical hacking. Passionate about Web3, AI, and the future of technology. Focused on ethical hacking, software development, cybersecurity, and continuous learning.',
        bio: 'Exploring how high contrast and negative space create focus without shouting.',
        location: 'San Francisco, CA',
        email: 'hello@alexrivera.design',
        availability: 'Open for commissions & collaborations',
        responseTime: 'Typically responds within hours'
    },

    // Navigation
    navigation: {
        logo: {
            text: '◈ Online Name: Tonna',
            url: 'index.html'
        },
        menu: [
            { text: 'Home', icon: 'fa-home', url: 'index.html', page: 'home' },
            { text: 'Blog', icon: 'fa-pen', url: 'blog.html', page: 'blog' },
            { text: 'Press', icon: 'fa-newspaper', url: 'press.html', page: 'press' },
            { text: 'Contact', icon: 'fa-paper-plane', url: '#contact', page: 'contact' }
        ]
    },

    // Blog Posts - Enhanced with full content
    blog: {
        pageTitle: 'Blog Content',
        pageIcon: 'fa-feather-alt',
        description: 'Work and etc',
        posts: [
            {
                id: 1,
                date: '2026-07-07',
                displayDate: '07 Jul 2026',
                title: 'The shape of attention in black interfaces',
                excerpt: 'Exploring how high contrast and negative space create focus without shouting.',
                fullContent: `
                    <p>In the world of interface design, attention is the most scarce resource. Black interfaces, when executed properly, create a canvas where content becomes the hero.</p>
                    <p>The key lies in understanding luminance relationships and how the human eye processes information in low-light environments.</p>
                    <h3>Key Principles</h3>
                    <ul>
                        <li>Use true black (#0A0A0A) for backgrounds on OLED displays</li>
                        <li>Maintain a contrast ratio of at least 4.5:1 for body text</li>
                        <li>Implement progressive disclosure to manage cognitive load</li>
                    </ul>
                `,
                tags: ['design', 'ux', 'dark-mode'],
                readTime: '5 min read',
                featured: true
            },
            {
                id: 2,
                date: '2026-06-28',
                displayDate: '28 Jun 2026',
                title: 'Building a silent type system',
                excerpt: 'How we reduced visual noise in developer tooling by treating type as architecture.',
                fullContent: `
                    <p>Typography in developer tools has long been an afterthought. We set out to change that by building a type system that communicates hierarchy without visual clutter.</p>
                    <p>The result was a 40% reduction in perceived complexity among our test users.</p>
                `,
                tags: ['typography', 'development', 'tools'],
                readTime: '7 min read',
                featured: false
            },
            {
                id: 3,
                date: '2026-06-14',
                displayDate: '14 Jun 2026',
                title: 'Monochrome is not absence of color',
                excerpt: 'A deep dive into luminance ranges and why true black behaves differently on OLED.',
                fullContent: `
                    <p>Many designers treat monochrome as simply removing saturation. In reality, working with a single hue across different luminance values requires precise calibration.</p>
                `,
                tags: ['color-theory', 'design', 'oled'],
                readTime: '6 min read',
                featured: true
            }
        ]
    },

    // Press & Mentions - Enhanced with categories
    press: {
        pageTitle: 'Press · Media & Mentions',
        pageIcon: 'fa-quote-right',
        description: 'Coverage and recognition from leading publications.',
        categories: ['All', 'Interviews', 'Reviews', 'Awards'],
        items: [
            {
                id: 1,
                outlet: 'WIRED',
                headline: 'The new minimalism — Rivera\'s design language rejects excess',
                date: 'May 2026',
                category: 'Interviews',
                url: '#',
                excerpt: 'An in-depth conversation about the philosophy behind minimal design.',
                publicationLogo: 'W'
            },
            {
                id: 2,
                outlet: 'TechCrunch',
                headline: 'Startup of the year: behind the black-themed tool suite',
                date: 'Apr 2026',
                category: 'Reviews',
                url: '#',
                excerpt: 'How a small team reimagined developer tools with dark-mode-first design.',
                publicationLogo: 'TC'
            }
        ]
    },

    // Social Links
    social: {
        links: [
            {
                platform: 'GitHub',
                icon: 'fab fa-github',
                username: '@Atullakraa',
                url: 'https://github.com/Atullakraa'
            },
            {
                platform: 'Twitter',
                icon: 'fab fa-twitter',
                username: '@Atullakra1337',
                url: 'https://x.com/Atullakra1337'
            },
            {
                platform: 'LinkedIn',
                icon: 'fab fa-linkedin',
                username: 'No Account',
                url: 'https://linkedin.com/in/your-profile'
            },
            {
                platform: 'Email',
                icon: 'fas fa-envelope',
                username: 'atullakra554@gmail.com',
                url: 'mailto:atullakra554@gmail.com'
            }
        ]
    },

    // Footer
    footer: {
        copyright: '© 2026 Tonna. All rights reserved.',
        links: [
            { text: 'Privacy', url: '#' },
            { text: 'Terms', url: '#' },
            { text: 'Colophon', url: '#' }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}