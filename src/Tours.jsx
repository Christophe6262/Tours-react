import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tour</h2>
        <div className="underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour tour={tour} removeTour={removeTour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
