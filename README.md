Sitegen
=======

Generate websites by composing React components.

Getting started
---------------

Your site is an npm package, create one:

    % mkdir site && cd site
    % npm init

Install Sitegen, React and React Router packages and make them dependencies of
your site:

    % npm install sitegen react react-router --save

Create the first page of your site:

    % echo '# Hello, world!' > index.md

Start serving your site, edit `index.md` and see it updates instantly:

    % ./node_modules/.bin/sitegen serve ./index.md

Build your site:

    % ./node_modules/.bin/sitegen build ./index.md --output ./output
