"use strict";

// Configure the buttons that tell you which district (etc) you're in (top-left)
angular.module("dashboards").factory("districtButtonsService", [
  "helpers",
  function(helpers) {
    //This is a long piece of code that sets the name-buttons for the different admin-layers (id=level1, level2, level3) >> CAN BE IMPROVED
    var setDistrictButtons = function(
      admlevel,
      zoom_min,
      zoom_max,
      parent_code,
      parent_codes,
      d,
      country_code,
      directURLload,
      name_selection,
      levelB_selection,
      levelB_selection_pre,
      levelB_codes,
      levelB_code,
      levelC_selection,
      levelC_selection_pre,
      levelC_codes,
      levelC_code
    ) {
      var levelA_selection_pre = "all_yes";
      var levelA_selection = helpers.lookUpByCountryCode(
        d.Country_meta,
        "level" + zoom_min + "_name"
      )[country_code];
      levelB_selection_pre = "all_no";

      //Reset disabled
      $("#level2").removeAttr("title");
      $("#level2").prop("disabled", false);
      $("#level3").removeAttr("title");
      $("#level3").prop("disabled", false);
      //Apply different classes for this case
      $("#level2").addClass("btn-zoomin");
      $("#level3").addClass("btn-zoomin");
      $("#level4").addClass("btn-zoomin");

      if (admlevel == zoom_min) {
        levelB_selection_pre = "all_yes";
        levelB_selection = helpers.lookUpByCountryCode(
          d.Country_meta,
          "level" + (zoom_min + 1) + "_name"
        )[country_code];
        levelB_code = "";
        levelB_codes = [];
      } else if (admlevel < zoom_max && parent_codes.length > 0) {
        levelB_selection = name_selection;
        levelB_codes = parent_codes;
      } else if (admlevel < zoom_max && parent_codes.length == 0) {
        //This is the direct URL-link case
        levelB_selection_pre = "all_yes";
        levelB_selection = helpers.lookUpByCountryCode(
          d.Country_meta,
          "level" + (zoom_min + 1) + "_name"
        )[country_code];
        levelB_code = "";
        levelB_codes = [];
      } else if (admlevel == zoom_max && parent_codes.length == 0) {
        //This is the direct URL-link case
        levelB_selection_pre = "all_yes";
        levelB_selection = helpers.lookUpByCountryCode(
          d.Country_meta,
          "level" + (zoom_min + 1) + "_name"
        )[country_code];
        levelB_code = "";
        levelB_codes = [];
      }
      if (admlevel < zoom_max) {
        levelC_selection_pre = parent_codes.length == 0 ? "all_yes" : undefined;
        levelC_selection =
          parent_codes.length == 0
            ? helpers.lookUpByCountryCode(
                d.Country_meta,
                "level" + (zoom_min + 2) + "_name"
              )[country_code]
            : undefined;
        levelC_code = "";
      } else if (admlevel == zoom_max && parent_codes.length == 0) {
        //This is the direct URL-link case
        levelC_selection_pre = parent_codes.length == 0 ? "all_yes" : undefined;
        levelC_selection =
          parent_codes.length == 0
            ? helpers.lookUpByCountryCode(
                d.Country_meta,
                "level" + (zoom_min + 2) + "_name"
              )[country_code]
            : undefined;
        levelC_code = "";
      } else if (parent_codes.length > 0) {
        levelC_selection = name_selection;
        levelC_code = parent_code;
      }

      var disabledMsg =
        "This function is disabled. Use the zoom-in by area functionality instead. Click on one (or more) areas in the map, and click the zoom-in icon in the popup to zoom in.";
      if (country_code === "MWI" || country_code === "MOZ") {
        $("#level2").prop("disabled", false);
        $("#level2").removeAttr("title");
        $("#level3").prop("disabled", true);
        $("#level3").prop("title", disabledMsg);
        if (admlevel == zoom_max) {
          $("#level3").removeAttr("title");
          $("#level3").prop("disabled", false);
        }
      } else if (zoom_min > 1) {
        $("#level2").prop("disabled", true);
        $("#level2").prop("title", disabledMsg);
        $("#level3").prop("disabled", true);
        $("#level3").prop("title", disabledMsg);
        if (admlevel >= zoom_min + 1) {
          $("#level2").removeAttr("title");
          $("#level2").prop("disabled", false);
        }
        if (admlevel == zoom_max) {
          $("#level3").removeAttr("title");
          $("#level3").prop("disabled", false);
        }
      }
      //Function that colors/fills the level2/level3 buttons (top-left) when coming in at higher level through direct URL
      if (directURLload) {
        if (admlevel == zoom_min + 2) {
          document
            .getElementById("level3")
            .setAttribute("class", "btn btn-secondary btn-active");
          if (parent_codes.length == 1) {
            var level3name = helpers.lookUpByCountryCode(
              d.Country_meta,
              "level" + (zoom_min + 1) + "_name"
            )[country_code];
            levelC_selection = "Selected " + level3name;
          } else if (parent_codes.length > 1) {
            levelC_selection = "Multiple " + level3name;
          }
          levelC_codes = parent_codes;
        }
        if (admlevel >= zoom_min + 1) {
          document
            .getElementById("level2")
            .setAttribute("class", "btn btn-secondary btn-active");
          if (parent_codes.length == 1) {
            var level2name = helpers.lookUpByCountryCode(
              d.Country_meta,
              "level" + zoom_min + "_name"
            )[country_code];
            levelB_selection = "Selected " + level2name;
          } else if (parent_codes.length > 1) {
            levelB_selection = "Multiple " + level2name;
          }
          levelB_codes = parent_codes;
        }
      }
      return {
        levelC_codes: levelC_codes,
        levelC_code: levelC_code,
        levelC_selection: levelC_selection,
        levelC_selection_pre: levelC_selection_pre,
        levelB_codes: levelB_codes,
        levelB_code: levelB_code,
        levelB_selection: levelB_selection,
        levelB_selection_pre: levelB_selection_pre,
        levelA_selection: levelA_selection,
        levelA_selection_pre: levelA_selection_pre,
      };
    };

    return {
      setDistrictButtons: setDistrictButtons,
    };
  },
]);
