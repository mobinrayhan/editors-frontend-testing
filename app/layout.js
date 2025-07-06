// import custom provider for redux state management.
import { Toaster } from "react-hot-toast";
import ReduxProvider from "store/provider/ReduxProvider";

// import theme style scss file
import "styles/theme.scss";

export const metadata = {
  title: "Master the Art of Editing – From Basics to Pro Level",
  description:
    "Learn everything about video editing — from fundamental techniques to advanced skills. Whether you're a beginner or a seasoned editor, explore tips, tricks, and in-depth tutorials on cutting, color grading, transitions, effects, and more. Unlock your creativity and become a pro editor with practical insights and hands-on guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="bg-light">
        <Toaster />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
