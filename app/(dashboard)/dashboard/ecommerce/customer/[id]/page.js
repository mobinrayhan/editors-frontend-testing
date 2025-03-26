// import sub components
import { Fragment } from "react";
import Index from "./Index";

// import data files
import CustomersData from 'data/dashboard/customers/CustomersData';

export const metadata = {
	title: "Customer details | Geeks Nextjs Template",
}

const Page = ({ params }) => {
	const data = CustomersData.filter((customer) => customer.id === parseInt(params.id))[0]
	return (<Index customer={data} />);
};

export default Page;
