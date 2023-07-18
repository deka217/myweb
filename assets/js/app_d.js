
const tabs = () => {

    $(".js-nav-link").click(function() {
      var $this = $(this);
      var $category = $this.data("category");
      $(".c-nav button").removeClass("is-active");
      $this.addClass("is-active");
  
      $('.c-builder__category').addClass("u-d-none");
      $('.c-builder__category').each(function(){
        var $this = $(this);
        $this.scrollTop();
        if($(this).data('category') == $category) {
          $this.removeClass("u-d-none");
        }
      });
    });
  
    $(".c-builder__category--head").removeClass("u-d-none")
  
  }
  
  const confetti = () => {
  
    $(".c-builder__part").click(function(e) {
      var $this = $(this);
      e.preventDefault();
  
      $this.addClass("animate");
      $("#target").addClass("animate");
  
      setTimeout(function(){
          $this.removeClass("animate");
          $("#target").removeClass("animate");
        }, 700);
    });
  }
  
  const builder = () => {
  
    var $id = 0;
    var $layerCount = 0;
  
    $(".js-add").click(function(e) {
      var $this = $(this);
      e.preventDefault();
  
      var $data = $this.data("part");
      var $image = $this.find("img");
      var $layerItem = $("#layer-item");
      var $name = $this.closest(".c-builder__category").data("category");
  
      var $cloneImage = $image.clone(true, true);
  
      $image.clone(true, true).attr('id', "item_" + $id).removeClass("c-builder__icon").addClass("c-canvas__icon").appendTo("#target");
      $layerItem.clone(true, true).attr('id', "layer_" + $id).prependTo("#layers").find(".c-layers__name").text($name);
  
      var $iconLayer = $("#layer_" + $id);
  
      var $iconPreview = $iconLayer.find(".c-layers__preview");
  
      $cloneImage.appendTo($iconPreview);
      $id++;
      $layerCount++;
  
      $(".c-panel__placeholder").addClass("u-d-none");
      $(".c-download").removeClass("u-d-none");
  
    });
  
  
    $(".js-delete-layer").click(function(e) {
      var $this = $(this);
      e.preventDefault();
  
      var $id = $this.closest(".c-layers__item").attr('id');
      var $delimiter = '_';
      var $thisNumber = $id.split($delimiter)[1];
  
      var $iconCanvas = $("#item_" + $thisNumber);
      var $iconLayer = $("#layer_" + $thisNumber);
  
      $($iconCanvas).remove();
      $($iconLayer).remove();
      $layerCount--;
  
      if($layerCount === 0) {
        $(".c-panel__placeholder").removeClass("u-d-none");
        $(".c-download").addClass("u-d-none");
      };
    });
  
  }
  
  const sort = () => {
  
    var $array = new Array();
  
    function sortDom(selectorArray) {
      let $el = $(selectorArray.pop());
      $el.parent().append($el);
  
      var $id = 1000;
  
      $('.c-canvas__emoji img').each(function(i){
        var $this = $(this);
        $this.css("z-index", $id);
        $id--;
      });
  
    }
  
    function arraySort() {
  
      $('.c-layers__content .c-layers__item').each(function(i){
        var $this = $(this);
        var $delimiter = '_';
        $id = $this.attr("id").split($delimiter)[1];
        $array.push("#item_" + $id);
        $array.reverse();
        sortDom($array);
      });
    }
  
    $(".js-sortable").sortable({
      // axis: "y",
      containment: ".js-sortable",
      handle: ".dragHandle",
      placeholder: "sortable-placeholder",
      revert: 100,
      cursor: "move",
      tolerance: 'pointer',
      scroll: true,
      stop: function(event,ui) {
        arraySort();
      }
    });
  
    $("#download").click(function(e) {
      domtoimage.toBlob(document.getElementById('target'))
        .then(function (blob) {
            window.saveAs(blob, 'custoji.png');
        });
    });
  
  }
  
  const mobGrid = () => {
  
    $(".js-mob-toggle").click(function(e) {
      e.preventDefault();
      var $this = $(this);
      var $category = $this.data("toggle");
      $(".c-toggle__button").removeClass("is-active");
      $this.addClass("is-active");
  
      console.log($category);
  
      $('.js-grid-mob').addClass("u-d-none");
      $('.js-grid-mob').removeClass("u-d-block");
      $('.js-grid-mob').each(function(){
        var $this = $(this);
  
        if($(this).data('toggle') == $category) {
          console.log($this.data());
          $this.removeClass("u-d-none");
          $this.addClass("u-d-block");
        }
      });
    });
  
    var windowWidth = $(window).width();
  
    $(window).resize(function() {
  
      if ($(window).width() != windowWidth) {
        if ($(window).width() < 992) {
  
          if ($('.mobile').length === 0) {
            $('.c-grid__right').removeClass("u-d-block");
            $(".c-toggle__button").removeClass("is-active");
            $(".c-toggle__button--left").addClass("is-active");
          }
  
          $("body").addClass("mobile");
  
        }
        else {
  
          $("body").removeClass("mobile");
  
          if ($('.mobile').length === 0) {
            $('.js-grid-mob').removeClass("u-d-none");
            $('.js-grid-mob').addClass("u-d-block");
          }
        }
      }
    });
  }
  
  
  $(document).ready(() => {
    tabs();
    confetti();
    builder();
    sort();
    mobGrid();
  });