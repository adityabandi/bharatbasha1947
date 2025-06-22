document.addEventListener('DOMContentLoaded', () => {
  const teluguEl = document.querySelector('.telugu-word');
  const englishEl = document.querySelector('.english-word');
  if (teluguEl && englishEl) {
    const telugu = teluguEl.textContent.trim();
    const english = englishEl.textContent.trim();
    const div = document.createElement('div');
    div.className = 'examples';
    div.innerHTML = `<h3 style="margin-top:1rem">Example Sentences</h3>
<p style="margin-top:0.5rem;font-size:1rem">తెలుగు: "${telugu}" ను వాక్యంలో ఇలా ఉపయోగించవచ్చు.</p>
<p style="font-size:1rem">English: Example usage of "${english}" in a sentence.</p>`;
    document.querySelector('.word-card')?.appendChild(div);
    return;
  }

  document.querySelectorAll('.word-item').forEach(item => {
    const t = item.querySelector('.telugu')?.textContent.trim();
    const e = item.querySelector('.english')?.textContent.trim();
    if (t && e) {
      const div = document.createElement('div');
      div.className = 'examples';
      div.innerHTML = `<p style="margin-top:0.5rem;font-size:0.9rem">తెలుగు: "${t}" అనే పదాన్ని వాక్యంలో ఉపయోగించవచ్చు.</p>
<p style="margin-top:0.2rem;font-size:0.9rem">English: Example with "${e}".</p>`;
      item.appendChild(div);
    }
  });
});
