import { BussinesDetails } from "../../../api-service/mock-bussines";
import { InfoText } from "../info-text";


interface Props {
  bussinesDetails: BussinesDetails;
}

export const Tile = ({bussinesDetails}:Props)=>{
const {id, name, imageSrc,rating,info,price} = bussinesDetails;

    return(
    <div className="grid grid-rows-[repeat(2,auto)] gap-2 col-span-2 cursor-pointer">
        <div className="aspect-square">
          {/*heart icon */}
          <img src={imageSrc}
          alt={'${name} image'}
          className="w-full h-full object-bottom object-cover rounded-md"/>
           
        </div>
          <div className="flex flex-col">
            
            <header className="flex justify-between">
              <h6 className="font-semibold">{name}</h6>
              <div>
                {/*star icon */}
                <span className="text-sm">{rating}</span>
              </div>
            </header>
            {info.map((item, i) => <InfoText key={i}>{item}</InfoText>)}

            <InfoText>{price.value}{price.currency}</InfoText>

          </div>

        </div>
    );
}