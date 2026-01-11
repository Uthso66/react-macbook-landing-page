import { footerLinks } from "../constants";

interface FooterLink {
  label: string;
  link: string;
}

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-10 mt-20">
      <div className="info max-w-6xl mx-auto px-4 mb-8">
        <p className="text-gray-400 text-center mb-6">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 000800 040 1966.
        </p>
        <img
          src="/logo.svg"
          alt="Apple logo"
          className="mx-auto w-12 h-12 mb-8"
        />
      </div>

      <hr className="border-gray-800 max-w-4xl mx-auto" />

      <div className="links max-w-6xl mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>

          <ul className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(({ label, link }: FooterLink) => (
              <li key={label}>
                <a
                  href={link}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
