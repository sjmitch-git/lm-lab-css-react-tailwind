import { propertyData } from "../data/data";
import { Card } from "./card";

export const PropertiesDisplay = () => {
  return (
    <>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {propertyData.map((p, index) => (
          <li key={index} className="bg-red-500 flex">
            <Card property={p} />
          </li>
        ))}
      </ul>
    </>
  );
};
