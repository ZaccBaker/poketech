import { useEffect, useRef, useState } from 'react';
import '../style/components/SelectorDropdown.css';

import{
    getPokemonByGeneration
} from '../services/Pokedex';

import{
    getMovesByPokemon
} from '../services/Attackdex';

function SelectorDropdown({info, value, onSelect}){

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(info.type);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    
    const dropdownRef = useRef(null);

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

    const handleClear = (e) => {
        e.stopPropagation();

        setSearch("");
        setSelected(info.type);
        setIsOpen(false);

        if (onSelect) {
            onSelect(null);
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


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);


    return (
        <div 
            className='selector-dropdown' 
            ref={dropdownRef}
        >
            <input 
                type='text'
                className='dropdown-input'
                value={value || search}
                placeholder={selected}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
            />

            {value && (
                <span
                    className='dropdown-clear'
                    onClick={handleClear}
                >
                    ⟲
                </span>
            )}
            
            <span
                className={`dropdown-arrow ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                ▼
            </span>

            {isOpen && (
                <div className="dropdown-menu">
                    {filteredOptions.map((option) => (
                        <button
                            type='button'
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