export default async function getData(type) {
  try {
    const response = await fetch(`${process.env.API_URL}/${type}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const xTotalCounts = response.headers.get("x-total-count");

    return {
      props: {
        data,
        xTotalCounts,
      },
    };
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      props: {
        data: [],
        xTotalCounts: 0,
        error: error.message,
      },
    };
  }
}
