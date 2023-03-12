import { ReactNode } from "react";
import { mockApiResponse } from "./api-service/mock-bussines";
import { CategoryFilter } from "./components/category-filter";
import { Tile } from "./components/info-text/tile/tile";

function App() {
  return (
    <>
      <CategoryFilter />
      <div className="grid grid-cols-12 p-4 gap-4">
        {mockApiResponse.map((bussines) => (
          <Tile bussines={bussines} />
        ))}
      </div>
    </>
  );
}

export default App;
