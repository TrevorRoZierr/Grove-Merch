import Images from "./Image";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex flex-col w-full bg-transparent">
      <Images />
      <Links />
    </div>
  );
};

export default Navbar;
