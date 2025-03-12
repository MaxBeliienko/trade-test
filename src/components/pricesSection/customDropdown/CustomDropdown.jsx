import styles from './CustomDropdown.module.css';
import { useState } from 'react';

const CustomDropdown = ({ options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles['dropdown-selected']}>{selectedValue} месяцев</div>

      {isOpen && (
        <ul className={styles['dropdown-list']}>
          {options.map(option => (
            <li
              key={option}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option} месяцев
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
