# Observer

Simple implementation of pub/sub pattern

## Import

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

Publish an event with data

```javascript
observer.publish('event', 'some data for callbacks');
```