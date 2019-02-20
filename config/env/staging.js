"use strict";

var secrets = require("../secrets");

module.exports = {
  postgres: {
    db: "cradatabase_staging",
    user: "cradatabase@510cradatabase",
    password: secrets.postgres.password_prod,
    host: "510cradatabase.postgres.database.azure.com",
  },
  log: {
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: "combined",
    // Stream defaults to process.stdout
    // Uncomment to enable logging to a log on the file system
    options: {
      stream: "access.log",
    },
  },
  usehttp: true,
  usessl: true,
  port: process.env.PORT || 3001,
  sslport: process.env.SSLPORT || 445,
  app: {
    title: "Rode Kruis Dashboards - staging",
    favicon: "/modules/core/img/510-logo_red_32x32.png",
  },
  assets: {
    lib: {
      css: [
        "public/build/bower/bootstrap/css/bootstrap.min.css", // in bower.json
        "public/build/custom/bootstrap/css/bootstrap-theme.min.css", // in bower.json
        "public/build/bower/leaflet/css/leaflet.css", // in bower.json
        "public/build/bower/cartodb.js/css/cartodb.css", // in bower.json
        "public/build/bower/angular/css/angular-csp.css", // in bower.json
        "public/build/bower/dcjs/css/dc.css", // in bower.json
        "public/build/custom/dc-leaflet/css/dc-leaflet-legend.min.css", // NOT in bower.json
        "public/build/bower/angular-loading-bar/css/loading-bar.min.css", // in bower.json
        "public/build/custom/font-awesome/css/font-awesome.min.css", // NOT in bower.json
        "public/build/custom/dc-addons/dist/leaflet-map/dc-leaflet-legend.css", // NOT in bower.json
        "public/build/custom/leaflet-search/css/leaflet-search.min.css", // in bower.json
      ],
      js: [
        "public/build/bower/jquery/js/jquery.min.js", // in bower.json
        "public/build/custom/slick/js/slick.min.js",
        "public/build/bower/crossfilter/js/crossfilter.min.js",
        "public/build/bower/lodash/js/lodash.underscore.min.js", //in bower.json
        "public/build/bower/angular/js/angular.min.js", //in bower.json
        "public/build/bower/angular-lodash/js/angular-lodash.js", //in bower.json
        "public/build/bower/angular-route/js/angular-route.min.js", //in bower.json
        "public/build/bower/angular-resource/js/angular-resource.min.js", //in bower.json
        "public/build/bower/angular-cookies/js/angular-cookies.min.js", //in bower.json
        "public/build/bower/angular-touch/js/angular-touch.min.js",
        "public/build/bower/angular-sanitize/js/angular-sanitize.min.js",
        "public/build/bower/angular-ui-router/js/angular-ui-router.min.js",
        "public/build/bower/angular-css/js/angular-css.js",
        "public/lib/angular-translate/angular-translate.min.js", //in bower.json
        "public/build/bower/bootstrap/js/bootstrap.min.js",
        "public/build/bower/angular-bootstrap/js/ui-bootstrap-tpls.js",
        "public/build/bower/leaflet/js/leaflet.js", //in bower.json
        "public/build/bower/angular-leaflet-directive/js/angular-leaflet-directive.min.js", // in bower.json
        "public/build/custom/leaflet-search/js/leaflet-search.min.js",
        "public/build/bower/leaflet-ajax/js/leaflet.ajax.js",
        "public/build/bower/angular-gettext/js/angular-gettext.js",
        "public/build/bower/d3/js/d3.min.js",
        "public/build/bower/dcjs/js/dc.min.js", //in bower.json
        "public/build/custom/dc-leaflet/js/dc-leaflet-dev.js", // NOT in bower.json
        "public/build/custom/leaflet-stamen/tile.stamen.js", // NOT in bower.json
        "public/build/custom/angular-dc/js/angular-dc.js", //in bower.json
        "public/build/bower/angular-messages/js/angular-messages.min.js", //in bower.json
        "public/build/bower/ngInfiniteScroll/js/ng-infinite-scroll.min.js", //in bower.json
        "public/build/bower/angular-elastic/js/elastic.js", //in bower.json
        "public/build/bower/underscore/js/underscore.js", //in bower.json
        "public/build/bower/angular-loading-bar/js/loading-bar.min.js",
        "public/build/bower/leaflet-gps/js/leaflet-gps.min.js", // in bower.json
        "public/build/bower/cartodb.js/js/cartodb_noleaflet.js", // in bower,json
        "public/build/bower/jquery-countTo/js/jquery.countTo.js", // in bower.json
        "public/build/bower/jquery-scrollTo/js/jquery-scrollTo.js", // in bower.json
        "public/build/bower/jquery-easing/js/jquery.easing.min.js", // in bower.json
        "public/lib/jquery-csv/src/jquery.csv.min.js", // in bower.json
        "public/build/bower/wow/js/wow.js", // in bower.json
        "public/build/custom/dc-addons/dist/leaflet-map/dc-leaflet.js", // in bower.json
        "public/build/bower/topojson/js/topojson.js", // in bower.json
        "public/build/custom/leaflet-geotiff-custom/geotiff.js",
        "public/build/custom/leaflet-geotiff-custom/leaflet.canvaslayer.field.js",
        "//cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.0/chroma.min.js",
      ],
    },
    css: "public/dist/application.min.css",
    js: "public/dist/application.min.js",
  },
  facebook: {
    clientID: process.env.FACEBOOK_ID || "APP_ID",
    clientSecret: process.env.FACEBOOK_SECRET || "APP_SECRET",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
  },
  twitter: {
    clientID: process.env.TWITTER_KEY || "CONSUMER_KEY",
    clientSecret: process.env.TWITTER_SECRET || "CONSUMER_SECRET",
    callbackURL: "http://localhost:3000/auth/twitter/callback",
  },
  google: {
    clientID: process.env.GOOGLE_ID || "APP_ID",
    clientSecret: process.env.GOOGLE_SECRET || "APP_SECRET",
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  linkedin: {
    clientID: process.env.LINKEDIN_ID || "APP_ID",
    clientSecret: process.env.LINKEDIN_SECRET || "APP_SECRET",
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
  },
  azure: {
    clientID: secrets.azure.clientID,
    clientSecret: secrets.azure.clientSecret,
    tenantId: secrets.azure.tenantId,
    resource: "https://graph.windows.net",
    redirectURL: "http://localhost:3000/auth/azure/callback",
    redirectURLSSL: "http://localhost:3000/auth/azure/callback",
  },
  onedrive: {
    oneDriveBusinessBaseUrl: "https://rodekruis-my.sharepoint.com/_api/v2.0",
  },
  sharepoint: {
    sharePointSiteBaseUrl:
      "https://rodekruis.sharepoint.com/clusterhulpverlening/hulpvoorvluchtelingen/_api/v2.0",
  },
  mailer: {
    from: process.env.MAILER_FROM || "MAILER_FROM",
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || "MAILER_SERVICE_PROVIDER",
      auth: {
        user: process.env.MAILER_EMAIL_ID || "MAILER_EMAIL_ID",
        pass: process.env.MAILER_PASSWORD || "MAILER_PASSWORD",
      },
    },
  },
};
