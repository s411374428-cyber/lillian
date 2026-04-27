document.addEventListener('DOMContentLoaded', () => {
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

    // 捲動時改變導覽列陰影與底色 (改成可愛風的淺色背景)
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            // 換成白底與柔和陰影，取代原本的深色 bg-[#0f172a]
            nav.classList.add('shadow-md', 'bg-white/90', 'backdrop-blur-sm');
        } else {
            nav.classList.remove('shadow-md', 'bg-white/90', 'backdrop-blur-sm');
        }
    });
});
