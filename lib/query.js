export default async function getData(type) {
  const response = await fetch(`${process.env.API_URL}/${type}`);
  const data = await response.json();

  const xTotalCounts = response.headers.get("x-total-count");
  return {
    props: {
      data,
      xTotalCounts,
    },
  };
}
