import AllMovies from "./AllMovies";

const endPoint = 'http://www.omdbapi.com/';
const myKey = '1621a8ba';

const MyMain = () => {
  const url = `${endPoint}?apikey=${myKey}&s=`;

  return (
    <main>
      <section>
        <AllMovies title="Trending Now" source={`${url}friends`} />
        <AllMovies title="Watch It Again" source={`${url}Harry Potter`} />
        <AllMovies title="New Releases" source={`${url}disney`} />
      </section>
    </main>
  );
};

export default MyMain;
