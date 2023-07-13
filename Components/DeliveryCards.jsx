import Image from "next/image";
import React from "react";

const DeliveryCards = () => {
  return (
    <div className="w-[1044px] gap-[100px] flex flex-col justify-center items-center border-[5px] h-[2020px] mt-20 m-auto">
      <div className="card_items flex items-start flex-col w-[100%] h-[412px] border-[2px]">
        <h1 className="ml-10 text-[38px] text-[#1D1D1F] font-[700]">
          Как сделать заказ?
        </h1>
        <p className="ml-10 text-[#686870] text-[16px] font-[400]">
          Выберите наиболее удобный для вас способ
        </p>
        <div className="flex w-[100%] justify-center gap-[20px] items-center mt-5">
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/glob.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              На сайте
            </h2>
          </div>
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/telNew.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              В мобильном приложении
            </h2>
          </div>
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/telcha.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              По телефону
            </h2>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (099) 0077-313
            </span>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (096) 0077-313
            </span>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (073) 0777-313
            </span>
          </div>
        </div>
      </div>
      <div className="card_items flex items-start flex-col w-[100%] h-[412px] border-[2px]">
        <h1 className="ml-10 text-[38px] text-[#1D1D1F] font-[700]">Оплата</h1>
        <p className="ml-10 text-[#686870] text-[16px] font-[400]">
          Убедитесь, что стоимость вашего заказа равна или превышает 400 гривен
        </p>
        <div className="flex w-[100%] justify-center gap-[20px] items-center mt-5">
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/glob.png"} width={54} height={54} />
            <h2 className="text-center text-[#1D1D1F] text-[20px] font-[500] mt-1">
              Наличными курьеру
            </h2>
            <p className="ml-10 text-[#686870] text-[16px] font-[400]">
              У наших ниндзя всегда есть сдача
            </p>
          </div>
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/telNew.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              В мобильном приложении
            </h2>
          </div>
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/telcha.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              По телефону
            </h2>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (099) 0077-313
            </span>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (096) 0077-313
            </span>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (073) 0777-313
            </span>
          </div>
        </div>
      </div>
      <div className="card_items flex items-start flex-col w-[100%] h-[412px] border-[2px]">
        <h1 className="ml-10 text-[38px] text-[#1D1D1F] font-[700]">
          Как сделать заказ?
        </h1>
        <p className="ml-10 text-[#686870] text-[16px] font-[400]">
          Выберите наиболее удобный для вас способ
        </p>
        <div className="flex w-[100%] justify-center gap-[20px] items-center mt-5">
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/glob.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              На сайте
            </h2>
          </div>
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/telNew.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              В мобильном приложении
            </h2>
          </div>
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/telcha.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              По телефону
            </h2>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (099) 0077-313
            </span>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (096) 0077-313
            </span>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (073) 0777-313
            </span>
          </div>
        </div>
      </div>
      <div className="card_items flex items-start flex-col w-[100%] h-[412px] border-[2px]">
        <h1 className="ml-10 text-[38px] text-[#1D1D1F] font-[700]">
          Как сделать заказ?
        </h1>
        <p className="ml-10 text-[#686870] text-[16px] font-[400]">
          Выберите наиболее удобный для вас способ
        </p>
        <div className="flex w-[100%] justify-center gap-[20px] items-center mt-5">
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/glob.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              На сайте
            </h2>
          </div>
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/telNew.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              В мобильном приложении
            </h2>
          </div>
          <div className="w-[304px] h-[292px] bg-white rounded-[12px] flex flex-col items-center justify-center">
            <Image src={"/imgs/telcha.png"} width={54} height={54} />
            <h2 className="text-[#1D1D1F] text-[20px] font-[500] mt-1">
              По телефону
            </h2>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (099) 0077-313
            </span>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (096) 0077-313
            </span>
            <span className="mt-1 flex items-center justify-center w-[175px] h-[34px] bg-[#F5F5F7] rounded-[24px]">
              +38 (073) 0777-313
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCards;
