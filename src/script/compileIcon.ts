const compileIcon = (icons) => {
  let str = ''
  icons.forEach((items) => {
    const svg = items.show_svg
    const font_class = items.font_class
    const viewBox_head = svg.indexOf('viewBox=')
    const viewBox_foot = svg.indexOf(' version')
    const viewBox = svg.substring(viewBox_head, viewBox_foot)
    const index_head = svg.indexOf('svg">') + 5
    const index_foot = svg.indexOf('</svg>')
    str += `<symbol id="icon-${font_class}" ${viewBox}>${svg.substring(index_head, index_foot)}</symbol>`
  })
  /* @ts-ignore */
  !(function(a: any) {
    var l,
        h,
        o,
        c,
        i,
        t: any = `<svg>${str}</svg>`,
        v = (v = document.getElementsByTagName('script'))[v.length - 1].getAttribute('data-injectcss'),
        p = function (a, l) {
          if (l.parentNode.hasChildNodes()) {
            const children = l.parentNode.childNodes
            let hasSvg = false
            for (let i = 0; i < children.length; i++) {
              if (children[i].tagName === 'svg') {
                hasSvg = true
                break
              }
            }
            /* 阻止重复生成svg */
            if (!hasSvg) l.parentNode.insertBefore(a, l)
          }
        }
    if (v && !a.__iconfont__svg__cssinject__) {
      a.__iconfont__svg__cssinject__ = !0
      try {
        document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>')
      } catch (a) {
        console && console.log(a)
      }
    }

    function m() {
      i || ((i = !0), o())
    }

    function z() {
      try {
        c.documentElement.doScroll('left')
      } catch (a) {
        return void setTimeout(z, 50)
      }
      m()
    }

    (l = function () {
      let a, l: any = document.createElement('div')
      ;(l.innerHTML = t), (t = null), (l = l.getElementsByTagName('svg')[0]) && (l.setAttribute('aria-hidden', 'true'), (l.style.position = 'absolute'), (l.style.width = 0), (l.style.height = 0), (l.style.overflow = 'hidden'), (l = l), (a = document.body).firstChild ? p(l, a.firstChild) : a.appendChild(l))
    }),
        document.addEventListener ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState) ? setTimeout(l, 0) : ((h = function () {
          document.removeEventListener('DOMContentLoaded', h, !1), l()
          // @ts-ignore
        }), document.addEventListener('DOMContentLoaded', h, !1)) : document.attachEvent &&
            ((o = l),
                (c = a.document),
                (i = !1),
                z(),
                (c.onreadystatechange = function () {
                  'complete' == c.readyState && ((c.onreadystatechange = null), m())
                }))
  })()
}

export default compileIcon
