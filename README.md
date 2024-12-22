# Guia de Configuração do Projeto

Este guia ajudará você a instalar Python, Miniconda e criar um ambiente conda a partir do arquivo `environment.yml` localizado neste projeto.

## Pré-requisitos

- Um computador com acesso à internet
- Conhecimento básico de operações de linha de comando

## Passo 1: Instalar Python

1. Baixe a versão mais recente do Python no [site oficial](https://www.python.org/downloads/).
2. Siga as instruções de instalação para o seu sistema operacional.

## Passo 2: Instalar Miniconda

1. Baixe o instalador do Miniconda para o seu sistema operacional no [site oficial](https://docs.conda.io/en/latest/miniconda.html).
2. Siga as instruções de instalação para o seu sistema operacional.

## Passo 3: Criar um Ambiente Conda

1. Abra um terminal ou prompt de comando.
2. Navegue até o diretório do projeto:

```sh
cd <diretorio_do_projeto>
```

3. Crie o ambiente conda a partir do arquivo `environment.yml`:

```sh
conda env create -f environment.yml
```

4. Ative o ambiente recém-criado:

```sh
conda activate trab_ibd
```

Substitua `trab_ibd` pelo nome especificado no arquivo `environment.yml`.

## Bibliotecas usadas no projeto:

1. pandas - Para manipulação e análise de dados.
2. numpy - Para operações numéricas.
3. matplotlib - Para criar plots estatísticos, animações e outras vizualizações.
4. seaborn - Biblioteca para vizualizar dados estatísticos.
5. sqlalchemy - ORM para mysql, simplificando o controle e uso de dados.
6. pymysql - Para fazer conexões a bancos de dados.
7. scipy - Funções para análise científica de dados.
8. jupyter - Ferramenta para notebooks.

## Recursos Adicionais

- [Documentação do Conda](https://docs.conda.io/projects/conda/en/latest/user-guide/index.html)
- [Documentação do Python](https://docs.python.org/3/)

Agora você está pronto para começar a trabalhar no projeto. Se encontrar algum problema, consulte a documentação ou procure ajuda na comunidade.
