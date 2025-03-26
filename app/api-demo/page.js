// import sub components
//Here page.js is server component in which we can use async()
import Index from "./Index";

const Page = async () => {
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

export default Page;
