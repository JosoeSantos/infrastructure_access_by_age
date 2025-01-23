import connectionPool from "@/services/connection-pool";

const fetchPolioDosesPerUF = async (uf: string) => {
    if (!uf) {
        return [];
    }
    if(uf.length !== 2) {
        return [];
    }

    const res = await connectionPool.query(`
        select e.nome from estados e where e.uf='${uf}'
    `)

    return res.rows;
};

export const GET = async (req: Request) => {
    const parsedUrl = new URL(req.url);
    const uf = parsedUrl.searchParams.get('uf');
    const dosesPerUf = await fetchPolioDosesPerUF(uf);	
    
    return Response.json(dosesPerUf);
}

