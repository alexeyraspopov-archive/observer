describe('observer', function(){
	var observer, listeners, empty = function(){};

	beforeEach(function(){
		observer = new Observer();
		listeners = observer.listeners;
	});

	it('should register new subscriber', function(){
		observer.subscribe('event', empty);

		expect(listeners.event instanceof Array).toBeTruthy();
		expect(listeners.event.length).toBe(1);
		expect(listeners.event[0]).toBe(empty);
	});

	it('should create collections for different events', function(){
		observer.subscribe('event1', empty);
		observer.subscribe('event2', empty);

		expect(listeners.event1).toBeDefined();
		expect(listeners.event2).toBeDefined();
	});

	it('should remove subscriber callback', function(){
		observer.subscribe('event', empty);
		observer.unsubscribe('event', empty);

		expect(listeners.event.length).toBe(0);
	});

	it('should call subscriber callback on publish', function(){
		var subscriber = {
				callback: empty
			};

		spyOn(subscriber, 'callback');

		observer.subscribe('event', subscriber.callback);
		observer.publish('event', 'some data');

		expect(subscriber.callback).toHaveBeenCalledWith('some data');
	});

	it('should call callback in order', function(){
		var order = [];

		observer.subscribe('event', function(){
			order.push(1);
		});

		observer.subscribe('event', function(){
			order.push(2);
		});

		observer.publish('event');

		expect(order.toString()).toBe('1,2');
	});
});