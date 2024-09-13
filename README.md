# Locadora de Filmes - Frontend

Este projeto é a interface web para a locadora de filmes, desenvolvida com PHP, JavaScript, CSS e Sass. Utiliza Docker e Docker Compose para facilitar a configuração e o gerenciamento do ambiente.

## Requisitos

- **Docker**: Certifique-se de que o Docker está instalado em sua máquina.
- **Docker Compose**: Incluído no Docker Desktop ou instalado separadamente.

## Estrutura do Projeto

- **docker-compose.yml**: Configura os serviços necessários para o frontend.
- **Dockerfile**: Define o ambiente de execução do PHP.
- **src/**: Contém o código-fonte PHP e arquivos relacionados.
- **assets/js/**: Scripts JavaScript utilizados pela aplicação.
- **assets/css/**: Arquivos CSS e Sass para estilização da aplicação.

## Configuração e Execução com Docker

1. **Clone o Repositório**

   Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/rodrigoarka/teste_rededoor_front.git


Navegue para o Diretório do Projeto

bash
Copiar código
cd teste_rededoor_front
Crie o Arquivo docker-compose.yml

Crie um arquivo chamado docker-compose.yml no diretório raiz do projeto com o seguinte conteúdo:

yaml
Copiar código
version: '3.8'

services:
  web:
    image: php:7.4-apache
    container_name: locadora_frontend
    ports:
      - "8080:80"
    volumes:
      - ./src:/var/www/html
      - ./assets:/var/www/html/assets
    networks:
      - locadora_network

networks:
  locadora_network:
    driver: bridge
Crie o Arquivo Dockerfile

Crie um arquivo chamado Dockerfile no diretório raiz do projeto com o seguinte conteúdo:

Dockerfile
Copiar código
FROM php:7.4-apache

# Instalar extensões do PHP se necessário
# RUN docker-php-ext-install mysqli

# Configurar o diretório de trabalho
WORKDIR /var/www/html

# Copiar arquivos de configuração se necessário
# COPY config/ /etc/apache2/
Configurar o Ambiente

Certifique-se de que seus arquivos PHP estão no diretório src/ e seus arquivos JavaScript e CSS no diretório assets/.

Iniciar os Contêineres

Execute o seguinte comando para construir e iniciar os contêineres:

bash
Copiar código
docker-compose up --build
Isso construirá a imagem do Docker e iniciará o contêiner, mapeando a porta 80 do contêiner para a porta 8080 da sua máquina local.

Acesse a Aplicação

Abra um navegador e acesse a aplicação na URL:

arduino
Copiar código
http://localhost:8080
Parar os Contêineres

Para parar os contêineres, use:

bash
Copiar código
docker-compose down
Isso parará e removerá os contêineres, mas manterá os volumes e redes criados.

