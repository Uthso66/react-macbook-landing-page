import { navLinks } from "../constants/index";

export default function NavBar() {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={`/${item.label.toLowerCase()}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
