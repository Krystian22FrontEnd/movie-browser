const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf";
const BASE_URL = "https://api.themoviedb.org/3/person/popular";

export const getPopularPersons = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { peoples: data.results };
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    return null;
  }
};
