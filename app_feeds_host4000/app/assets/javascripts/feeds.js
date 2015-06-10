var Feeds = function(container, data){
	var url = 'http://localhost:3000/feeds';
	this.container = container;
	

	if (data) {
		this.init(data);
		this.appendSection();
	} else {
		this.getData();
	}
};

Feeds.prototype.init = function(data) {	
	var feed;
	this.feeds = [];

	for (var i = 0; i < data.length; i++) {
	 feed = new Feed(null, data[i]);
	 this.feeds.push(feed);
	}
};

Feeds.prototype.draw = function() {
  var widget = $('<div/>',{class:'row', id:'allFeeds'});

  for(var i = 0; i < this.feeds.length; i++) {
    widget.append(this.feeds[i].draw());
  }
  return widget;
};

Feeds.prototype.getData = function() {
	var self = this;
	console.log("Retreive data from server");
	$.ajax({
		type: 'get',
		url: 'http://localhost:3000/feeds',
		success: function(data){
			console.log(data);	
			console.log("Data retreive success!");					
			self.init(data);
			self.appendSection();
		},
		error: function(xhr){
			console.log("Data retreive failed!");
		}
	});
};

Feeds.prototype.appendSection = function() {
	if (this.container) {
		this.container.append(this.draw());	
	} else {
		console.log("Couldn't append to container: Container not set");
	}
};