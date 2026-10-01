// Module Navigation
function showModule(moduleId) {
    // Hide all modules
    const modules = document.querySelectorAll('.module');
    modules.forEach(m => m.classList.remove('active'));

    // Show selected module
    document.getElementById(moduleId).classList.add('active');

    // Update nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Prep Tab Navigation
function showPrepTab(tabId) {
    // Hide all prep contents
    const contents = document.querySelectorAll('.prep-content');
    contents.forEach(c => c.classList.remove('active'));

    // Show selected content
    document.getElementById(tabId).classList.add('active');

    // Update tab styles
    const tabs = document.querySelectorAll('.prep-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

// Exercise Toggle
function toggleExercise(element) {
    const content = element.nextElementSibling;
    const toggle = element.querySelector('.exercise-toggle');

    content.classList.toggle('open');
    toggle.classList.toggle('open');
}

// Lab Code Modal Functions
function showLabCode(card) {
    const title = card.getAttribute('data-lab-title');
    const code = card.getAttribute('data-lab-code');

    document.getElementById('labModalTitle').textContent = title;
    document.getElementById('labModalCode').textContent = code;
    document.getElementById('labModal').classList.add('active');
}

function closeLabCode() {
    document.getElementById('labModal').classList.remove('active');
}

function copyLabCode() {
    const code = document.getElementById('labModalCode').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copiado';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('labModal');
    if (e.target === modal) {
        closeLabCode();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLabCode();
    }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Copy Code Functionality
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const codeBlock = this.nextElementSibling;
            const code = codeBlock.textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalText = this.textContent;
                this.textContent = '✓ Copiado';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});