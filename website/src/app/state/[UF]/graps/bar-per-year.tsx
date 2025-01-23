'use client';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

interface DataPoint {
    year: string;
    value: number;
}

interface BarGraphProps {
    data: DataPoint[];
    title: string;
    overrideDataKey?: string;
    overrideYKey?: string;
    overrideColor?: string;
}

const BarPerYear: React.FC<BarGraphProps> = ({
    data,
    title,
    overrideDataKey,
    overrideYKey,
    overrideColor,
}) => {
    return (
        <Card className='flex-1'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width='100%' height={400}>
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey={overrideDataKey ?? 'ano'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={overrideYKey ?? 'sum'} fill={overrideColor ?? '#58508d'} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default BarPerYear;
