export interface IProperty {
  property: {
    location: string;
    country: string;
    property_type: string;
    bedroom_count: number;
    bathroom_count: number;
    price: string;
    image_urls: string[];
    title: string;
    description: string;
  };
}

export const Card: React.FC<IProperty> = ({
  property: {
    title,
    location,
    country,
    property_type,
    image_urls,
    description,
    bedroom_count,
    bathroom_count,
    price,
  },
}) => {
  return (
    <section className="border border-gray-400 rounded-sm text-left flex-grow">
      <figure className="aspect-[4/3]">
        <img className="object-cover w-full h-full" src={image_urls[0]} alt={title} />
      </figure>
      <h4 className="font-bold">{title}</h4>

      <p>{location}</p>
      <p>{country}</p>
      <p>{property_type}</p>
      <p>{description}</p>
      <p>{bedroom_count} Bedrooms</p>
      <p>{bathroom_count} Bathrooms</p>
      <footer className="mt-auto text-center">
        <p>{price}</p>
      </footer>
    </section>
  );
};
