function copyCode(btn){var code=btn.nextElementSibling;if(!code)return;navigator.clipboard.writeText(code.textContent).then(function(){var t=btn.textContent;btn.textContent='Copied!';setTimeout(function(){btn.textContent=t},1500)})}

(function(){var theme=localStorage.getItem('theme')||'light';if(theme==='dark')document.documentElement.setAttribute('data-theme','dark')})();

document.addEventListener('click',function(e){var t=e.target.closest('[data-toggle-theme]');if(t){var html=document.documentElement;var theme=html.getAttribute('data-theme')==='dark'?'light':'dark';html.setAttribute('data-theme',theme);try{localStorage.setItem('theme',theme)}catch(e){}}});
