
import './App.css';
import MovieList from './components/movieList/MovieList'
import Header from "./components/header/Header";
import Pagination from "./components/pagination/Pagination";



function App() {

  return (
    <div>
        <Header/>
        <MovieList/>
        <Pagination/>
    </div>
  );
}
export default App;
