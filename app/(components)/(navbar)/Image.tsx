import Image from "next/image";

const Images = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-gradient-radial from-green-300 to-green-600 w-full fixed top-0 flex justify-center items-center  border-b-[1px] border-black shadow-[1px_1px_20px_2px_rgba(1,50,32,1)]">
        <Image
          alt="Logo"
          src="/logo.png"
          width={800}
          height={600}
          className="lg:my-16 my-8 lg:p-5 p-2"
        />
      </div>
    </div>
  );
};

export default Images;
