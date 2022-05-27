import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from "reactstrap";
import SearchResultPage from "../pages/SearchResult";
import SearchBtn from "../components/SearchBtn";
import SearchText from "../components/SearchText.js"
import './SearchResult.css'
import './Home.css'
import Dropdown from "../components/Dropdown.js";

function HomePage() {

  const [movies, setMovies] = useState([]);
  const [titleValue, setTitleValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [typeValue, setTypeValue] = useState('Movie');
  const [totalResult, setTotalResult] = useState('');
  const [searchUrl, setSearchUrl] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorPage, setErrorPage] = useState(false);

  const getSearchRequest = async () => {
    
    if(titleValue === '' && yearValue === '') {
      return;
    }

    setIsLoading(true);
    let url = `http://www.omdbapi.com/?`;

    if(titleValue) {
      url += `s=${titleValue}&`;
    }
    if(yearValue) {
      url += `y=${yearValue}&`;
    }

    url += `type=${typeValue}&apikey=7df8f299`;
    setSearchUrl(url);

    const response = await fetch(url);
    const response_json = await response.json();
    
    if(response_json.Response === 'True') {
      setErrorPage(false);
      if(response_json.Search) {
        setMovies(response_json.Search);
        setTotalResult(response_json.totalResults);
      }
    } else {
      setErrorPage(true);
      setMovies([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getSearchRequest();
  }, [showResult]);

  function closeResult() {
    setMovies([]);
    setShowResult(false);
    setErrorPage(false);
  }

  if(isLoading) {
    return (
      <div className='text-page'>
        <h1 className='loading'>Loading ...</h1>
      </div>
    );
  }

  if(errorPage) {
    return (
      <div className='text-page'>
        <h1 className='error-page'>Oops ! Something went wrong ...</h1>
        <button className='back-to-home' onClick={closeResult}>Back to home</button>
      </div>
    );
  }
  
  if(showResult){
    if(titleValue === ''){
      alert('Please fill in title');
      setShowResult(false);
    } else {
      let wordstoshow = `${totalResult} of ${typeValue}`;
      wordstoshow += ` "${titleValue}" found`;
      if(yearValue) {
        wordstoshow += ` in year ${yearValue}`;
      }

      return (
        <div className="page">
          <SearchResultPage movies={movies} text={wordstoshow} total={totalResult} onClose={closeResult} searchUrl={searchUrl + '&page='}/>
        </div>
      );
    }
    
  }
  return (
    <div className="page">
      <div> <h1 className="page-header">Let's find out</h1> </div>
      <div className='user'>
        <Container className='page-container'>
          <Row className="page-content">
            <Col className='text'>
              <SearchText text='Title' inputValue={titleValue} setInputValue={setTitleValue}/></Col>
            <Col className='text'>
              <SearchText text='Year' inputValue={yearValue} setInputValue={setYearValue}/></Col>
            <Col className='btn'>
              <Row className='btn-row'>
                <Col><Dropdown selectValue={typeValue} setSelectValue={setTypeValue}/></Col>
                <Col><SearchBtn showresult={setShowResult} /></Col>  
              </Row>
            </Col>   
          </Row>
        </Container>
      </div> 
    </div>
  );
}

export default HomePage;
