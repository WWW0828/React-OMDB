import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Row, Col, Container } from "reactstrap";
import ItemDetailPage from './ItemDetail';
import './SearchResult.css'
function SearchResultPage(props) {

  const [movie, setMovie] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(props.movies);
  const [isLoading, setIsLoading] = useState(false);

  const getSearchRequest = async () => {

    setIsLoading(true);
    let url = props.searchUrl + page.toString();

    const response = await fetch(url);
    const response_json = await response.json();
    
    if(response_json.Response === 'True') {
      if(response_json.Search) {
        setMovies(response_json.Search);
      }
    } else {
      setMovies([]);
    }
    setIsLoading(false);
  }

  function closeDetail() {
    setShowDetail(false);
  }
  function itemOnClick(movie) {
    setShowDetail(true);
    setMovie(movie);
  }
  function toNextPage() {
    if(page < Math.floor((props.total - 1)/10 + 1)) {
      setPage(page + 1);
    }
  }

  function toLastPage() {
    if(page > 1) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    getSearchRequest();
  }, [page]);
  
  if(isLoading) {
    return (
      <div className='text-page'>
        <h1 className='loading'>Loading ...</h1>
      </div>
    );
  }

  if(showDetail){
    return (
      <>
        <ItemDetailPage movie={movie} />
        <button className='back-to-result' onClick={() => closeDetail()}>Back to results</button>
      </>
    );
  }

  return (
    <>
    <h1 className="result-page-header">{props.text}</h1>
    <button className='back-to-home' onClick={props.onClose}>Back to home</button>
    <button className='next-last-btn' onClick={toLastPage}>Last{'<'}</button>
    <button className='next-last-btn' onClick={toNextPage}>{'>'}Next</button>
    <div className='page-num'>Page {page}</div>
    <Container className='results'>
      <Row> 
        {movies.map((movie, index) => {
          if (movie.Poster !== 'N/A' ) {
            return (
            <Col className='movie-container' onClick={() => itemOnClick(movie)}>
                <div>
                  <img src={movie.Poster} alt='movie' className='poster'></img>
                </div>
                <div>{movie.Title}</div>
            </Col>
            );
          }else {
            return(
              <Col className='movie-container' onClick={() => itemOnClick(movie)}>
                <div>
                  <div className='poster-404'>
                    <div>No Poster Found</div>
                  </div>
                </div>
                <div>{movie.Title}</div>
            </Col>
            );
          }
        })}
      </Row>
  </Container>
  </>);
}

export default SearchResultPage;
