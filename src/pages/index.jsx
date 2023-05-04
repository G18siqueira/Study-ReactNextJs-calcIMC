import PageSeo from '@/components/Layout/PageSeo';
import Imc from '@/components/Imc/Imc';

export default function Home() {
	return (
		<PageSeo title={'Calculador IMC'}>
			<Imc />
		</PageSeo>
	);
}
