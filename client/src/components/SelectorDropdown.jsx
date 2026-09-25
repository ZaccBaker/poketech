import '../style/components/SelectorDropdown.css';

import { useEffect, useRef, useState } from 'react';


function SelectorDropdown({options = [], value, placeholder = "Select", onSelect}){

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const dropdownRef = useRef(null);

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (option) => {
        setSearch("");
        setIsOpen(false);

        if (onSelect) {
            onSelect(option);
        }
    };

    const handleClear = (e) => {
        e.stopPropagation();

        setSearch("");
        setIsOpen(false);

        if (onSelect) {
            onSelect(null);
        }
    };


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
                placeholder={placeholder}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setIsOpen(true);

                    if (value && onSelect) {
                        onSelect(null);
                    }
                }}
                onFocus={() => setIsOpen(true)}
            />

            {(value || search) && (
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