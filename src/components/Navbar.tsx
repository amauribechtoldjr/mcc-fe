import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { Avatar } from "@components/Avatar";
import { Container } from "@components/Container";
import { Typography } from "@components/Typography";

/** Mocked until authentication exists. */
const CURRENT_USER = "AmauribechJr";

export const Navbar = () => {
  return (
    <header className="border-b border-mred/10 bg-mwhite shadow-sm">
      <Container>
        <nav className="flex items-center py-4">
          <Link to="/">
            <Typography size="lg">Minha coleção</Typography>
          </Link>

          <ul className="ml-10 flex items-center gap-12 md:ml-24">
            <li>
              <NavLink to="/" exact>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/collections">Coleções</NavLink>
            </li>
          </ul>

          <Avatar name={CURRENT_USER} size="lg" className="ml-auto" />
        </nav>
      </Container>
    </header>
  );
};

type NavLinkProps = {
  children: ReactNode;
  to: ComponentProps<typeof Link>["to"];
  /** `/` would match every route without this. */
  exact?: boolean;
};

/**
 * Active state is bold text plus a `morange` bar, deliberately not `morange`
 * text: orange on the light background only reaches 2.8:1 contrast.
 */
const NavLink = ({ children, to, exact }: NavLinkProps) => {
  return (
    <Link
      to={to}
      activeOptions={{ exact }}
      className="relative text-mred transition hover:opacity-70"
      activeProps={{
        className:
          "font-bold after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-morange",
      }}
    >
      {children}
    </Link>
  );
};
