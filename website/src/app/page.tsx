import { BrasilMap } from "@/components/map";

export default function Home() {
  return (
    <div className="flex flex-col p-4 gap-4 grid-cols-1 h-full">
      <h1 className="text-3xl font-bold">
        Análise Demográfica e de Vacinação da população brasileira no período
        2019 a 2023
      </h1>
      <h2 className="text-xl bold">Objetivo do projeto:</h2>
      <p>
        Construir banco de dados relacionais utilizando diferentes bases de
        dados públicos de modo a permitir a análise e correlação do conjunto de
        dados selecionados para dimensionamento do alcance da vacinação no país
        no período de 2019 a 2023 considerando os potenciais fatores de
        interferência.
      </p>
      <BrasilMap />
    </div>
  );
}
