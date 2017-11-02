var options= [
          {selector: "#features",offset: 50, callback: function(el){


               $('#featurestitle').toggleClass('scale-in');
          }},
          {selector: '#pageslist', offset: 50, callback: function(el){
               Materialize.showStaggeredList($(el));
          }},
          {selector: '#extraslist', offset: 50, callback: function(el){
               Materialize.showStaggeredList($(el));
          }},
          {selector: "#designimpl",offset: 50, callback: function(el){


               $('#designimplementation').toggleClass('scale-in');
          }},
          {selector: '#fontslist', offset: 50, callback: function(el){
               Materialize.showStaggeredList($(el));
          }},
          {selector: "#designvisionimpl",offset: 50, callback: function(el){


               $('#designvision').toggleClass('scale-in');
          }},
        ];
        Materialize.scrollFire(options);
