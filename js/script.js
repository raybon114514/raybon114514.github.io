// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 导航菜单响应
    const navToggle = document.createElement('button');
    navToggle.innerHTML = '☰ 菜单';
    navToggle.classList.add('nav-toggle');
    
    const header = document.querySelector('header .container');
    if (header && window.innerWidth < 768) {
        header.appendChild(navToggle);
        const nav = document.querySelector('nav');
        
        navToggle.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // 初始在移动设备上隐藏导航
        if (window.innerWidth < 768) {
            nav.style.display = 'none';
        }
    }
    
    // 滚动效果：当用户滚动时，头部会有阴影
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // 图片懒加载（如果有的话）
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // 为所有文章卡片添加悬停效果
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.addEventListener('mouseenter', () => {
            post.style.transform = 'translateY(-5px)';
            post.style.transition = 'transform 0.3s ease';
        });
        
        post.addEventListener('mouseleave', () => {
            post.style.transform = 'translateY(0)';
        });
    });
    
    console.log('博客脚本加载完成！');
});