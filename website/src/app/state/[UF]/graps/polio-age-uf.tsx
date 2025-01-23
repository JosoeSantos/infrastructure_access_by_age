import React from 'react';
import BarPerYear from './bar-per-year';

interface BarGraphProps {
    uf: string;
}

const PolioAgeUF: React.FC<BarGraphProps> = async ({uf}: {uf:string}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/polio-age-uf?uf=${uf}`);
    const data = await response.json();
    data['6+'] = data['6']

    return (
        <BarPerYear data={data} title='Vacinação contra poliomelite por idade' overrideDataKey='idade' overrideColor='#003f5c' />
    );
};

export default PolioAgeUF;