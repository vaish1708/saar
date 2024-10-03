// script.js

// Populate the time slots (15-minute intervals)
function populateTimeSlots() {
    const timeSlotSelect = document.getElementById('time-slot');
    timeSlotSelect.innerHTML = ''; // Clear previous options

    // Start time: 9:00 AM
    let startHour = 9;
    let startMinute = 0;
    let endHour = 17; // End time: 5:00 PM

    while (startHour < endHour || (startHour === endHour && startMinute === 0)) {
        // Format time as HH:MM
        const time = `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`;
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSlotSelect.appendChild(option);

        // Increment time by 15 minutes
        startMinute += 15;
        if (startMinute === 60) {
            startMinute = 0;
            startHour++;
        }
    }
}

// Set the minimum date to today and limit the booking range to the next 10 days
function setMinDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    
    const minDate = `${year}-${month}-${day}`;
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 10); // Limit booking to 10 days from today

    const maxYear = maxDate.getFullYear();
    const maxMonth = String(maxDate.getMonth() + 1).padStart(2, '0');
    const maxDay = String(maxDate.getDate()).padStart(2, '0');

    const slotDateInput = document.getElementById('slot-date');
    slotDateInput.min = minDate;
    slotDateInput.max = `${maxYear}-${maxMonth}-${maxDay}`;
}

// Handle booking button click
document.getElementById('book-slot').addEventListener('click', function() {
    const selectedDate = document.getElementById('slot-date').value;
    const selectedTime = document.getElementById('time-slot').value;

    if (selectedDate && selectedTime) {
        // Handle booking logic (can be sent to backend)
        alert(`Slot booked on ${selectedDate} at ${selectedTime}`);
        
        // Optionally, block the booked time slot
        // You would send the selectedDate and selectedTime to your backend here
    } else {
        alert("Please select both a date and time.");
    }
});

// Initialize the page
window.onload = function() {
    populateTimeSlots(); // Populate the time slots with 15-minute intervals
    setMinDate(); // Set minimum and maximum date for booking
};


