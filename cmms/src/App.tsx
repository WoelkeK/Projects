import { ReactNode } from "react";
import { Tile } from "./components/info-text/tile/tile";

function App() {
  return (
    <div className="grid grid-cols-12 p-4">
      <Tile
         imageSrc="https://placeimg.com/640/480/any"
          name="Super biznes"
          info={['kup tu', 'nie tam']}
          rating={"4.4"}
          price={{value: 12.44, currency: "PLN"}}
          />
    </div>
   );
 }

export default App
