import React, {useState} from "react";

const address_validation_test = () => {
  const [data, setData] = useState({
    address: {
      regionCode: "US",
      locality: "",
      addressLines: []
    }
  });
  const validateAddress = async () => {
    // const isEmpty = Object.values(address).some((e) => !e);
    // console.log(isEmpty)
    
    try {
        // if (isEmpty) return 
      const res = await fetch(
        `https://addressvalidation.googleapis.com/v1:validateAddress?key=${process.env.NEXT_PUBLIC_GOOGLE_VALIDATION}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      const data = res.json()
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  };
  console.log(data)
  return (
    <div className="container mx-auto flex flex-col gap-10 items-center py-24 h-screen">
      <label>
        locality
        <input
        //   onBlur={validateAddress}
          onChange={(e) =>
            setData((prev) => ({ ...prev, address: {
              ...prev.address,
              locality: e.target.value
            } }))
          }
          type="text"
        />
      </label>
      <label>
        addressLines
        <input
          onBlur={validateAddress}
          onChange={(e) =>
            setData((prev) => ({ ...prev, address: {
              ...prev.address,
              addressLines: [e.target.value]
            } }))
          }
          type="text"
        />
      </label>
    </div>
  );
};

export default address_validation_test;