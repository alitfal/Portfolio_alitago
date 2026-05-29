const siteUrl = "https://portfolio-alitago.vercel.app";
const siteTitle = "Angel Luis Litago Falces - Full-Stack Developer Portfolio";
const siteDescription =
  "Portfolio of Angel Luis Litago Falces, a full-stack web developer, Claris FileMaker developer, and IT support specialist based in the Canary Islands.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Angel Luis Litago Falces",
  },
  description: siteDescription,
  authors: [{ name: "Angel Luis Litago Falces", url: siteUrl }],
  creator: "Angel Luis Litago Falces",
  keywords: [
    "Angel Luis Litago Falces",
    "Angel Litago",
    "alitago",
    "portfolio",
    "full-stack developer",
    "web developer",
    "Claris FileMaker developer",
    "FileMaker",
    "IT support",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Vercel",
    "Canary Islands",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Angel Luis Litago Falces Portfolio",
    images: [
      {
        url: "/images/home.jpg",
        width: 512,
        height: 512,
        alt: "Angel Luis Litago Falces portfolio portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/home.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
