var Feed = function(container, data){
  'use strict';
  var url = 'http://localhost:3000/feeds';
  this.container = container; 
 
  if(container) {    
    this.id = container.data('feed');
  }

  if(data) {    
    this.init(data);
    this.appendSection();
  } else {
    this.getData();
  }
};

Feed.prototype.init = function(data) {
  'use strict';  
  console.log(data[0]);
  this.title = data.title;
  this.author = data.author;
  this.url = data.url;
  this.date = data.date;
  this.image = data.image;   
  this.website = data.website;     
};

Feed.prototype.draw = function() {
  widget = $('<div/>',{id:'feed',class:'col-md-2 col-sm-4 col-xs-12'}).append(
    $("<div/>",{class:"row feed text-center"}).append(
      $("<div/>",{class:"col-md-12"}).append(        
      $("<div/>",{class:"row"}).append(
          $("<div/>",{class:"col-md-12 website"}).append(
            $("<p>").html(this.website)
            )
          ),      
        $("<div/>",{class:"row"}).append(
          $("<div/>",{class:"col-md-12 image"}).append(
            $("<img/>",{class: "feed_image", src:this.image})
            )
          ),      
      $("<div/>",{class:"row"}).append(
        $("<div/>",{class:"col-md-12 title"}).append(
          $("<a>",{href:this.url}).html(this.title)
          )
        ),
      $("<div/>",{class:"row"}).append(
        $("<div/>",{class:"col-md-12 author"}).append(
          $("<p>").html(this.author)
          )
        )
      )
    )
  );
  return widget;
};

Feed.prototype.getData = function() {
  var self = this;
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/feeds',
    success: function(data){
      console.log("Data retreive success!");        
      self.init(data);
      self.appendSection();
    },
    error: function(xhr){      
      console.log('Error Recibieno Data Feed Del Servidor');
    }
  });
};

Feed.prototype.appendSection = function() {
  if (this.container) {
    this.container.append(this.draw());  
  } else {
    console.log('Error Al Dibujar Feed En El Contenedor');
  }
};