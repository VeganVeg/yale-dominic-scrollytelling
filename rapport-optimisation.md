# Rapport d'optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 12 mai 2024, 15:22:16](https://pagespeed.web.dev/analysis/https-dominic-tim-momo-com/1eulr2v3nm?form_factor=desktop)
## Problème #1
### Les éléments d'image ne possèdent pas de width ni de height explicites
Il faut ajouter un width et un height explicite aux balises <img> pour s'assurer qu'un espace suffisant est alloué sur la page avant que le navigateur ne commence à récupérer les images.
### Action concrète pour résoudre le problème
Dans la balise <img> qui correspond à la roulette animée de la souris, il n'y a pas de width et de height explicites. Il faudra donc ajouté un width de 14px ansi qu'un height de 14px, ce qui correspond à la largeur et la hauteur par défaut de l'élément.
