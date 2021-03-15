module.exports = function toReadable (number) {
    const ones = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
        'eighteen', 'nineteen',
    ]

    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 
        'sixty', 'seventy', 'eighty', 'ninety',
    ]

    if (number === 0) return 'zero';
    if (number < 20) return ones[number];

    let answer = '';
    if (number >= 100) {
        answer += ones[Math.floor(number / 100)] + ' hundred ';
        if ((number % 100) < 20) answer += ones[number % 100];
        else answer += tens[Math.floor(number / 10) % 10] + ' ' + ones[number % 10];
    } else if (number >= 20) {
        answer += tens[Math.floor(number / 10)] + ' ' + ones[number % 10];
    }
    return answer.trim();

}
