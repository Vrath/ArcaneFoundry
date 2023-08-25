//number formatter
export function nFormatter(num, digits) {
  if (num < 10){
    return parseFloat(num.toFixed(2));
  }
  else if (num < 100){
    return parseFloat(num.toFixed(1));
  }
  else if (num < 1000){
    return parseFloat(num.toFixed(0));
  }
  else {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }
}

//calculate percentage
export function percentify(val1, val2){
  return Intl.NumberFormat("en-GB", { style: "percent", 
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }).format(val1 / val2);
}


// merge data
export function merge(a,b) {
  for (k in a) {
      if (typeof a[k] === 'object') {
          merge(a[k], b?.[k])
      }
      else {
          a[k] = b?.[k] ?? a[k]
      }
  }
}
