import Head from 'next/head';

const PageSeo = ({ title, description, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<main>{children}</main>
		</>
	);
};

export default PageSeo;
