import NavLink from "./navLink";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-100 antialiased">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="border-b p-4">
          <nav className="space-x-4">
            <NavLink href={"/"} text={"Home"} />
            <NavLink href={"/pokemons"} text={"Pokemons"} />
          </nav>
        </header>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
