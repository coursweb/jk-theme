# jk-theme

Un thème Jekyll pour [cours-web.ch](https://cours-web.ch/), créé par Manuel Schmalstieg pour publier facilement des supports de cours avec Github Pages.

Quelques fonctionnalités

## Utiliser ce thème avec Github Pages

Pour utiliser ce thème dans un site [Github Pages](https://cours-web.ch/git/github-pages.html), il suffit d'ajouter la ligne suivante dans le fichier `_config.yml` :

```
remote_theme: coursweb/jk-theme
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

## Licence

Ce thème est sous licence MIT, il est donc open-source. C'est la licence généralement utilisée par les thèmes Jekyll.

## Liens

- Documentation Jekyll: https://jekyllrb.com/docs/themes/
- Documentation Github Pages: https://cours-web.ch/git/github-pages.html
