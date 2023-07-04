import Loading from "./Loading.jsx";
import Tours from "./Tours.jsx";
import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getTours = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        return;
      }

      const data = await response.json();
      setTours(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h2>Une erreur s&apos;est produite...</h2>;
  }

  const removeTour = (id) => {
    setTours(tours.filter((el) => el.id !== id));
  };

  return (
    <main>
      {!tours[0] ? (
        <div className="title">
          <h2>No Tours Left</h2>
          <button onClick={getTours} className="btn">
            Refresh
          </button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </main>
  );
};
export default App;
