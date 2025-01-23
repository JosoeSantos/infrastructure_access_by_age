import connectionPool from "@/services/connection-pool";

const fetchPolioDosesPerUF = async (uf: string) => {
    if (!uf) {
        return [];
    }
    if(uf.length !== 2) {
        return [];
    }

    const res = await connectionPool.query(` 
        select vpt.ano, sum(vpt.quantidade) from 
            vacinacao_por_tipo vpt 
        join estados 
            on estados.cod_uf = vpt.fk_cod_uf
        where estados.uf='${uf}'
            and (vpt.vacina ='VOP' or vpt.vacina='VIP')
        group by vpt.ano 
        order by vpt.ano 
    `)

    return res.rows;
};

export const GET = async (req: Request) => {
    const parsedUrl = new URL(req.url);
    const uf = parsedUrl.searchParams.get('uf');
    const dosesPerUf = await fetchPolioDosesPerUF(uf);	
    
    return Response.json(dosesPerUf);
}

