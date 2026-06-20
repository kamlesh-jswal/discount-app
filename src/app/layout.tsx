// import Header from "@/components/header/Header";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />

//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }

import Header from "@/components/header/Header";
import "./globals.css";

import ReduxProvider from "@/redux/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />

          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
