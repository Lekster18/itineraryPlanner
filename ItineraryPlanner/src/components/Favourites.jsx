import { useEffect } from "react";

const Favourites = () => {
  useEffect(() => {
    const setData = async () => {
      try {
        const res = await fetch(
          "https://api.airtable.com/v0/appK0n8UQ1jxmNCyv/Table%201",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              records: [
                {
                  fields: {
                    uuid: "007af02e4ad98554aeb939103509b7c5d56",
                    name: "1000000PM",
                  },
                },
              ],
            }),
          }
        );

        if (res.ok) {
          const data = await res.json();
          console.log(data);
        } else {
          console.error("Error fetching");
          console.log(res);
        }
      } catch (error) {
        console.error("An error occurred:" + error.message);
      }
    };

    setData();
  }, []);

  return (
    <>
      <h1>Testtt</h1>
    </>
  );
};

export default Favourites;
