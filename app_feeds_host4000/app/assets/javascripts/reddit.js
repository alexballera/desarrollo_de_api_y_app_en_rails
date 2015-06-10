var Reddit = function(container, data){
  'use strict';
  var url = 'http://localhost:3000/reddit';
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

Reddit.prototype.init = function(data) {
  'use strict';  
  console.log(data[0]);
  this.title = data.title;
  this.author = data.author;
  this.url = data.url;
  this.date = data.date;
  this.image = data.image;     
};

Reddit.prototype.draw = function() {
  widget = $('<div/>',{id:'feed',class:'col-md-2 col-sm-4 col-xs-12'}).append(
    $("<div/>",{class:"row feed text-center"}).append(
      $("<div/>",{class:"col-md-12"}).append(
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

Reddit.prototype.getData = function() {
  var self = this;
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/reddit',
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

Reddit.prototype.appendSection = function() {
  if (this.container) {
    this.container.append(this.draw());  
  } else {
    console.log('Error Al Dibujar Feed En El Contenedor');
  }
};