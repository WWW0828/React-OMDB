import './SearchText.css'
function SearchText(props) {
    return (
        <label className='label'>{props.text}
          <input 
            type='text' 
            className='textbox'
            value={props.inputValue}
            onChange={(event) => props.setInputValue(event.target.value)}
          ></input>
        </label>
    );
}

export default SearchText;