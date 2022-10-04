# jk-theme

Un thème Jekyll pour [cours-web.ch](https://cours-web.ch/), créé par Manuel Schmalstieg pour publier facilement des supports de cours avec Github Pages.

Quelques fonctionnalités

## Utiliser ce thème avec Github Pages

Pour utiliser ce thème dans un site [Github Pages](https://cours-web.ch/git/github-pages.html), ajouter le code suivant dans le fichier `_config.yml` :

```
remote_theme: coursweb/jk-theme

title: Titre exemple

description: Description de cet exemple

lang: fr-FR

robots: noindex, nofollow

# menu 
chapters:
 - title: Cours-Web
   url: https://cours-web.ch/
 - title: MDN
   url: https://developer.mozilla.org/fr/

# pied de page   
footer_col_1: <ul class="contact-list">
  <li>Eracom, Lausanne</li>
  <li>2022</li></ul>
footer_col_2: <ul class="social-media-list"><li><a href="https://github.com/">Lien Github</a></li></ul>
```

## Configurer les menus

Ce thème produit deux menus de navigation:

- Un menu de **premier niveau**, destiné à envoyer vers d'autres cours ou à un index global. Configurable dans `_config.yml`.
- Un menu de **deuxième niveau**, qui contient les différentes pages du support de cours. Toutes les pages utilisant "layout: page" seront prises en compte.

Pour le menu de premier niveau, voici comment déclarer les pages:

```
chapters:
 - title: Cours-web
   url: https://cours-web.ch/
 - title: Serveurs
   url: https://cours-web.ch/serveurs/
```

## Configurer le pied de page

Le pied de page est divisé en trois colonnes. Le contenu peut être renseigné dans `_config.yml` de la façon suivante:

```
footer_col_1: <ul class="contact-list">
  <li>Contact Information</li>
  <li>2017–2021</li></ul>
footer_col_2: <ul class="social-media-list"><li><a href="https://github.com/github-link">Github Link</a></li></ul>
footer_col_3: Un cours sur diverses procédures pour gérer un serveur web.
```

## Bloquer l'indexation

L'indexation par les moteurs de recherche peut être empêchée en ajoutant le paramètre suivant à `_config.yml`:

```
robots: noindex, nofollow
```

## Créer des pages

Pour ajouter des pages au site, vous devez créer des fichiers au format Markdown. Ces fichiers devront avoir l'extention `.md`, et doivent commencer par quelques lignes de code selon le format suivant:

```
---
layout: page
title: Titre de la page
permalink: url-de-la-page.html
---
```

Le paramètre `permalink` est optionnel.

L'ordre des pages est purement alphabétique. Vous pouvez utiliser une numérotation (dans les noms de fichiers) pour déterminer l'ordre, par exemple: `10-typographie.md`, `20-webfonts.md`, `30-sources.md`, etc.

⚠️ **Important:** La page que vous utilisez comme page d'accueil devra avoir comme valeur `permalink: index.html`.

Pour voir des exemples, vous pouvez consulter les différents dossiers sous https://github.com/coursweb

## Licence

Ce thème est sous licence MIT, il est donc open-source. C'est la licence généralement utilisée par les thèmes Jekyll.

## Processeur Markdown

Il est possible de spécifier le processeur dans `_config.yml`, avec cette ligne: `markdown: GFM`. Cette variante nommée GitHub-flavored Markdown (GFM) a quelques avantages, notamment: chaque URL devient un lien, même sans la syntaxe markdown. Parmi les inconvénients: certaines balises sont prohibées, comme la balise `iframe`. Cela rend impossible l'intégration de vidéos Youtube.

## Liens

- Documentation Jekyll: https://jekyllrb.com/docs/themes/
- Documentation Github Pages: https://cours-web.ch/git/github-pages.html
