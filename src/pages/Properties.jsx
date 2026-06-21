import "./Properties.css";

function Properties() {
  const properties = [
    {
      name: "Luxury Villa",
      location: "Chennai",
      price: "₹2.5 Crores",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },

    {
      name: "Modern Apartment",
      location: "Bangalore",
      price: "₹90 Lakhs",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    },

    {
      name: "Beach House",
      location: "Goa",
      price: "₹3 Crores",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Available Properties</h1>

      <div className="property-grid">
        {properties.map((property, index) => (
          <div className="card" key={index}>
            <img src={property.image} />

            <h2>{property.name}</h2>

            <p>{property.location}</p>

            <h3>{property.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
