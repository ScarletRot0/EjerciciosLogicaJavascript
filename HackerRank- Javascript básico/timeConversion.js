function timeConversion(s) {
    // Write your code here
    //19:03:34AM
    let typeOfHour = s.substring(8, 10); // Extracts 'AM' or 'PM'
    let extra = s.substring(2, 8);       // Extracts ':MM:SS'
    let extractNumber = s.substring(0, 2); // Extracts 'HH'
    extractNumber = parseInt(extractNumber); // Convert to integer

    let newNumber;

    if (typeOfHour === 'PM') {
        // Convert PM hours (except for 12 PM)
        newNumber = extractNumber !== 12 ? extractNumber + 12 : extractNumber;
    } else {
        // Convert AM hours (12 AM -> 00, others remain the same)
        newNumber = extractNumber === 12 ? '00' : extractNumber.toString().padStart(2, '0');
    }

    // Return the time in military format
    return newNumber + extra;
}
