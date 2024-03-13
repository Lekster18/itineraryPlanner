const CivicDistrict = () => {
  const getMalls = async () => {
    const searchType = "keyword";
    const searchValue = "Civic District";

    if (searchType && searchValue) {
      const res = await fetch(
        "https://api.stb.gov.sg/content/shops/v2/search?searchType=keyword&searchValues=civic",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "X-API-Key": process.env.API_KEY,
          },
          params: JSON.stringify({
            searchType,
            searchValue,
          }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        console.log("an error has occurred");
      }
    }
  };
};

export default CivicDistrict;

CivicDistrict();

// const data =
//   await fetch('https://api.stb.gov.sg/content/shops/v2/search?searchType=keyword&searchValues=civic', {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//       "X-API-Key": 'bUZU3E2n6LT40M5GuNDGB3ZpqoftnSD2',
//     },
//     params: JSON.stringify({
//       searchType, searchValue,
//     }),
//   });

// console.log(import.meta.env.TIH_SERVER);
