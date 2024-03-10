import Link from "next/link";

const BottomMenu = () => {
  return (
    <div className="absolute top-[265px] lg:top-[465px] left-2 lg:left-4">
      <ul className="flex flex-col">
        <li className="my-2 lg:my-4">
          <Link href="/">Pants</Link>
        </li>
        <li className="my-2 lg:my-4">
          <Link href="/">Shoes</Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;
