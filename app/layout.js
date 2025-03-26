// import custom provider for redux state management.
import ReduxProvider from 'store/provider/ReduxProvider';

// import theme style scss file
import 'styles/theme.scss';

export const metadata = {
  title: "Geeks UI - Nextjs fully responsive template ",
  description: "Geeks is a fully responsive and yet modern premium Nextjs template & snippets. Geek is feature-rich Nextjs components and beautifully designed pages that help you create the best possible website and web application projects. Nextjs Snippet",
  keywords: "Geeks UI, Nextjs, Next.js, Course, Sass, landing, Marketing, admin themes, Nextjs admin, Nextjs dashboard, ui kit, web app, multipurpose"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-light'>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}