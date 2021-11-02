const injectBanner = () => {
  const banner = document.querySelector('.banner');
  banner.innerHTML = '';
  banner.insertAdjacentHTML('beforeend', `
    <div class="banner__logo-container">
      <svg class="banner__logo" xmlns="http://www.w3.org/2000/svg" width="403.286" height="216"
        viewBox="0 0 403.286 216">
        <path
          d="M403.286,61.432H341.433V26.6h61.853ZM341.433,94.847v29.86h61.853V94.847H341.433M309.8,61.432V26.6H275.314v94.557L184.667,26.6H147.342L309.8,189.4V94.847h31.638V61.432Z"
          fill="#32999d" />
        <path d="M309.8,61.432V26.6h31.638V61.432Zm0,33.415V189.4h31.638V94.847Z" fill="#ceeeef" />
        <polygon points="0 216 0 0 214.178 216 0 216" fill="#32999d" />
      </svg>
    </div>

    <div class="banner__text-container">
      <p class="banner__date">Friday, February 25, 2022</p>
      <p class="banner__fair-text">Visualization Industry Fair</p>
    </div>
  `);
};

export {injectBanner};