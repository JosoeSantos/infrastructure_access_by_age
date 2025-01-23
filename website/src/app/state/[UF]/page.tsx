import PolioYearUF from './graps/polio-year-uf';
import PolioAgeUF from './graps/polio-age-uf';
import { DosesPerUf } from './graps/doses-per-uf';

export default async function StatePage({
    params,
}: {
    params: Promise<{ UF: string }>;
}) {
    const { UF } = await params;
    const nomes = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/uf?uf=${UF}`);
    const nome = (await nomes.json())[0].nome;
    return (
        <div>
            <h1 className='text-3xl text-left ml-4 mb-8 mt-4'>{nome} ({UF})</h1>
            <div className='flex gap-4 p-4 flex-wrap justify-around w-full'>
                <div className='flex gap-4 w-full'>
                    <PolioYearUF uf={UF as string} />
                    <PolioAgeUF uf={UF as string} />
                </div>
            </div>
            <div className='flex gap-4 justify-center max-w-[600px]  mx-auto'>
                <DosesPerUf uf={UF as string} />
            </div>
        </div>
    );
}
