import { useState } from 'react';
import '../style/components/SelectorDropdown.css';


function SelectorDropdown({info}){

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(`${info.type}`);

    const options = [
        "React",
        "Node.js",
        "Express",
        "MySQL"
    ];

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };


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