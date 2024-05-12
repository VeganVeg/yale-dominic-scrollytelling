# Rapport d'optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 12 mai 2024, 15:22:16](https://pagespeed.web.dev/analysis/https-dominic-tim-momo-com/1eulr2v3nm?form_factor=desktop)
## Problème #1
### Les éléments d'image ne possèdent pas de width ni de height explicites
Certaines balises <img> ne possèdent pas de width et de height explicies
### Action concrète pour résoudre le problème
Il faut ajouter un width et un height explicite aux éléments pour s'assurer qu'un espace suffisant est alloué sur la page avant que le navigateur ne commence à récupérer les images
