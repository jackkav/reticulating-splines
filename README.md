# Reticulating Splines

A fun addition to your loading screen, based on The Sims.

![example](example.png)

## Installing

### Install via yarn

```sh
    yarn add jackkav/reticulating-splines
```

#### Use the React render props pattern

```jsx
<ReticulatingSplines theme="sims" interval={3000}>
  {({ spline }) => (
    <div>
      <p>{spline}</p>
      <div class="bar" />
    </div>
  )}
</ReticulatingSplines>
```

## Available Themes

* `'sims'` - A collection of messages from The Sims
* `'web'` - A collection of web/management jargon (buzz words)

## Development

First you'll need [NodeJS](http://nodejs.org), and then you'll need to do an `npm install`.

```sh
    yarn build:watch
```

This will watch for changes and build the minified script.
