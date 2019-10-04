# Alchemist ASP MVC Plugin

Provides ASP MVC related projects, nodes and code generation templates to Alchemist.

![alchemist-image](https://avatars1.githubusercontent.com/u/43213226?s=64&v=4)

[![Npm Version][npm-version-image]][npm-version-url]
[![Npm Downloads][npm-downloads-image]][npm-version-url]
[![Join Discord Chat][discord-image]][discord-url]

For more about Alchemist go look at: [Alchemist Application](https://github.com/alchemist/alchemist-application)

## What does the plugin do?

Allows creation of MVC related projects/nodes etc, such as:

### Projects
- `ASP MVC Application` (Creates an asp mvc application .net core)

### Nodes
- `ModelNode` (Creates an MVC Model class)
- `ControllerNode` (Creates an MVC Controller class)
- `APINode` (Creates and MVC Api class)
- `ViewNode` (Creates an MVC View file)

## How do I use it?

If you are developing on top of the library then add the dependency to `@alchemist/aspmvc`.
 
For using with alchemist application do the following plugin setup:

- Create a `aspmvc` folder within alchemist `plugins` directory
- Put the `index.js` file into the `aspmvc` directory
- Run alchemist

The plugin should be picked up, and allow you to create ASP MVC projects, it does depend upon `@alchemist/dotnet` plugin.

## Blurb

This library is still very much a work in progress so the docs will be sparse and if you want to know more head on over to the discord channel.




[npm-version-image]: https://badge.fury.io/js/%40alchemist%2Fecsrx.svg
[npm-version-url]: https://www.npmjs.com/package/%40alchemist%2Fecsrx
[npm-downloads-image]: https://img.shields.io/npm/dm/alchemist.svg?maxAge=2592000
[discord-image]: https://img.shields.io/discord/488609938399297536.svg
[discord-url]: https://discord.gg/bS2rnGz