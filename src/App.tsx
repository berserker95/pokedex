import { useCallback, useState, ChangeEvent } from 'react';
import InputField from './components/InputField';
import PokemonLogo from "./assets/images/pokemonLogo.png";
import SearchIcon from "./assets/images/searchIcon.svg";

function App() {
  const [inputValue, setInputValue] = useState<string>();

  const handleInputChange = useCallback((event:ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, [])
  return (
    <div className="container-fluid">
      <div className='col-12 d-flex flex-column align-items-center text-center'>
        <img className='mw-25' alt='pokemon logo' src={PokemonLogo}/>
       <div>
       <InputField className='input-search' type="search" placeholder='Enter a Pokemon name' value={inputValue} onChange={handleInputChange}/>
       <img role='button' className='search-icon position-relative' alt='search icon' src={SearchIcon}/>
       </div>
      </div>
     
    </div>
  );
}

export default App;
