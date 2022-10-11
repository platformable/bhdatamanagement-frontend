exports.crearFecha2 = (event) => {
    let options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
    options.timeZone = 'UTC';
    const date = new Date(event.eventdate);
    const result = new Intl.DateTimeFormat('en-US', options).format(date);
    console.log("result", result)
    const splitted = result.split("/")
    return `${splitted[2]}-${splitted[0]}-${splitted[1]}`
  };