# Use a imagem oficial do Node.js como base
FROM node:18

# Exponha a porta em que a aplicação Vite irá ser executada (geralmente a porta 80)
EXPOSE 80

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Execute o comando npm install para instalar as dependências
RUN npm install --legacy-peer-deps

# Copie todos os arquivos do código-fonte da aplicação para o diretório de trabalho
COPY . .

# Construa a aplicação Vite para produção
RUN npm run build

# Instale um servidor HTTP simples, como o serve, para servir os arquivos estáticos
RUN npm install -g serve

# Comando para iniciar o servidor HTTP e servir a aplicação Vite
CMD ["serve", "-s", "dist", "-l", "80"]
