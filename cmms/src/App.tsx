import { ReactNode } from "react";
import { mockApiResponse } from "./api-service/mock-bussines";
import { Tile } from "./components/info-text/tile/tile";



function App() {
  return (
    <div className="grid grid-cols-12 p-4 gap-4">
        {mockApiResponse.map((bussines) => (
        <Tile bussinesDetails={bussines}/>
        ))}
    </div>
   );
 }

export default App
