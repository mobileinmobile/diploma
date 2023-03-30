$(document).ready(function(){
  const line = document.querySelector('.i1');
  const line2 = document.querySelector('.i4');
  const lineR = document.querySelector('.i2');
  const lineR2 = document.querySelector('.w2');
  const ex = document.querySelector('.l');
  const text = document.querySelector('.gt');
  const ext = document.querySelector('.i3');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        line.classList.add('line-animation');
        return;
      }
      line.classList.remove('line-animation');
    });
  });
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        line2.classList.add('line-animation');
        return;
      }
      line2.classList.remove('line-animation');
    });
  });
  const observerR = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lineR.classList.add('line-animation2');
        return;
      }
      lineR.classList.remove('line-animation2');
    });
  });
  const observerR2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lineR2.classList.add('line-animation2');
        return;
      }
      lineR2.classList.remove('line-animation2');
    });
  });
  const oX = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ex.classList.add('line-animation');
        return;
      }
      ex.classList.remove('line-animation');
    });
  });
  const otx = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        text.classList.add('topX');
      }
    });
  });
  const extE = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ext.classList.add('reduce');
      }
    });
  });
  observer.observe(line);
  observer2.observe(line2);
  observerR.observe(lineR);
  observerR2.observe(lineR2);
  oX.observe(ex);
  otx.observe(text);
  extE.observe(ext);
});