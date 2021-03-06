/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  callback: {
    $url: (url?: { hash?: string }) => ({ pathname: '/callback' as const, hash: url?.hash })
  },
  dashboard: {
    $url: (url?: { hash?: string }) => ({ pathname: '/dashboard' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
