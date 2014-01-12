# React smart package for Meteor

**React Version:** 0.8.0

meteor-react is a smart package for [Meteor](https://www.meteor.com) that provides integration for [React](http://facebook.github.io/react/).

React's [add-ons](http://facebook.github.io/react/docs/addons.html) are available.

## Quick Start

```shell
mrt add react
```

## Usage

### Creating React components

Write your React components in files with `.jsx` extension.

```shell
foobar.jsx
```

### Connecting Meteor's reactive states to React's

To receive reactive data from Meteor, add `MeteorMixin` as a mixin to the React component that should receive state updates, and implement the getMeteorState method by making use of any reactive data source from Meteor:

```javascript
// foobar.jsx

var Foo = React.createClass({
    mixins: [MeteorMixin],

    getMeteorState: function() {
        return {
            // update React's this.state.bar by value of Session.get('bar')
            bar: Session.get('bar');
        };
    }
});
```

The state will be available as a property of `this.state.meteor`.

For example, to access `bar` in the component `Foo` above, we can do:

```javascript
// foobar.jsx

var Foo = React.createClass({
    ...
    render: function() {
        var bar = this.state.meteor.bar;
        return (<span>{bar}</span>);
    }
    ...
});
```

Refer to the [Interactivity and Dynamic UIs](http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html) Guide for an explanation of how state works in React.

## Credits

meteor-react is based on [`meteor-react`](https://github.com/benjamn/meteor-react) by @benjamn and [`react-meteor`](https://github.com/petehunt/react-meteor) by @petehunt.

## License

Copyright (c) 2014 David Leung and contributors. See LICENSE.md for further details.
