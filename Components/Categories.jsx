import Image from "next/image";

const Categories = () => {
  return (
    <div className="bg-white md:h-20 h-20 lg:w-6/12 md:w-10/12 md:justify-between lg:h-20 p-2 rounded-2xl m-auto items-cente flex justify-between sm:w-10/12">
      <div className="md:w-20 lg:w-20 sm:w-20 mt-4 ml-2 w-7 h-7 sm:ml-0 md:ml-0 lg:ml-0 2xl:ml-0 text-xs flex gap-1 md:text-base justify-center items-center flex-col text-black hover: cursor-pointer">
        <Image src="/imgs/rolli.png" width={35} height={35} />
        Роллы
      </div>
      <div className="md:w-20 lg:w-20 sm:w-20 mt-4 ml-2 w-7 h-7 sm:ml-0 md:ml-0 lg:ml-0 2xl:ml-0 text-xs flex gap-1 md:text-base justify-center items-center flex-col text-black hover: cursor-pointer">
        <Image src="/imgs/sushu.png" width={35} height={35} />
        Суши
      </div>
      <div className="md:w-20 lg:w-20 sm:w-20 mt-4 ml-2 w-7 h-7 sm:ml-0 md:ml-0 lg:ml-0 2xl:ml-0 text-xs flex gap-1 md:text-base justify-center items-center flex-col text-black hover: cursor-pointer">
        <Image src="/imgs/sush.png" width={35} height={35} />
        Сеты
      </div>
      <div className="md:w-20 lg:w-20 sm:w-20 mt-5 ml-2 w-7 h-7 sm:ml-0 md:ml-0 lg:ml-0 2xl:ml-0 text-xs flex gap-1 md:text-base justify-center items-center flex-col text-black hover: cursor-pointer">
        <Image src="/imgs/buli.png" width={35} height={35} />
        <span className="mt-1 text-black">Боулы</span>
      </div>
      <div className="md:w-20 lg:w-20 sm:w-20 mt-4 ml-2 w-7 h-7 sm:ml-0 md:ml-0 lg:ml-0 2xl:ml-0 text-xs flex gap-1 md:text-base justify-center items-center flex-col text-black hover: cursor-pointer">
        <Image src="/imgs/drink.png" width={35} height={35} />
        Напитки
      </div>
      <div className="md:w-20 lg:w-20 sm:w-20 mt-4 ml-2 w-7 h-7 sm:ml-0 md:ml-0 lg:ml-0 2xl:ml-0 text-xs flex gap-1 md:text-base justify-center items-center flex-col text-black hover: cursor-pointer">
        <Image src="/imgs/salt.png" width={35} height={35} />
        Соусы
      </div>
      <div className="md:w-20 lg:w-20 sm:w-20 mt-4 ml-2 w-7 h-7 sm:ml-0 md:ml-0 lg:ml-0 2xl:ml-0 text-xs flex gap-1 md:text-base justify-center items-center flex-col text-black hover: cursor-pointer">
        <Image src="/imgs/unknown.png" width={35} height={35} />
        Неизв...
      </div>
      <div className="md:w-20 lg:w-20 sm:w-20 mt-4 ml-2 w-7 h-7 sm:ml-0 md:ml-0 lg:ml-0 2xl:ml-0 text-xs flex gap-1 md:text-base justify-center items-center flex-col text-black hover: cursor-pointer">
        <Image src="/imgs/unknown.png" width={35} height={35} />
        Неизв...
      </div>
    </div>
  );
};

export default Categories;
