import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navLinks } from "../utils/navLinks";

const styles = {
  active: {
    background:
      "radial-gradient(rgba(100,100, 100,.8), rgba(255, 255, 255, 0))",
  },
};

export const Header = () => {
  const router = useRouter();

  return (
    <header>
      <h1>Shatsam</h1>

      <nav>
        {navLinks.map((link, index) => {
          return (
            <Link href={link.path} key={link.name} passHref>
              <button
                style={router.pathname === link.path ? styles.active : {}}
              >
                {link.name}
              </button>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
