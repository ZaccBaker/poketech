import { useEffect, useState } from 'react';
import '../style/components/SelectorDropdown.css';

import{
    getPokemonByGeneration,

} from '../services/Pokedex';

function SelectorDropdown({info, onSelect}){

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(info.type);
    const [options, setOptions] = useState([]);
    

    const handleSelect = (option) => {
        setSelected(option);
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



            setOptions(data);
        };

        getOptions();
    }, [info.type, info.generation]);


    return (
        <div className='selector-dropdown'>
            <button
                className="dropdown-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected}
                <span>▼</span>
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option) => (
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