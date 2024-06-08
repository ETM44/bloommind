# bloommind
Helps your mind flourish.

# Démarrer la bdd :

- Pour le développement lancer l'image de la bdd avec docker :
docker-compose up

# Installer le backend :

- Ouvrir une ligne de commande dans le dossier backend :
cd backend

- Installer les dépendances :
npm install

- Installer la CLI de prisma :
npm install -g prisma

- Migrer les tables en bdd :
npx prisma migrate dev --name init

- Peupler votre bdd avec des données de test :
npm install -D typescript ts-node @types/node
npx prisma db seed

# Installer le frontend :

- Ouvrir une ligne de commande dans le dossier frontend :
cd frontend

- Installer les dépendances :
npm install

# Lancer le projt :

- A la racine du projet :
npm run start