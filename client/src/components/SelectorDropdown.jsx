import { useEffect, useRef, useState } from 'react';
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
            console.log("Document click: ", event.target);
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                console.log("Outside dropdown");
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
                // ref={dropdownRef}
                value={search}
                placeholder={selected}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
            />

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