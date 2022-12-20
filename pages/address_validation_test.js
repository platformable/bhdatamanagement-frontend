import React, {useState} from "react";

const address_validation_test = () => {
  const [address, setAddress] = useState({
    regionCode: "US",
    locality: "",
    addressLines: [],
  });
  const validateAddress = async () => {
    // const isEmpty = Object.values(address).some((e) => !e);
    // console.log(isEmpty)
    try {
        // if (isEmpty) return 
      const res = await fetch(
        `https://addressvalidation.googleapis.com/v1:validateAddress?key=${process.env.GOOGLE_ADDRESS_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            address: {
              regionCode: "US",
              locality: address.locality,
              addressLines: address.addressLines,
            },
          },
        }
      );
      const data = res.json()
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container mx-auto flex flex-col gap-10 items-center py-24 h-screen">
      <label>
        locality
        <input
        //   onBlur={validateAddress}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, locality: e.target.value }))
          }
          type="text"
        />
      </label>
      <label>
        addressLines
        <input
          onBlur={validateAddress}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, addressLines: [...prev.addressLines,e.target.value] }))
          }
          type="text"
        />
      </label>
    </div>
  );
};

export default address_validation_test;