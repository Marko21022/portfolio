

export const metadata = {
  title: 'Marko',
  description: 'Showcasing my projects and experience.',
  themeColor: '#2b2f31', // Discord-like dark theme
  icons: {
    icon: '/logo.png',      // favicon
    shortcut: '/logo.png',  // shortcut icon
  },
  openGraph: {
    type: 'website',
    url: 'https://marko21022.com', // replace with your domain
    title: 'Marko',
    description: 'Showcasing my projects and experience.',
    siteName: 'Marko',
    images: [
      {
        url: '/banner.png', // large image for Discord/OG
        width: 1200,
        height: 630,
        alt: 'Marko Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marko',
    description: 'Showcasing my projects and experience.',
    images: ['/banner.png'], // large image for Twitter card
  },
};
