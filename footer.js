/**
 * 공통 푸터 컴포넌트 (footer.js)
 * fetch 통신 없이 순수 JS로 주입하므로 로컬 오프라인/Live Server/GitHub Pages 모두 호환됩니다.
 */
function renderFooter() {
    // 1. 현재 접속 경로가 루트인지 하위 폴더인지 판별하여 상대 경로 접두사 설정
    const isRoot = window.location.pathname.endsWith('/index.html') || 
                   window.location.pathname.endsWith('/') || 
                   !window.location.pathname.includes('/');
    const basePath = isRoot ? './' : '../';

    const footerHTML = `
    <footer class="text-center py-10 mt-20 border-t border-gray-200 bg-white w-full">
        <!-- 1. SNS & 블로그 아이콘 영역 -->
        <div class="flex justify-center items-center gap-6 mb-6">
            <!-- 인스타그램 -->
            <a href="https://www.instagram.com/p_dong_soo" target="_blank" rel="noopener noreferrer" aria-label="인스타그램 바로가기" class="text-gray-400 hover:text-pink-500 transition-colors">
                <svg class="w-7 h-7 fill-current inline-block" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            </a>

            <!-- 페이스북 -->
            <a href="https://www.facebook.com/pdongsoo" target="_blank" rel="noopener noreferrer" aria-label="페이스북 바로가기" class="text-gray-400 hover:text-blue-600 transition-colors">
                <svg class="w-7 h-7 fill-current inline-block" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            </a>

            <!-- 네이버 블로그 -->
            <a href="https://blog.naver.com/pdongsoo" target="_blank" rel="noopener noreferrer" aria-label="블로그 바로가기" class="inline-flex items-center">
                <img src="${basePath}naver_blog_svg.svg" 
                     alt="네이버 블로그 바로가기" 
                     class="w-7 h-7 grayscale hover:grayscale-0 transition-all duration-300"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';">
                <svg class="w-6 h-6 text-gray-400 hover:text-green-500 hidden fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
        </div>

        <!-- 2. 피드백 및 사이트 링크 -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-3 text-sm text-gray-500">
            <a href="${basePath}index.html" class="underline hover:text-gray-700 transition-colors">
                pdongsoo의 바이브 코딩 자료실
            </a>
            <span class="hidden md:inline text-gray-300">|</span>
            <a href="https://naver.me/FPUXJiqg" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-700 transition-colors">
                네이버폼으로 피드백 보내기
            </a>
        </div>

        <!-- 3. About / Privacy / Contact 메뉴 링크 -->
        <div class="flex justify-center items-center gap-4 mb-4 text-xs text-gray-400">
            <a href="${basePath}about.html" class="hover:text-gray-600 hover:underline transition-colors">About</a>
            <span class="text-gray-200 text-[10px]">/</span>
            <a href="${basePath}privacy.html" class="hover:text-gray-600 hover:underline transition-colors">Privacy</a>
            <span class="text-gray-200 text-[10px]">/</span>
            <a href="${basePath}contact.html" class="hover:text-gray-600 hover:underline transition-colors">Contact</a>
        </div>

        <!-- 4. 저작권 문구 -->
        <div class="mt-4">
            <p class="text-xs text-gray-400">
                © 2025–2026 pdongsoo의 바이브 코딩 자료실 : All rights reserved.
            </p>
        </div>
    </footer>
    `;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
}

// DOM 로드 즉시 실행
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
} else {
    renderFooter();
}