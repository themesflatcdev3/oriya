/**
 * selectImages
 * preloader
 * Scroll process
 * Button Quantity
 * Delete file
 * Go Top
 * color swatch product
 * change value
 * footer accordion
 * close announcement bar
 * sidebar mobile
 * tabs
 * flatAccordion
 * button wishlist
 * button loading
 * variant picker
 * switch layout
 * item checkbox
 * infinite scroll
 * stagger wrap
 * filter
 * modal second
 * header sticky
 * header change background
 * img group
 * contact form
 * subscribe mailchimp
 * auto popup

 */


(function ($) {
  "use strict";



  /* selectImages
  -------------------------------------------------------------------------------------*/
  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");
      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            "<img src='%i'/> %s"
              .replace(/%i/, imgURL)
              .replace(/%s/, selectOption.text())
          );
        }
      });
      selectIMG.selectpicker();
    }
  };

  /* preloader
  -------------------------------------------------------------------------------------*/
  const preloader = function () {
    if ($("body").hasClass("preload-wrapper")) {
      setTimeout(function () {
        $(".preload").fadeOut("slow", function () {
          $(this).remove();
        });
      }, 100);
    }
    
  };

  /* Scroll process
  -------------------------------------------------------------------------------------*/
  var scrollProgress = function () {
    $(".scroll-snap").on("scroll", function () {
      var val = $(this).scrollLeft();
      $(".value-process").css("width", `max(30%,${val}%)`);
    });
  };

  /* Button Quantity
  -------------------------------------------------------------------------------------*/
  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      }
      $input.val(value);
    });

    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > -1) {
        value = value + 1;
      }
      $input.val(value);
    });
  };

  /* Delete file 
  -------------------------------------------------------------------------------------*/
  var delete_file = function (e) {
    $(".remove").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.closest(".file-delete").remove();
    });
    $(".clear-file-delete").on("click", function (e) {
      e.preventDefault();
      $(this).closest(".list-file-delete").find(".file-delete").remove();
    });
  };

  /* Go Top
  -------------------------------------------------------------------------------------*/
  var goTop = function () {
    if ($("div").hasClass("progress-wrap")) {
      var progressPath = document.querySelector(".progress-wrap path");
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
      var updateprogress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateprogress();
      $(window).scroll(updateprogress);
      var offset = 200;
      var duration = 0;
      jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
          jQuery(".progress-wrap").addClass("active-progress");
        } else {
          jQuery(".progress-wrap").removeClass("active-progress");
        }
      });
      jQuery(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });
    }
  };

  /* variant picker
  -------------------------------------------------------------------------*/
  var variantPicker = function () {
    if ($(".variant-picker-item").length) {
      $(".variant-picker-item label").on("click", function (e) {
        $(this)
          .closest(".variant-picker-item")
          .find(".variant-picker-label-value")
          .text($(this).data("value"));
      });
    }
    if ($(".variant-picker-item").length) {
      $(".select-size").on("click", function (e) {
        $(this)
          .closest(".variant-picker-item")
          .find(".variant-picker-label-value")
          .text($(this).data("value"));
      });
    }
  };

  /* color swatch product
  -------------------------------------------------------------------------*/
  var swatchColor = function () {
    if ($(".card-product").length > 0) {
      $(".color-swatch").on("click, mouseover", function () {
        var swatchColor = $(this).find("img").attr("src");
        var imgProduct = $(this).closest(".card-product").find(".img-product");
        imgProduct.attr("src", swatchColor);
        $(this)
          .closest(".card-product")
          .find(".color-swatch.active")
          .removeClass("active");

        $(this).addClass("active");
      });
    }
  };

  /* change value
  ------------------------------------------------------------------------------------- */
  var changeValue = function () {
    if ($(".tf-dropdown-sort").length > 0) {
      $(".select-item").click(function (event) {
        $(this)
          .closest(".tf-dropdown-sort")
          .find(".text-sort-value")
          .text($(this).find(".text-value-item").text());

        $(this)
          .closest(".dropdown-menu")
          .find(".select-item.active")
          .removeClass("active");

        $(this).addClass("active");

        var color = $(this).data('value-color')
        $(this)
          .closest(".tf-dropdown-sort")
          .find(".btn-select")
          .find(".current-color")
          .css('background' , color)
      });
    }
  };



  /* footer accordion
  -------------------------------------------------------------------------*/
  var footer = function () {
    var args = { duration: 250 };
    $(".footer-heading-moblie").on("click", function () {
      $(this).parent(".footer-col-block").toggleClass("open");
      if (!$(this).parent(".footer-col-block").is(".open")) {
        $(this).next().slideUp(args);
      } else {
        $(this).next().slideDown(args);
      }
    });
  };

  /* close announcement bar
  -------------------------------------------------------------------------*/
  var closeAnnouncement = function () {
    $(".close-announcement-bar").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $height = $(".announcement-bar").height() + "px";
      $this.closest(".announcement-bar").css("margin-top", `-${$height}`);

      $(".announcement-bar").fadeOut("slow", function () {
        $this.closest(".announcement-bar").remove();
      });
    });
  };

  /* range
  -------------------------------------------------------------------------*/
  var rangePrice = function(){
    // const rangeInput = document.querySelectorAll('.range-input input')
    // const progress = document.querySelector('.progress-price')
    // const minPrice = document.querySelector('.min-price')
    // const maxPrice = document.querySelector('.max-price')

    // let priceGap = 10

    // rangeInput.forEach(input => {
    //     input.addEventListener('input', e => {
    //         let minValue = parseInt(rangeInput[0].value, 10)
    //         let maxValue = parseInt(rangeInput[1].value, 10)

    //         if (maxValue - minValue < priceGap) {
    //             if (e.target.class === 'range-min') {
    //                 rangeInput[0].value = maxValue - priceGap
    //             } else {
    //                 rangeInput[1].value = minValue + priceGap
    //             }
    //         } else {
    //             progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
    //             progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
    //         }

    //         minPrice.innerHTML = minValue
    //         maxPrice.innerHTML = maxValue

    //         if (minValue >= 290) {
    //             minPrice.innerHTML = 290
    //         }

    //         if (maxValue <= 10) {
    //             maxPrice.innerHTML = 10
    //         }
    //     })
    // })

    $(".widget-size").each(function () {

      var $rangeInput = $(this).find('.range-input input');
      var $progress = $(this).find('.progress-size');
      var $maxPrice = $(this).find('.max-size');
  
      $rangeInput.on('input', function() {
          var maxValue = parseInt($rangeInput.val(), 10);
  
          var percentMax = (maxValue / $rangeInput.attr('max')) * 100;
          $progress.css('width', percentMax + "%");
  
          $maxPrice.html(maxValue);
      });

    })

  }



  /* sidebar mobile
  -------------------------------------------------------------------------*/
  var sidebar_mb = function () {
    if ($(".wrap-sidebar-account").length > 0) {
      var sidebar = $(".wrap-sidebar-account").html();
      $(".sidebar-mobile-append").append(sidebar);
      // $(".wrap-sidebar-account").remove();
    }
  };

  /* tabs
  -------------------------------------------------------------------------*/
  var tabs = function () {
    $(".widget-tabs").each(function () {
      $(this)
        .find(".widget-menu-tab")
        .children(".item-title")
        .on("click", function () {
          var liActive = $(this).index();
          var contentActive = $(this)
            .siblings()
            .removeClass("active")
            .parents(".widget-tabs")
            .find(".widget-content-tab")
            .children()
            .eq(liActive);
          contentActive.addClass("active").fadeIn("slow");
          contentActive.siblings().removeClass("active");
          $(this)
            .addClass("active")
            .parents(".widget-tabs")
            .find(".widget-content-tab")
            .children()
            .eq(liActive);
        });
    });
  };

  /* button wishlist
  -------------------------------------------------------------------------*/
  var btn_wishlist = function () {
    if ($(".btn-icon-action").length) {
      $(".btn-icon-action").on("click", function (e) {
        $(this).toggleClass("active");
      });
    }
  };
  /* check active 
  -------------------------------------------------------------------------*/
  var checkClick = function () {
    // check size
    $(".size-box").on("click", ".size-item", function() {
      $(this).closest(".size-box").find(".size-item").removeClass("active");
      $(this).addClass("active");
    });
  };

  /* button loading
  -------------------------------------------------------------------------*/
  var btn_loading = function () {
    if ($(".tf-btn-loading").length) {
      $(".tf-btn-loading").on("click", function (e) {
        $(this).addClass("loading");
        var $this = $(this);
        setTimeout(function () {
          $this.removeClass("loading");
        }, 600);
      });
    }
  };

  /* switch layout
  -------------------------------------------------------------------------*/
  var switchLayout = function () {
    if ($(".tf-control-layout").length > 0) {
      $(".tf-view-layout-switch").on("click", function () {
        var value = $(this).data("value-grid");
        $(".grid-layout").attr("data-grid", value);
        $(this)
          .closest(".tf-control-layout")
          .find(".tf-view-layout-switch.active")
          .removeClass("active");

        $(this).addClass("active");
      });
      if (matchMedia("only screen and (max-width: 1150px)").matches) {
        $(".tf-view-layout-switch.active").removeClass("active");
        $(".sw-layout-3").addClass("active");
      }
      if (matchMedia("only screen and (max-width: 768px)").matches) {
        $(".tf-view-layout-switch.active").removeClass("active");
        $(".sw-layout-2").addClass("active");
      }
    }
  };

  /* item checkbox
  -------------------------------------------------------------------------*/
  var item_checkox = function () {
    // if ($(".item-has-checkox").length) {
    //   $(".item-has-checkox input:checkbox").on("click", function (e) {
    //     $(this).closest(".item-has-checkox").toggleClass("check");
    //   });
    // }
  };

  /* infinite scroll
  -------------------------------------------------------------------------*/
  var infiniteScroll = function () {
    $(".fl-item").slice(0, 8).show();
    $(".fl-item2").slice(0, 8).show();
    $(".fl-item3").slice(0, 8).show();

    if ($(".scroll-loadmore").length > 0) {
      $(window).scroll(function () {
        if (
          $(window).scrollTop() >=
          $(document).height() - $(window).height()
        ) {
          setTimeout(() => {
            $(".fl-item:hidden").slice(0, 4).show();
            if ($(".fl-item:hidden").length == 0) {
              $(".view-more-button").hide();
            }
          }, 0);
        }
      });
    }
    if ($(".loadmore-item").length > 0) {
      $(".btn-loadmore").on("click", function () {
        setTimeout(() => {
          $(".fl-item:hidden").slice(0, 4).show();
          if ($(".fl-item:hidden").length == 0) {
            $(".view-more-button").hide();
          }
        }, 600);
      });
    }
    if ($(".loadmore-item2").length > 0) {
      $(".btn-loadmore2").on("click", function () {
        setTimeout(() => {
          $(".fl-item2:hidden").slice(0, 4).show();
          if ($(".fl-item2:hidden").length == 0) {
            $(".view-more-button2").hide();
          }
        }, 600);
      });
    }
    if ($(".loadmore-item3").length > 0) {
      $(".btn-loadmore3").on("click", function () {
        setTimeout(() => {
          $(".fl-item3:hidden").slice(0, 4).show();
          if ($(".fl-item3:hidden").length == 0) {
            $(".view-more-button3").hide();
          }
        }, 600);
      });
    }
  };
  /* stagger wrap
  -------------------------------------------------------------------------*/
  var stagger_wrap = function () {
    if ($(".stagger-wrap").length) {
      var count = $(".stagger-item").length;
      // $(".stagger-item").addClass("stagger-finished");
      for (var i = 1, time = 0.2; i <= count; i++) {
        $(".stagger-item:nth-child(" + i + ")")
          .css("transition-delay", time * i + "s")
          .addClass("stagger-finished");
      }
    }
  };

  /* filter
  -------------------------------------------------------------------------*/
  var filterTab = function () {
    var $btnFilter = $('.tf-btns-filter').click(function() {
      if (this.id == 'all') {
        $('#parent > div').show();
      } else {
        var $el = $('.' + this.id).show();
        $('#parent > div').not($el).hide();
      }
      $btnFilter.removeClass('is--active');
      $(this).addClass('is--active');
    })
  };

  /* modal second
  -------------------------------------------------------------------------*/
  var clickModalSecond = function () {
    // $(".btn-choose-size").click(function () {
    //   $("#find_size").modal("show");
    // });
    // $(".btn-show-quickview").click(function () {
    //   $("#quick_view").modal("show");
    // });
    // $(".btn-add-to-cart").click(function () {
    //   $("#shoppingCart").modal("show");
    // });

    $(".btn-add-to-cart").click(function () {
      $(".tf-add-cart-success").addClass("active");
    });
    $(".tf-add-cart-success .tf-add-cart-close").click(function () {
      $(".tf-add-cart-success").removeClass("active");
    });
    $(".show-size-guide").click(function () {
      $("#size-guide").modal("show");
    });
    $(".show-shopping-cart").click(function () {
      $("#shoppingCart").modal("show");
    });
    $(".show-compare").click(function () {
      $("#compare").modal("show");
    });
    $(".btn-icon-action.wishlist").click(function () {
      $("#wishlist").modal("show");
    });

    // if ($(".wrap-quick-view").length>0) {
    //   $('.wrap-quick-view').css({
    //     'overflow-y': 'scroll',
    //     'direction': 'rtl'
    //   });
    // }

    $(".btn-add-note").click(function () {
      $(".add-note").addClass("open");
    });
    $(".btn-add-coupon").click(function () {
      $(".add-coupon").addClass("open");
    });
    $(".btn-estimate-shipping").click(function () {
      $(".estimate-shipping").addClass("open");
    });
    $(".tf-mini-cart-tool-close").click(
      function () {
        $(".tf-mini-cart-tool-openable").removeClass("open");
      }
    );
  };

  /* header sticky
  -------------------------------------------------------------------------*/
  var headerSticky = function () {
    let lastScrollTop = 0;
    const delta = 5;
    const navbarHeight = $("header").outerHeight();

    $("header").css({
        "transition": "top 0.3s ease-in-out"
    });

    $(window).scroll(function () {
        requestAnimationFrame(checkScroll);
    });

    function checkScroll() {
        let st = $(window).scrollTop();
        if (st > 200) {
            $("header").addClass("header-bg");
        } else {
            $("header").removeClass("header-bg");
        }
        if (Math.abs(lastScrollTop - st) > delta) {
            if (st > lastScrollTop && st > navbarHeight) {
                // scroll down
                $("header").css("top", `-${navbarHeight}px`);
            } else {
                // scroll up
                if (st + $(window).height() < $(document).height()) {
                    $("header").css("top", "0");
                }
            }
            lastScrollTop = st;
        }
    }
};

   /* img group
  -------------------------------------------------------------------------*/
  var img_group = function () {
    if ($(".filter-images-group").length) {
      var number = $(".images-group-item").length;
      if ($(".filter-images-group").length)
      var btn_first = $(".images-group-btn-first").data("images-group");
      for (let i = 1; i <= number; i++) {
        var images_group_item = $(".filter-images-group").find(".images-group-item:nth-child(" + i + ")").data("value");
        if (images_group_item===btn_first) {
          $(".filter-images-group").find(".images-group-item:nth-child(" + i + ")").addClass("active").removeClass("hidden")
        } else (
          $(".filter-images-group").find(".images-group-item:nth-child(" + i + ")").addClass("hidden").removeClass("active")
        )
      }
      $(".images-group-btn").on("click", function () {
        var images_group_btn = $(this).data("images-group");
        for (let i = 1; i <= number; i++) {
          var images_group_item = $(".filter-images-group").find(".images-group-item:nth-child(" + i + ")").data("value");
          if (images_group_item===images_group_btn) {
            $(".filter-images-group").find(".images-group-item:nth-child(" + i + ")").addClass("active").removeClass("hidden")
          } else (
            $(".filter-images-group").find(".images-group-item:nth-child(" + i + ")").addClass("hidden").removeClass("active")
          )
        }
      });
    }

  };

  /* contact form
  ------------------------------------------------------------------------------------- */
  var ajaxContactForm = function () {
    $("#contactform").each(function () {
      $(this).validate({
        submitHandler: function (form) {
          var $form = $(form),
            str = $form.serialize(),
            loading = $("<div />", { class: "loading" });

          $.ajax({
            type: "POST",
            url: $form.attr("action"),
            data: str,
            beforeSend: function () {
              $form.find(".send-wrap").append(loading);
            },
            success: function (msg) {
              var result, cls;
              if (msg == "Success") {
                result =
                  "Email Sent Successfully. Thank you, Your application is accepted - we will contact you shortly";
                cls = "msg-success";
              } else {
                result = "Error sending email.";
                cls = "msg-error";
              }
              $form.prepend(
                $("<div />", {
                  class: "flat-alert " + cls,
                  text: result,
                }).append(
                  $(
                    '<a class="close" href="#"><i class="icon icon-close2"></i></a>'
                  )
                )
              );

              $form.find(":input").not(".submit").val("");
            },
            complete: function (xhr, status, error_thrown) {
              $form.find(".loading").remove();
            },
          });
        },
      });
    }); // each contactform
  };
  
  /* subscribe mailchimp
  ------------------------------------------------------------------------------------- */
  var ajaxSubscribe = {
    obj: {
      subscribeEmail: $("#subscribe-email"),
      subscribeButton: $("#subscribe-button"),
      subscribeMsg: $("#subscribe-msg"),
      subscribeContent: $("#subscribe-content"),
      dataMailchimp: $("#subscribe-form").attr("data-mailchimp"),
      success_message:
        '<div class="notification_ok">Thank you for joining our mailing list!</div>',
      failure_message:
        '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
      noticeError: '<div class="notification_error">{msg}</div>',
      noticeInfo: '<div class="notification_error">{msg}</div>',
      basicAction: "mail/subscribe.php",
      mailChimpAction: "mail/subscribe-mailchimp.php",
    },

    eventLoad: function () {
      var objUse = ajaxSubscribe.obj;

      $(objUse.subscribeButton).on("click", function () {
        if (window.ajaxCalling) return;
        var isMailchimp = objUse.dataMailchimp === "true";

        // if (isMailchimp) {
        //   ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
        // } else {
        //   ajaxSubscribe.ajaxCall(objUse.basicAction);
        // }
        ajaxSubscribe.ajaxCall(objUse.basicAction);
      });
    },

    ajaxCall: function (action) {
      window.ajaxCalling = true;
      var objUse = ajaxSubscribe.obj;
      var messageDiv = objUse.subscribeMsg.html("").hide();
      $.ajax({
        url: action,
        type: "POST",
        dataType: "json",
        data: {
          subscribeEmail: objUse.subscribeEmail.val(),
        },
        success: function (responseData, textStatus, jqXHR) {
          if (responseData.status) {
            objUse.subscribeContent.fadeOut(500, function () {
              messageDiv.html(objUse.success_message).fadeIn(500);
            });
          } else {
            switch (responseData.msg) {
              case "email-required":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! <strong>Email is required.</strong>"
                  )
                );
                break;
              case "email-err":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! <strong>Email invalid.</strong>"
                  )
                );
                break;
              case "duplicate":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! <strong>Email is duplicate.</strong>"
                  )
                );
                break;
              case "filewrite":
                messageDiv.html(
                  objUse.noticeInfo.replace(
                    "{msg}",
                    "Error! <strong>Mail list file is open.</strong>"
                  )
                );
                break;
              case "undefined":
                messageDiv.html(
                  objUse.noticeInfo.replace(
                    "{msg}",
                    "Error! <strong>undefined error.</strong>"
                  )
                );
                break;
              case "api-error":
                objUse.subscribeContent.fadeOut(500, function () {
                  messageDiv.html(objUse.failure_message);
                });
            }
            messageDiv.fadeIn(500);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert("Connection error");
        },
        complete: function (data) {
          window.ajaxCalling = false;
        },
      });
    },
  };

  /* auto popup
  ------------------------------------------------------------------------------------- */
  var autoPopup = function () {
    if($("body").hasClass("popup-loader")){
      if ($(".auto-popup").length > 0) {
        let showPopup = sessionStorage.getItem("showPopup");
        if (!JSON.parse(showPopup)) {
          setTimeout(function () {
            $(".auto-popup").modal('show');
          }, 3000);
        }
      }
      $(".btn-hide-popup").on("click", function () {
        sessionStorage.setItem("showPopup", true);
      });
    };

  };
  /* toggle control
  ------------------------------------------------------------------------------------- */
  var clickControl = function () {
    // var args = { duration: 500 };

    $(".btn-address").click(function () {
      $(".show-form-address").toggle();
    });
    $(".btn-hide-address").click(function () {
      $(".show-form-address").hide();
    });
    $(".btn-edit-address").click(function () {
      $(this).closest(".account-address-item").find(".edit-form-address").toggle();
    });
    $(".btn-hide-edit-address").click(function () {
      $(this).closest(".account-address-item").find(".edit-form-address").hide();
    });
    $(".btn-delete-address").click(function () {
      $(this).closest(".account-address-item").remove();
    });
  };

  /* write-review
  ------------------------------------------------------------------------------------- */
  var write_review = function () {

    if ($(".write-cancel-review-wrap").length > 0) {
      $(".btn-comment-review").click(function () {
        $(this).closest(".write-cancel-review-wrap").toggleClass("write-review");
      });
    }
   
  };

  /* customInput
  ------------------------------------------------------------------------------------- */
  var customInput = function () {
    $("input[type=file]").change(function (e) {
        $(this).parents(".uploadfile").find(".filename").text(e.target.files[0].name);
      });          
  };

   /* chooseOption
  ------------------------------------------------------------------------------------- */
  var chooseOption = function () {
    $(".choose-option-item").click(function () {
      $(this).closest(".choose-option-list").find(".select-option").removeClass("select-option");
      $(this).toggleClass("select-option");
    });
  };

  /* withDiscount
  ------------------------------------------------------------------------------------- */
  var withDiscount = function () {

    $(".btn-discount-apply").click(function () {
      var number = $(this).closest(".tf-product-discount-item").find(".number-discount").text()
      $(this).closest(".tf-product-info-list")
      .find(".tf-product-info-heading")
      .find(".tf-product-info-price")
      .find(".badges-on-sale")
      .text( "-" + number);
    });

  };

  /* totalPriceVariant
  ------------------------------------------------------------------------------------- */
  var totalPriceVariant = function () {

    var basePrice = parseFloat($(".price-on-sale").data("base-price")) || parseFloat($(".price-on-sale").text().replace("$", ""));
    var quantityInput = $(".quantity-product");
    // quantityInput.on("keydown keypress input", function(event) {
    //   event.preventDefault();
    // });
    $(".color-btn, .size-btn").on("click", function () {
      var newPrice = parseFloat($(this).data("price")) || basePrice;
      quantityInput.val(1);
      $(".price-on-sale").text("$" + newPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      var totalPrice = newPrice;
      $(".total-price").text("$" + totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    });

    $(".btn-increase").on("click", function () {
      var currentQuantity = parseInt(quantityInput.val());
      quantityInput.val(currentQuantity + 1);
      updateTotalPrice();
    });

    $(".btn-decrease").on("click", function () {
      var currentQuantity = parseInt(quantityInput.val());
      if (currentQuantity > 1) {
        quantityInput.val(currentQuantity - 1);
        updateTotalPrice();
      }
    });

    function updateTotalPrice() {
      var currentPrice = parseFloat($(".price-on-sale").text().replace("$", ""));
      var quantity = parseInt(quantityInput.val());
      var totalPrice = currentPrice * quantity;
      $(".total-price").text("$" + totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }

  };

  /* scroll grid product
  ------------------------------------------------------------------------------------- */
  var scrollGridProduct = function(){

    var headerHeight = $("#header").outerHeight(); 
    var activescrollBtn = null; 
    $(".btn-scroll-target").on("click", function () {
        var scroll = $(this).data("scroll");
        var target = $(".item-scroll-target[data-scroll='" + scroll + "']"); 
        $('html, body').animate({
            scrollTop: target.offset().top - headerHeight 
        }, 100);

        $(".btn-scroll-target").removeClass("active");
        $(this).addClass("active");
        activescrollBtn = $(this); 
    });

    $(window).on("scroll", function () {
        var isActiveSet = false; 
        $(".item-scroll-target").each(function () {
            var targetTop = $(this).offset().top - headerHeight;
            if ($(window).scrollTop() >= targetTop && $(window).scrollTop() < (targetTop + $(this).outerHeight())) {
                var scroll = $(this).data("scroll");
                if (!isActiveSet && (activescrollBtn === null || activescrollBtn.data("scroll") !== scroll)) {
                    $(".btn-scroll-target").removeClass("active");
                    $(".btn-scroll-target[data-scroll='" + scroll + "']").addClass("active");
                    // $('.value-currentscroll').text(scroll);
                }
                isActiveSet = true; 
            }
        });
        if (!isActiveSet && activescrollBtn !== null) {
            $(".btn-scroll-target").removeClass("active");
            activescrollBtn.addClass("active");
        }
    });
  }

  /* hoverPin
  -------------------------------------------------------------------------*/
  var hoverPin = function () {
    if ($(".wrap-lookbook-hover").length) {
      $(".bundle-pin-item").on("mouseover", function () {
        $(".bundle-hover-wrap").addClass("has-hover");
        var $el = $('.' + this.id).show();
        $('.bundle-hover-wrap .bundle-hover-item').not($el).addClass("no-hover");
      });
      $(".bundle-pin-item").on("mouseleave", function () {
        $(".bundle-hover-wrap").removeClass("has-hover");
        $(".bundle-hover-item").removeClass("no-hover");
      });
    }
  };

  // togglePassword
  var togglePassword = function () {
    $(".form-has-password")
    .find(".toggle-password")
    .on("click", function () {
      const $passwordInput = $(this).closest(".password-item").find(".input-password");
      const type =
      $passwordInput.attr("type") === "password"
      ? "text"
      : "password";
      $passwordInput.attr("type", type);
      $(this).toggleClass("unshow");
    });
  };

  // custom dropdown mobile
  var customDropdown = function(){
    function updateDropdownClass() {
      const $dropdown = $('.dropdown-custom');
  
      if ($(window).width() <= 991) {
          $dropdown.addClass('dropup').removeClass('dropend');
      } else {
          $dropdown.addClass('dropend').removeClass('dropup');
      }
  }
  updateDropdownClass();
  $(window).resize(updateDropdownClass);
  }

  // Dom Ready
  $(function () {
    selectImages();
    btnQuantity();
    delete_file();
    goTop();
    closeAnnouncement();
    preloader();
    sidebar_mb();
    tabs();
    swatchColor();
    changeValue();
    footer();
    btn_wishlist();
    btn_loading();
    switchLayout();
    item_checkox();
    infiniteScroll();
    stagger_wrap();
    clickModalSecond();
    scrollProgress();
    headerSticky();
    img_group();
    filterTab();
    autoPopup();
    rangePrice();
    clickControl();
    checkClick();
    write_review();
    customInput();
    chooseOption();
    withDiscount();
    totalPriceVariant();
    variantPicker();
    scrollGridProduct();
    hoverPin();
    togglePassword();
    customDropdown();
    ajaxContactForm();
    ajaxSubscribe.eventLoad();
    new WOW().init();
  });
})(jQuery);
