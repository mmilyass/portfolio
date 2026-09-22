import React from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact", isContact: true },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isContact?: boolean) => {
    e.preventDefault();
    if (isContact) {
      onContactClick();
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30 relative"
      aria-label="Main Navigation"
    >
      {navLinks.map((link) => (
        <a
          key={link.label}
          id={`nav-link-${link.label.toLowerCase()}`}
          href={link.href}
          onClick={(e) => handleScrollTo(e, link.href, link.isContact)}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer select-none"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};
