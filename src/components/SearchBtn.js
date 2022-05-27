import './SearchBtn.css'
function SearchBtn (props) {
    return (
        <>
        <button className='search-btn' onClick={() => props.showresult(true)}>Search</button>
        </>
    );
}

export default SearchBtn;