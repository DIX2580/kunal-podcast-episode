import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className=" font-sans text-white hover:text-yellow-500 hover:underline  "
    >
      {title}
    </Link>
  );
};

export default NavLink;
