$(document).ready(function(){
  const line = document.querySelectorAll('.gl');
  const lineR = document.querySelectorAll('.gr');
  const texts = document.querySelectorAll('.gt');
  const red = document.querySelectorAll('.red');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('line-animation');
      }
      else {
        entry.target.classList.remove('line-animation');
      }
    });
  });
  const observerR = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('line-animation2');
      }
      else {
        entry.target.classList.remove('line-animation2');
      }
    });
  });
  const otx = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('topX');
      }
    });
  });
  const ext = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reduce');
      }
    });
  });
  for (var i = 0; i < line.length; i++) {
    const r = line[i];
    observer.observe(r);
  }
  for (var i = 0; i < lineR.length; i++) {
    const s = lineR[i];
    observerR.observe(s);
  }
  for (var i = 0; i < texts.length; i++) {
    const x = texts[i];
    otx.observe(x);
  }
  for (var i = 0; i < red.length; i++) {
    const t = red[i];
    ext.observe(t);
  }
});