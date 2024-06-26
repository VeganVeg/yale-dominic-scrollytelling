# Rapport d'optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 12 mai 2024, 15:22:16](https://pagespeed.web.dev/analysis/https-dominic-tim-momo-com/1eulr2v3nm?form_factor=desktop)
## Problème #1
### Les éléments d'image ne possèdent pas de width ni de height explicites
Il faut ajouter un width et un height explicite aux balises <img> pour s'assurer qu'un espace suffisant est alloué sur la page avant que le navigateur ne commence à récupérer les images.
### Action concrète pour résoudre le problème
Dans la balise <img> qui correspond à la roulette animée de la souris, il n'y a pas de width et de height explicites. Il faudra donc ajouté un width de 14px ansi qu'un height de 14px, ce qui correspond à la largeur et la hauteur par défaut de l'élément.
### Résultat
J'ai ajouté un width de 14px ansi qu'un height de 14px à l'élément en question, ce qui m'a permis de résoudre mon problème.
## Problème #2
### Diffusez des images aux formats nouvelle génération
Afin d'obtenir une compression d'image de meilleur qualité, il faut changer les fichiers PNG par des fichiers WebP. Par conséquent, les téléchargements seront plus rapides et la consommation de données sera réduite.
### Action concrète pour résoudre le problème
Pour ce faire, je remplacerai le format PNG des spritesheets par un format WebP.
### Résultat
J'ai remplacé le le format PNG des spritesheets par un format WebP, ce qui m'a permis de résoudre mon problème.
## Problème #3
### Différez le chargement des images hors écran
Afin de réduire le délai avant que l'interactivité débute, il faut commencer le chargement des images qui ne sont pas encore dans l'écran après que les ressources essentielles aient fini de charger.
### Action concrète pour résoudre le problème
Pour ce faire, il faudra mettre un loading="lazy" aux images qui ne sont pas encore entré dans l'écran pour leur interaction.
### Résultat
J'ai mis un loading="lazy" aux images qui ne sont pas encore entré dans l'écran pour leur interaction ce qui m'a permis de résoudre mon problème.
##[Page Speed Insights - Rapport du 12 mai 2024, 17:29:07](https://pagespeed.web.dev/analysis/https-dominic-tim-momo-com/56xvrfc4mc?form_factor=desktop)
