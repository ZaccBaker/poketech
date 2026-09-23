import { useEffect, useState } from 'react';
import '../style/components/SelectorDropdown.css';

import{
    getPokemonByGeneration,
    getMovesByPokemon
} from '../services/Pokedex';

function SelectorDropdown({info, onSelect}){

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(info.type);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (option) => {
        setSelected(option);
        setSearch(option);
        setIsOpen(false);

        if (onSelect) {
            onSelect(option);
        }
    };


    useEffect(() => {
        const getOptions = async () => {
            let data = [];

            if (info.type === "Name"){
                data = await getPokemonByGeneration(info.generation);
            }

            if (info.type === "Move" && info.name) {
                data = await getMovesByPokemon(info.name);
            }

            setOptions(data);
        };

        getOptions();
    }, [info.type, info.generation, info.name]);


    return (
        <div className='selector-dropdown'>
            <input 
                type='text'
                className='dropdown-input'
                value={search}
                placeholder={selected}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
            />
            
            {/* <input
                className="dropdown-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected}
                <span>▼</span>
            </button> */}

            {isOpen && (
                <div className="dropdown-menu">
                    {filteredOptions.map((option) => (
                        <button
                            key={option}
                            className="dropdown-option"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SelectorDropdown