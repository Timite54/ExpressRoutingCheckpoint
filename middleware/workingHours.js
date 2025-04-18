/**
 * Middleware pour vérifier si la requête est effectuée pendant les heures de travail
 * (Lundi au Vendredi, de 9h à 17h)
 */
const workingHoursMiddleware = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  
  // Vérification si jour de semaine (Lundi-Vendredi) et heures de travail (9h-17h)
  const isWorkingDay = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;
  
  if (isWorkingDay && isWorkingHour) {
    next();
  } else {
    res.render('horsHeures', { 
      title: 'Hors des heures de travail',
      currentPath: req.path
    });
  }
};

export default workingHoursMiddleware;