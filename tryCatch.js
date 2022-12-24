function getMonthName(mo) {
  mo = mo - 1; // Ajusta o número do mês para index de array (1=Jan, 12=Dec)
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (months[mo] !== undefined) {
    return months[mo];
  } else {
    throw new Error("InvalidMothNo");
  }
}

console.log(getMonthName(1));

try {
  // statements to try
  var myMonth = 13; // 15 is out of bound to raise the exception
  monthName = getMonthName(myMonth);
} catch (e) {
  monthName = "unknown";
  console.log(e.message); // pass exception object to err handler
}
