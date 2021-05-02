import forOwn from '../_forOwn';

export default function openLink(url, attrs = { target: '_blank' }) {
  const link = document.body.appendChild(document.createElement('a'));
  const span = link.appendChild(document.createElement('span'));
  link.setAttribute('href', url);
  forOwn(attrs, (val, key) => {
    link.setAttribute(key, val);
  });
  span.click();
  setTimeout(() => {
    document.body.removeChild(link);
  });
}

