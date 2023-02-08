import React, { useEffect, useRef, useState } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

const InputValidationAddress = ({ setForm, name, defaultValue }) => {
  const [error, setError] = useState(false);
  let {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    defaultValue,
    cache: 24 * 60 * 60,
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      setForm((prev) => ({ ...prev, [name]: description }));

      clearSuggestions();

      // Get latitude and longitude via utility functions
      // #import
      // getGeocode({ address: description }).then((results) => {
      //   const { lat, lng } = getLatLng(results[0]);
      //   console.log("📍 Coordinates: ", { lat, lng });
      // });
    };
  const validateAddress = async () => {
    const body = JSON.stringify(deta);
    try {
      // if (isEmpty) return
      const res = await fetch(
        `https://addressvalidation.googleapis.com/v1:validateAddress?key=${process.env.NEXT_PUBLIC_GOOGLE_VALIDATION}`,
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: body,
        }
      );
      const data = await res.json();
      if (data.error) {
        throw new Error();
      }

      console.log(data);
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className="py-2 px-4"
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div>
        <input
        onChange={handleInput}
        className="grid text-lg px-4 py-2 border-black  rounded w-full md:w-96"
        name={name}
        type="text"
        {...defaultValue ? defaultValue={value} : value={value} }
        disabled={!ready}
        />

      {status === "OK" && (
        <ul className="divide-black divide-y rounded border-black">
          {renderSuggestions()}
        </ul>
      )}
    </div>
  );
};

export default InputValidationAddress;
