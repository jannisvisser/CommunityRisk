"use strict";

var secrets = require("../secrets");

module.exports = {
  app: {
    title: "Rode Kruis Dashboards",
  },
  usehttp: true,
  usessl: true,
  port: process.env.PORT || 3000,
  sslport: process.env.SSLPORT || 444,
  key_file: "./config/cert/localhost-key.pem",
  cert_file: "./config/cert/localhost-cert.pem",
  ca_file: "./config/cert/thawte.ca",
  ca2_file: "./config/cert/thawte2.ca",
  postgres: {
    db: "cradatabase",
    user: "cradatabase@510cradatabase",
    password: secrets.postgres.password_prod,
    host: "510cradatabase.postgres.database.azure.com",
    port: 5432,
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
  assets: {
    lib: {
      css: [
        "public/build/bower/bootstrap/css/bootstrap.min.css", // in bower.json
        "public/build/custom/bootstrap/css/bootstrap-theme.css", // in bower.json
        "public/build/bower/leaflet/css/leaflet.css", // in bower.json
        "public/build/bower/angular/css/angular-csp.css", // in bower.json
        "public/build/bower/dcjs/css/dc.css", // in bower.json
        "public/build/bower/angular-loading-bar/css/loading-bar.min.css", // in bower.json
        "public/build/custom/font-awesome/css/font-awesome.min.css", // NOT in bower.json
        "public/build/custom/dc-addons/dist/leaflet-map/dc-leaflet-legend.css", // NOT in bower.json
        "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css",
        "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css",
      ],
      js: [
        "public/build/bower/jquery/js/jquery.min.js", // in bower.json
        "public/build/custom/slick/js/slick.min.js",
        "public/build/bower/crossfilter/js/crossfilter.min.js",
        "public/build/bower/angular/js/angular.min.js", //in bower.json
        "public/build/bower/angular-route/js/angular-route.min.js", //in bower.json
        "public/build/bower/angular-resource/js/angular-resource.min.js", //in bower.json
        "public/build/bower/angular-sanitize/js/angular-sanitize.min.js",
        "public/build/bower/angular-ui-router/js/angular-ui-router.min.js",
        "public/lib/angular-translate/angular-translate.min.js", //in bower.json
        "public/build/bower/bootstrap/js/bootstrap.min.js",
        "public/build/bower/leaflet/js/leaflet.js", //in bower.json
        "public/build/bower/angular-gettext/js/angular-gettext.js",
        "public/build/bower/d3/js/d3.min.js",
        "public/build/bower/dcjs/js/dc.min.js", //in bower.json
        "public/build/custom/dc-leaflet/js/dc-leaflet-dev.js", // NOT in bower.json
        "public/build/bower/angular-loading-bar/js/loading-bar.min.js",
        "public/build/bower/jquery-countTo/js/jquery.countTo.js", // in bower.json
        "public/build/bower/jquery-scrollTo/js/jquery-scrollTo.js", // in bower.json
        "public/build/custom/dc-addons/dist/leaflet-map/dc-leaflet.js", // in bower.json
        "https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js",
        "public/build/bower/topojson/js/topojson.js", // in bower.json
      ],
    },
    css: "public/dist/application.min.css",
    js: "public/dist/application.min.js",
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
