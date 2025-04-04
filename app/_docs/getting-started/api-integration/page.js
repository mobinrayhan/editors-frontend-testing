// import sub components
//Here Index is client component in which we can't use async()
import Index from "./Index";

const APIIntegration = async () => {
  const getData = async () => {
    const response = await fetch('https://dummyjson.com/products/1');
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json();
  }
  const data = await getData();
  return <Index data={data} />;
};

export default APIIntegration;
