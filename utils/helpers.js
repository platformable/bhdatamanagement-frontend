
//  Use this function to reverse dates in case they dont come from the Server, to change order in USA
export const reverseDate = (date) => {
  const splitted = new Date(date).toISOString().split("T");
  const reverse = splitted[0].split("-");
  const result = reverse[1] + "/" + reverse[2] + "/" + reverse[0];
  return result;
};

// this should be in onWheelCapture
export const disableWheelInputNumber = (e) => {
  e.target.blur();
};


// ***********************************************************
// This 3 functions work together for input of type number 
// this should be in onKeyDown
export const isNumberKey = (e) => {
  const invalidChars = ["-", "+", "e"];
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}


// this should be in onKeyUp
export const handleMaxNumber = (e) => {
  let { value } = e.target;
  value > 1000 && (e.target.value = 1000);
};

// this should be in onChange
export const handleNumberWithLimitInForm = (e, limit) => {
  const {value} = e.target
  let finalValue;
  value > limit ? (finalValue = limit) : (finalValue = value);
  return Number(finalValue)
};
//************************************************************
// Manage values that comes from the server to fill edit forms 
export const removeValueFromArray = (value, data, setState) => {
  const isValueOnData = data?.includes(value);

  const filteredData = data.filter((oldValues) => oldValues != value);

  isValueOnData
    ? setState(filteredData)
    : setState((previous) => [...previous, value]);
};

export const crearFecha2 = (event) => {
    let options = { 
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
    options.timeZone = 'UTC';
    const date = new Date(event.eventdate);
    const result = new Intl.DateTimeFormat('en-US', options).format(date);
    const splitted = result.split("/")
    return `${splitted[2]}-${splitted[0]}-${splitted[1]}`
  };

