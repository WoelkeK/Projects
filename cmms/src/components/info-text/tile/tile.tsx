import { InfoText } from "../info-text";

interface Props{
    name: string;
    imageSrc: string;
    info: string[];
    rating: string;
    price: {
        value: number;
        currency: string;
    }

}

export const Tile = ({name, imageSrc, info, rating, price}:Props)=>{
    return(
    <div className="grid grid-flow-row=[repeat(2,autom)] gap-1 col-span-2">
        <div className="aspect-square">
          {/*heart icon */}
          <img src={imageSrc}
          alt={'${name} image'}
          className="w-full h-full object-bottom object-cover rounded-md"/>
           
        </div>
          <div className="flex flex-col gap-1">
            
            <header className="flex justify-between">
              <h6 className="font-bold">{name}</h6>
              <div>
                {/*star icon */}
                <span className="text-sm">{rating}</span>
              </div>
            </header>

            <InfoText>{info[0]}</InfoText>
            <InfoText>{info[1]}</InfoText>
            <InfoText>{price.value}{price.currency}</InfoText>

          </div>

        </div>
    );
}