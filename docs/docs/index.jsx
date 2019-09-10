---
banner:
  name: 'Celia'
  desc: 'A modern JavaScript utility library delivering modularity, performance, and extras.'
  btns: 
    - { name: 'Get started', href: './guide/index.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/fengxinming/celia' }
  caption: 'current version: v6.1.0'
features: 
  - { name: 'Modular', desc: 'celia modular methods are great for iterating arrays, objects, strings, manipulating, testing values, creating composite functions. ' }
  - { name: 'Easy', desc: 'celia makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc. ' }

footer:
  copyRight:
    name: 'Jesse Feng'
    href: 'https://github.com/fengxinming'
  links:
    个人网址:
      - { name: 'Jesse Feng', href: 'https://github.com/fengxinming' }
      - { name: 'Jesse Feng Blog', href: 'https://github.com/fengxinming' }
    Git仓库:
      - { name: 'Github', href: 'https://github.com/fengxinming/celia' }
      - { name: 'Github Issue', href: 'https://github.com/fengxinming/celia/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />
