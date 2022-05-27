import './Dropdown.css'
function Dropdown(props){
    return (
        <label className='dropdown-label'>
          <form>
            <select id='typeselect'
              value={props.selectValue}
              onChange={(event) => props.setSelectValue(event.target.value)}
            >
              <option value="Movie">Movie</option>
              <option value="Series">Series</option>
              <option value="Episode">Episode</option>
            </select>
          </form>
        </label>
    );
}

export default Dropdown;