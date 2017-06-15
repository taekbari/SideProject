/**
 * cbpBGSlideshow.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpBGSlideshow = (function () {
  var $slideshow = $( '#cbp-bislideshow' ),
      $items = $slideshow.children( 'li' ),
      itemsCount = $items.length,
      $controls = $( '#cbp-bicontrols' ),
      navigation = {
        $navPrev : $controls.find( 'a.cbp-biprev' ),
        $navNext : $controls.find( 'a.cbp-binext' ),
        $navPlayPause : $controls.find( 'a.cbp-bipause' )
      },
      current = 0,
      slideshowtime,
      isSlideshowActive = true,
      interval = 3500;

  function init ( config ) {
    $slideshow.imagesLoaded( function () {
      if ( Modernizr.backgroundsize ) {
        $items.each( function () {
          var $item = $( this );
          $item.css( 'background-image', 'url(' + $item.find( 'img' ).attr( 'src' ) + ')' );
        } );
      }
      else {
        $slideshow.find( 'img' ).show();
      }

      $items.eq( current ).css( 'opacity', 1 );
      initEvents();
      startSlideshow();
    } );
  }

  function initEvents () {
    navigation.$navPlayPause.on( 'click', function () {
      var $control = $( this );
      if ( $control.hasClass( 'cbp-biplay' ) ) {
        $control.removeClass( 'cbp-biplay' ).addClass( 'cbp-bipause' );
        startSlideshow();
      }
      else {
        $control.removeClass( 'cbp-bipause' ).addClass( 'cbp-biplay' );
        stopSlideshow();
      }
    } );

    navigation.$navPrev.on( 'click', function () {
      navigate( 'prev' );
      if ( isSlideshowActive ) {
        startSlideshow();
      }
    } );

    navigation.$navNext.on( 'click', function () {
      navigate( 'next' );
      if ( isSlideshowActive ) {
        startSlideshow();
      }
    } );
  }

  function navigate( direction ) {
    var $oldItem = $items.eq( current );
    if ( direction === 'next' ) {
      current = current < itemsCount - 1 ? ++current : 0;
    }
    else if ( direction === 'prev' ) {
      current = current > 0 ? --current : itemsCount - 1;
    }

    var $newItem = $items.eq( current );
    $oldItem.css( 'opacity', 0 );
    $newItem.css( 'opacity', 1 );
  }

  function startSlideshow() {
    isSlideshowActive = true;
    clearTimeout( slideshowtime );
    slideshowtime = setTimeout( function () {
      navigate( 'next' );
      startSlideshow();
    }, interval );
  }

  function stopSlideshow() {
    isSlideshowActive = false;
    clearTimeout( slideshowtime );
  }

  return {
    init: init
  };
})();
