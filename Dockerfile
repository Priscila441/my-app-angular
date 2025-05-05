# Imagen base
FROM node:20

# Directorio de trabajo
WORKDIR /app

# Copia de dependencias y código
COPY package*.json ./
RUN npm install
COPY . .

# Compilación
RUN npm run build

# Exposición del puerto
EXPOSE 4200

# Comando por defecto
CMD ["npm", "start"]
