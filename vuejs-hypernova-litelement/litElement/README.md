# litElement

## Description

litElement is a project using [lit-element](https://lit-element.polymer-project.org/) to produce web component.


## Prerequisites 

The library `polymer-cli` must be installed:

```bash
npm install -g polymer-cli
```


## Run the project

Clone and install project then serve project:

```bash
#clone
git clone git@github.com:fvandenbulcke/microfrontend.git

cd ./vuejs-hypernova-litelement/litElement

#install
npm install

#run
polymer serve
```

## Project content

In `src`, are present 1 folder by web component. Each contain:

- `my-element.js`: the script to render web component
- `html file` as client for the web component
- other files to isolate some code

The different webcomponents are:

- `exemple`: to inject a simple `<div>`.

- `clickbutton`: to inject a button with a callback link to its click event.

- `hypernova_static`: to inject the expected code from `vue-server` project without call to the api. (non-operational)

- `hypernova`: to inject the expected code from `vue-server` project with call to the api. (non-operational)