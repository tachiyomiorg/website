// Code based on vitepress-plugin-google-analytics.
// Customized as the plugin did not consider the script loading time.
// https://github.com/ZhongxuYang/vitepress-plugin-google-analytics

function mountGoogleAnalytics(id: string) {
  if (('dataLayer' in window && window.gtag) || window.location.hostname === 'localhost')
    return

  const analyticsScript = document.createElement('script')

  analyticsScript.addEventListener('load', () => {
    // @ts-expect-error Missing types
    window.dataLayer = window.dataLayer || []
    function gtag(..._args: any[]) {
      // @ts-expect-error Missing types
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', id)

    window.gtag = gtag
  })

  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`

  document.body.appendChild(analyticsScript)
}

export default function ({ id }: { id: string }) {
  // eslint-disable-next-line node/prefer-global/process
  if (process.env.NODE_ENV === 'production' && id && typeof window !== 'undefined')
    mountGoogleAnalytics(id)
}
