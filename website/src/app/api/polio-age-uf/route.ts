import connectionPool from "@/services/connection-pool";

const fetchPolioDosesPerUF = async (uf: string) => {
    if (!uf) {
        return [];
    }
    if(uf.length !== 2) {
        return [];
    }

    const res = await connectionPool.query(`
        select vpt.idade, sum(vpt.quantidade) from 
            vacinacao_por_tipo vpt 
        join estados 
            on estados.cod_uf = vpt.fk_cod_uf
        where estados.uf='MG'
            and (vpt.vacina ='VOP' or vpt.vacina='VIP')
        group by vpt.idade 
        order by vpt.idade 
    `)

    return res.rows;
};

export const GET = async (req: Request) => {
    const parsedUrl = new URL(req.url);
    const uf = parsedUrl.searchParams.get('uf');
    const dosesPerUf = await fetchPolioDosesPerUF(uf);	
    
    return Response.json(dosesPerUf);
}

