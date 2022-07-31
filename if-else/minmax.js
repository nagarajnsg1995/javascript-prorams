maximum = Number.MAX_VALUE
minimum = Number.MIN_VALUE


    let digit = Math.floor(Math.random() * 1000);
    if (digit > maximum)
        maximum = digit
    if (digit < minimum)
        minimum = digit


console.log("Maximum = " + maximum, "\nMinimum = " + minimum)