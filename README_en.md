# Project Setup Guide

This guide will help you install Python, Miniconda, and create a conda environment from the `environment.yml` file located in this project.

## Prerequisites

- A computer with internet access
- Basic knowledge of command line operations

## Step 1: Install Python

1. Download the latest version of Python from the [official website](https://www.python.org/downloads/).
2. Follow the installation instructions for your operating system.

## Step 2: Install Miniconda

1. Download the Miniconda installer for your operating system from the [official website](https://docs.conda.io/en/latest/miniconda.html).
2. Follow the installation instructions for your operating system.

## Step 3: Create a Conda Environment

1. Open a terminal or command prompt.
2. Navigate to the project directory:

```sh
cd <project_directory>
```

3. Create the conda environment from the `environment.yml` file:

```sh
conda env create -f environment.yml
```

4. Activate the newly created environment:

```sh
conda activate <environment_name>
```

Replace `<environment_name>` with the name specified in the `environment.yml` file.

## Libraries used in this project

1. pandas - For data manipulation and analysis.
2. numpy - For numerical operations.
3. matplotlib - For creating static, animated, and interactive visualizations.
4. seaborn - For statistical data visualization.
5. sqlalchemy - For SQL toolkit and Object-Relational Mapping (ORM).
6. pymysql - For connecting to MySQL databases.
7. scipy - For scientific and technical computing.
8. jupyter - For working with Jupyter Notebooks.

## Additional Resources

- [Conda Documentation](https://docs.conda.io/projects/conda/en/latest/user-guide/index.html)
- [Python Documentation](https://docs.python.org/3/)

Now you are ready to start working on the project. If you encounter any issues, please refer to the documentation or seek help from the community.
