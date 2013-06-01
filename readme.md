# Observer

Simple implementation of pub/sub pattern

## Import

Simple browser import via HTML

```HTML
<script src="path/to/component/observer.min.js"></script>
```

Require AMD module (require.js)

```javascript
require.config({
	paths: {
		observer: 'path/to/component/observer.min.js'
	}
});

define(['observer'], function(Observer){
	var observer = new Observer();
});
```

via Node.js

```bash
npm install git@github.com:alexeyraspopov/observer.git
```

```javascript
var Observer = require('observer');
```

## Using

Create observer

```javascript
var observer = new Observer();
```

Subscribe an event

```javascript
observer.subscribe('event', function(){
	// just do something
});
```

Unsubscribe previously subscribed event

```javascript
observer.unsubscribe('event', callback);
```

Publish an event with data

```javascript
observer.publish('event', 'some data for callbacks');
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov