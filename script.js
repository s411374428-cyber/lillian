// 在 DOMContentLoaded 內部新增：

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// 切換手機版選單
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('active');
});

// 點擊選單連結後自動關閉選單 (手機版)
const navLinks = document.querySelectorAll('#mobile-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
    });
});

// (選化) 捲動時改變導覽列陰影
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-2xl', 'bg-[#0f172a]');
    } else {
        nav.classList.remove('shadow-2xl');
    }
});