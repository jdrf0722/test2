import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import {JetBrains_Mono, Fira_Code} from "next/font/google";

const rajdhani = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={rajdhani.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
