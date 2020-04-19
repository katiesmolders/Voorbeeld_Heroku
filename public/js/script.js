var iso = new Isotope( '.works', {
  layoutMode: 'vertical',
  itemSelector: '.alleWerken',
  getSortData: {
    title: '.title',
    description: '[data-description]',
    artist: '[data-artist]',
    year: '.year'
  }
});

var sortByGroup = document.querySelector('.sort-by-button-group');
sortByGroup.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var sortValue = event.target.getAttribute('data-sort-value');
  iso.arrange({ sortBy: sortValue });
});

var filterFns = {
    VincentvanGogh: function( itemElem ) {
      var program = itemElem.querySelector('.artist').textContent;
      return program.match(/Vincent van Gogh/);
    },
    PaulGauguin: function( itemElem ) {
      var program = itemElem.querySelector('.artist').textContent;
      return program.match(/Paul Gauguin/);
    },
    EmileBernard: function( itemElem ) {
      var program = itemElem.querySelector('.artist').textContent;
      return program.match(/Emile Bernard/);
    },
    JohnPeterRussell: function( itemElem ) {
      var program = itemElem.querySelector('.artist').textContent;
      return program.match(/John Peter Russell/);
    },
    CharlesLaval: function( itemElem ) {
      var program = itemElem.querySelector('.artist').textContent;
      return program.match(/Charles Laval/);
    }
  };


  var filtersElem = document.querySelector('.filters-button-group');
  filtersElem.addEventListener( 'click', function( event ) {

    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });


          var buttonGroups = document.querySelectorAll('.button-group');
          for ( var i=0; i < buttonGroups.length; i++ ) {
            buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
          }

          function onButtonGroupClick( event ) {
            if ( !matchesSelector( event.target, '.button' ) ) {
              return;
            }
            var button = event.target;
            button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
            button.classList.add('is-checked');
          }
