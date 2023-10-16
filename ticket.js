jQuery(document).ready(function () {
        // Ticket Price Changed Script
        var elementEarlyBird = jQuery("#early-bird-person"),
          element1Day = jQuery("#1-day-pricing-person"),
          element2Day = jQuery("#2-day-pricing-person"),
          elementFull = jQuery("#full-pricing-person");

        elementEarlyBird.on("change", function () {
          pricingEarlyBird = jQuery(this).prop("value");
          jQuery(".early-bird-pricing").html("$" + pricingEarlyBird * 39);
        });

        element1Day.on("change", function () {
          pricing1day = jQuery(this).prop("value");
          jQuery(".1-day-pricing").html("$" + pricing1day * 29);
        });

        element2Day.on("change", function () {
          pricing2Day = jQuery(this).prop("value");
          jQuery(".2-day-pricing").html("$" + pricing2Day * 49);
        });

        elementFull.on("change", function () {
          pricingFull = jQuery(this).prop("value");
          jQuery(".full-pricing").html("$" + pricingFull * 69);
        });
      });