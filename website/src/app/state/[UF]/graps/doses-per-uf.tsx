import BarPerYear from './bar-per-year';

export const DosesPerUf = async ({ uf }: { uf: string }) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/total-year-uf?uf=${uf}`
    );
    const data = await response.json();
    data['6+'] = data['6'];

    return (
        <BarPerYear
            data={data}
            title='Total de vacinações no estado por ano'
            overrideDataKey='ano'
            overrideYKey='quantidade_doses_aplicadas'
            overrideColor='#bc5090'
        />
    );
};
