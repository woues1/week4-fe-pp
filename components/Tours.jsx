import { useState } from 'react';
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const hide = (id) => {
    const updatedTours = toursData.filter(tour => tour.id !== id);
    setToursData(updatedTours);
  }

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => (
          <Tour 
          key={tour.id} 
          {...tour} 
          hide={() => hide(tour.id)}/> 
        ))}
      </div>
    </section>
  );
};

export default Tours;

