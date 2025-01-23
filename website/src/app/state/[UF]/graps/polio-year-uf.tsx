import React from 'react';
import BarPerYear from './bar-per-year';

interface BarGraphProps {
    uf: string;
}

const PolioYearUF: React.FC<BarGraphProps> = async ({uf}: {uf:string}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/polio-year-uf?uf=${uf}`);
    const data = await response.json();
    return (
        <BarPerYear data={data} title='Vacinação contra poliomelite' />
    );
};

export default PolioYearUF;