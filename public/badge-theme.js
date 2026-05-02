const updateBadgeTheme = () => {
  const iframe = document.getElementById('status-badge');
  if (!iframe) return;
  
  const theme = document.documentElement.dataset.theme;
  // Check if Starlight is set to dark, or auto/unset and the OS prefers dark
  const isDark = theme === 'dark' || 
                (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) || 
                (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  const newSrc = `https://teivah.betteruptime.com/badge?theme=${isDark ? 'dark' : 'light'}`;
  if (iframe.src !== newSrc) {
      iframe.src = newSrc;
  }
};

// Run immediately on page load
updateBadgeTheme();

// Listen for Starlight theme toggle changes on the root element
new MutationObserver(updateBadgeTheme).observe(document.documentElement, { 
  attributes: true, 
  attributeFilter: ['data-theme'] 
});