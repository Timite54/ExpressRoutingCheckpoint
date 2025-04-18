import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('accueil', { 
    title: 'Accueil',
    currentPath: req.path
  });
});

router.get('/services', (req, res) => {
  res.render('services', { 
    title: 'Nos Services',
    currentPath: req.path
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Nous Contacter',
    currentPath: req.path
  });
});

export default router;