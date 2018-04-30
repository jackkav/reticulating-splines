# Reticulating Splines

A fun addition to your loading screen, based on The Sims.

![example](example.png)

## Installing

### Install via yarn

```sh
    yarn add jackkav/reticulating-splines
```

#### Use the React [render props](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) pattern, design your own layout

```jsx
<ReticulatingSplines theme="sims" interval={3000}>
  {({ spline }) => (
    <div>
      <p>{spline}</p>
      <div className="bar" />
    </div>
  )}
</ReticulatingSplines>
```

```css
.bar {
  width: 100%;
  height: 20px;
  border: 1px solid #2980b9;
  border-radius: 3px;
  background-image: repeating-linear-gradient(
    -45deg,
    #2980b9,
    #2980b9 11px,
    #eee 10px,
    #eee 20px /* determines size */
  );
  background-size: 28px 28px;
  animation: move 0.5s linear infinite;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 28px 0;
  }
}
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
