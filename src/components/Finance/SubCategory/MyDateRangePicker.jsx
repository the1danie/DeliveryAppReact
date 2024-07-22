import { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import { ru } from 'date-fns/locale'; // Import Russian locale
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './MyDateRangePicker.css';

const MyDateRangePicker = ({ onClose }) => {
    // Date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
        },
    ]);

    // Ref to target element for click outside detection
    const refOne = useRef(null);

    useEffect(() => {
        const hideOnEscape = (e) => {
            if (e.key === 'Escape') {
                console.log('Escape key pressed, closing date picker.');
                if (typeof onClose === 'function') onClose();
            }
        };

        const hideOnClickOutside = (e) => {
            if (refOne.current && !refOne.current.contains(e.target)) {
                console.log('Clicked outside, closing date picker.');
                if (typeof onClose === 'function') onClose();
            }
        };

        document.addEventListener('keydown', hideOnEscape, true);
        document.addEventListener('click', hideOnClickOutside, true);

        // Cleanup event listeners on unmount
        return () => {
            document.removeEventListener('keydown', hideOnEscape, true);
            document.removeEventListener('click', hideOnClickOutside, true);
        };
    }, [onClose]);

    return (
        <div ref={refOne} className="calendarContainer">
            <button className="closeButton" onClick={() => {
                console.log('Close button clicked, closing date picker.');
                if (typeof onClose === 'function') onClose();
            }}>X</button>
            <DateRangePicker
                onChange={(item) => {
                    setRange([item.selection]);
                    console.log('Date range selected:', item.selection);
                }}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction="horizontal"
                locale={ru} // Set Russian locale
                className="calendarElement"
            />
        </div>
    );
};

export default MyDateRangePicker;
