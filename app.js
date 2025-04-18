import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import workingHoursMiddleware from './middleware/workingHours.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Configuration Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour vérifier les heures de travail
app.use(workingHoursMiddleware);

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});