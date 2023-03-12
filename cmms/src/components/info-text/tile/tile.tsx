import { useState } from "react";
import { BussinesDetails } from "../../../api-service/mock-bussines";
import { Icon } from "../../icon";
import { InfoText } from "../info-text";

interface Props {
  bussinesDetails: BussinesDetails;
}

export const Tile = ({ bussinesDetails }: Props) => {
  const { id, name, imageSrc, rating, info, price } = bussinesDetails;
  const [isFavorite, setisFavorite] = useState(false);

  return (
    <div className="grid grid-rows-[repeat(2,auto)] gap-2 col-span-2 cursor-pointer">
      <div className="aspect-square relative">
        <button
          className="absolute z-10 top-2 right-3"
          onClick={() => setisFavorite((prevState) => !prevState)}
        >
          <Icon
            icon={isFavorite ? "HeartSolid" : "Heart"}
            className="w-6 h-6 text-white hover:text-gray-500"
          />
        </button>

        <img
          src={imageSrc}
          alt={"${name} image"}
          className="w-full h-full object-bottom object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <header className="flex justify-between items-center">
          <h6 className="font-semibold">{name}</h6>
          <div className="flex gap-1 items-center">
            <Icon icon="StarSolid" className="w-3" />
            <span className="text-sm">{rating}</span>
          </div>
        </header>
        {info.map((item, i) => (
          <InfoText key={i}>{item}</InfoText>
        ))}

        <InfoText>
          {price.value}
          {price.currency}
        </InfoText>
      </div>
    </div>
  );
};
