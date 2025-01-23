import connectionPool from "@/services/connection-pool";

const fetchPolioDosesPerUF = async (uf: string) => {
    if (!uf) {
        return [];
    }
    if(uf.length !== 2) {
        return [];
    }

    const res = await connectionPool.query(` 
        select
            doses.ano as ano,
            Sum(quantidade_aplicada) as quantidade_doses_aplicadas
        from
            PUBLIC.doses_aplicadas_por_ano_segundo_municipio as doses
        left join estados
        on
            estados.cod_uf = cast(substring(codigo_municipio,
            1,
            2) as integer)
        where
            estados.uf = '${uf}'
        group by
            doses.ano
        order by
            quantidade_doses_aplicadas desc;
    `)

    return res.rows;
};

export const GET = async (req: Request) => {
    const parsedUrl = new URL(req.url);
    const uf = parsedUrl.searchParams.get('uf');
    const dosesPerUf = await fetchPolioDosesPerUF(uf);	
    console.log(dosesPerUf)
    return Response.json(dosesPerUf);
}

