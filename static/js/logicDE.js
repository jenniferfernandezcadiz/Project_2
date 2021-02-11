// Function to determine marker size based on flights
function markerSize(flights) {
    return flights;
  }
  
  // An array containing all of the information needed to create city and state markers
  var locations = [
    {
      coordinates: [16.75709915, -99.7539978],
      year_2019: {
        name: "ACA",
        flights: 0.0
      },
      year_2020: {
        name: "ACA",
        flights: 3
      }
    },
    {
      coordinates: [21.705601, -102.318001],
      year_2019: {
        name: "AGU",
        flights: 182
      },
      year_2020: {
        name: "AGU",
        flights: 106
      }
    },
    {
      coordinates: [17.1367, -61.792702],
      year_2019: {
        name: "ANU",
        flights: 196
      },
      year_2020: {
        name: "ANU",
        flights: 88
      }
    },
    {
      coordinates: [12.50139999, -70.01519775],
      year_2019: {
        name: "AUA",
        flights: 487
      },
      year_2020: {
        name: "AUA",
        flights: 92
      }
    },
    {
      coordinates: [10.8896, -74.7808],
      year_2019: {
        name: "BAQ",
        flights: 90
      },
      year_2020: {
        name: "BAQ",
        flights: 0.0
      }
    },
    {
      coordinates: [32.36417, -64.67861],
      year_2019: {
        name: "BDA",
        flights: 374
      },
      year_2020: {
        name: "BDA",
        flights: 0.0
      }
    },
    {
      coordinates: [13.07460022, -59.49250031],
      year_2019: {
        name: "BGI",
        flights: 332
      },
      year_2020: {
        name: "BGI",
        flights: 0.0
      }
    },
    {
      coordinates: [20.99349976, -101.4810028],
      year_2019: {
        name: "BJX",
        flights: 256
      },
      year_2020: {
        name: "BJX",
        flights: 148
      }
    },
    {
      coordinates: [4.70159, -74.1469],
      year_2019: {
        name: "BOG",
        flights: 363
      },
      year_2020: {
        name: "BOG",
        flights: 0.0
      }
    },
    {
      coordinates: [12.13099957, -68.26850128],
      year_2019: {
        name: "BON",
        flights: 53
      },
      year_2020: {
        name: "BON",
        flights: 0.0
      }
    },
    {
      coordinates: [-15.86916733, -47.92083359],
      year_2019: {
        name: "BSB",
        flights: 68
      },
      year_2020: {
        name: "BSB",
        flights: 0.0
      }
    },
    {
      coordinates: [17.53910065, -88.30819702],
      year_2019: {
        name: "BZE",
        flights: 303
      },
      year_2020: {
        name: "BZE",
        flights: 0.0
      }
    },
    {
      coordinates: [19.7329998, -72.19470215],
      year_2019: {
        name: "CAP",
        flights: 90
      },
      year_2020: {
        name: "CAP",
        flights: 0.0
      }
    },
    {
      coordinates: [3.54322, -76.3816],
      year_2019: {
        name: "CLO",
        flights: 92
      },
      year_2020: {
        name: "CLO",
        flights: 0.0
      }
    },
    {
      coordinates: [21.42029953, -77.84750366],
      year_2019: {
        name: "CMW",
        flights: 91
      },
      year_2020: {
        name: "CMW",
        flights: 0.0
      }
    },
    {
      coordinates: [-31.32360077, -64.20800018],
      year_2019: {
        name: "COR",
        flights: 48
      },
      year_2020: {
        name: "COR",
        flights: 0.0
      }
    },
    {
      coordinates: [10.4424, -75.513],
      year_2019: {
        name: "CTG",
        flights: 92
      },
      year_2020: {
        name: "CTG",
        flights: 0
      }
    },
    {
      coordinates: [21.03650093, -86.87709808],
      year_2019: {
        name: "CUN",
        flights: 1701
      },
      year_2020: {
        name: "CUN",
        flights: 824
      }
    },
    {
      coordinates: [12.1889, -68.959801],
      year_2019: {
        name: "CUR",
        flights: 198
      },
      year_2020: {
        name: "CUR",
        flights: 0.0
      }
    },
    {
      coordinates: [28.70289993, -105.9649963],
      year_2019: {
        name: "CUU",
        flights: 271
      },
      year_2020: {
        name: "CUU",
        flights: 98
      }
    },
    {
      coordinates: [20.5223999, -86.92559814],
      year_2019: {
        name: "CZM",
        flights: 102
      },
      year_2020: {
        name: "CZM",
        flights: 92
      }
    },
    {
      coordinates: [24.12420082, -104.5279999],
      year_2019: {
        name: "DGO",
        flights: 84
      },
      year_2020: {
        name: "DGO",
        flights: 84
      }
    },
    {
      coordinates: [25.47489929, -76.6835022],
      year_2019: {
        name: "ELH",
        flights: 94
      },
      year_2020: {
        name: "ELH",
        flights: 16
      }
    },
    {
      coordinates: [-34.8222, -58.5358],
      year_2019: {
        name: "EZE",
        flights: 393
      },
      year_2020: {
        name: "EZE",
        flights: 0.0
      }
    },
    {
      coordinates: [14.5909996, -61.00320053],
      year_2019: {
        name: "FDF",
        flights: 86
      },
      year_2020: {
        name: "FDF",
        flights: 0.0
      }
    },
    {
      coordinates: [26.55870056, -78.69560242],
      year_2019: {
        name: "FPO",
        flights: 191
      },
      year_2020: {
        name: "FPO",
        flights: 0.0
      }
    },
    {
      coordinates: [19.2928009, -81.35769653],
      year_2019: {
        name: "GCM",
        flights: 435
      },
      year_2020: {
        name: "GCM",
        flights: 0.0
      }
    },
    {
      coordinates: [20.52179909, -103.310997],
      year_2019: {
        name: "GDL",
        flights: 364
      },
      year_2020: {
        name: "GDL",
        flights: 194
      }
    },
    {
      coordinates: [6.49854994, -58.2541008],
      year_2019: {
        name: "GEO",
        flights: 92
      },
      year_2020: {
        name: "GEO",
        flights: 0.0
      }
    },
    {
      coordinates: [23.56259918, -75.87799835],
      year_2019: {
        name: "GGT",
        flights: 176
      },
      year_2020: {
        name: "GGT",
        flights: 16
      }
    },
    {
      coordinates: [-22.80999947, -43.25055695],
      year_2019: {
        name: "GIG",
        flights: 92
      },
      year_2020: {
        name: "GIG",
        flights: 0.0
      }
    },
    {
      coordinates: [12.00419998, -61.78620148],
      year_2019: {
        name: "GND",
        flights: 90
      },
      year_2020: {
        name: "GND",
        flights: 0.0
      }
    },
    {
      coordinates: [-23.43555641, -46.47305679],
      year_2019: {
        name: "GRU",
        flights: 421
      },
      year_2020: {
        name: "GRU",
        flights: 18
      }
    },
    {
      coordinates: [14.58329964, -90.52749634],
      year_2019: {
        name: "GUA",
        flights: 397
      },
      year_2020: {
        name: "GUA",
        flights: 0.0
      }
    },
    {
      coordinates: [-2.15741992, -79.88359833],
      year_2019: {
        name: "GYE",
        flights: 180
      },
      year_2020: {
        name: "GYE",
        flights: 71
      }
    },
    {
      coordinates: [22.98920059, -82.40910339],
      year_2019: {
        name: "HAV",
        flights: 515
      },
      year_2020: {
        name: "HAV",
        flights: 0.0
      }
    },
    {
      coordinates: [29.09589958, -111.0479965],
      year_2019: {
        name: "HMO",
        flights: 91
      },
      year_2020: {
        name: "HMO",
        flights: 58
      }
    },
    {
      coordinates: [20.78560066, -76.31510162],
      year_2019: {
        name: "HOG",
        flights: 92
      },
      year_2020: {
        name: "HOG",
        flights: 0.0
      }
    },
    {
      coordinates: [15.77530003, -96.26260376],
      year_2019: {
        name: "HUX",
        flights: 0.0
      },
      year_2020: {
        name: "HUX",
        flights: 8
      }
    },
    {
      coordinates: [17.93569946, -76.78749847],
      year_2019: {
        name: "KIN",
        flights: 266
      },
      year_2020: {
        name: "KIN",
        flights: 78
      }
    },
    {
      coordinates: [-12.0219, -77.114304],
      year_2019: {
        name: "LIM",
        flights: 274
      },
      year_2020: {
        name: "LIM",
        flights: 0.0
      }
    },
    {
      coordinates: [10.59329987, -85.54440308],
      year_2019: {
        name: "LIR",
        flights: 194
      },
      year_2020: {
        name: "LIR",
        flights: 0.0
      }
    },
    {
      coordinates: [-3.038609982, -60.04970169],
      year_2019: {
        name: "MAO",
        flights: 88
      },
      year_2020: {
        name: "MAO",
        flights: 0.0
      }
    },
    {
      coordinates: [18.50370026, -77.91339874],
      year_2019: {
        name: "MBJ",
        flights: 839
      },
      year_2020: {
        name: "MBJ",
        flights: 264
      }
    },
    {
      coordinates: [6.16454, -75.4231],
      year_2019: {
        name: "MDE",
        flights: 183
      },
      year_2020: {
        name: "MDE",
        flights: 0.0
      }
    },
    {
      coordinates: [19.4363, -99.072098],
      year_2019: {
        name: "MEX",
        flights: 1056
      },
      year_2020: {
        name: "MEX",
        flights: 500
      }
    },
    {
      coordinates: [12.14150047, -86.16819763],
      year_2019: {
        name: "MGA",
        flights: 159
      },
      year_2020: {
        name: "MGA",
        flights: 0.0
      }
    },
    {
      coordinates: [26.51140022, -77.08350372],
      year_2019: {
        name: "MHH",
        flights: 106
      },
      year_2020: {
        name: "MHH",
        flights: 0.0
      }
    },
    {
      coordinates: [20.93700027, -89.65769959],
      year_2019: {
        name: "MID",
        flights: 90
      },
      year_2020: {
        name: "MID",
        flights: 56
      }
    },
    {
      coordinates: [19.84989929, -101.0250015],
      year_2019: {
        name: "MLM",
        flights: 91
      },
      year_2020: {
        name: "MLM",
        flights: 92
      }
    },
    {
      coordinates: [25.7784996, - 100.1070023],
      year_2019: {
        name: "MTY",
        flights: 539
      },
      year_2020: {
        name: "MTY",
        flights: 153
      }
    },
    {
      coordinates: [-34.83840179, -56.03079987],
      year_2019: {
        name: "MVD",
        flights: 91
      },
      year_2020: {
        name: "MVD",
        flights: 0.0
      }
    },
    {
      coordinates: [23.16139984, -106.265998799999],
      year_2019: {
        name: "MZT",
        flights: 118
      },
      year_2020: {
        name: "MZT",
        flights: 83
      }
    },
    {
      coordinates: [25.03899956, -77.46620178],
      year_2019: {
        name: "NAS",
        flights: 1246
      },
      year_2020: {
        name: "NAS",
        flights: 47
      }
    },
    {
      coordinates: [16.9999008, -96.72660065],
      year_2019: {
        name: "OAX",
        flights: 92
      },
      year_2020: {
        name: "OAX",
        flights: 14
      }
    },
    {
      coordinates: [18.5799999, -72.29250336],
      year_2019: {
        name: "PAP",
        flights: 163
      },
      year_2020: {
        name: "PAP",
        flights: 56
      }
    },
    {
      coordinates: [4.81267, -75.7395],
      year_2019: {
        name: "PEI",
        flights: 37
      },
      year_2020: {
        name: "PEI",
        flights: 0.0
      }
    },
    {
      coordinates: [21.77359962, -72.26589966],
      year_2019: {
        name: "PLS",
        flights: 482
      },
      year_2020: {
        name: "PLS",
        flights: 82
      }
    },
    {
      coordinates: [19.7579002, -70.56999969],
      year_2019: {
        name: "POP",
        flights: 186
      },
      year_2020: {
        name: "POP",
        flights: 56
      }
    },
    {
      coordinates: [10.59539986, -61.33720016],
      year_2019: {
        name: "POS",
        flights: 184
      },
      year_2020: {
        name: "POS",
        flights: 0.0
      }
    },
    {
      coordinates: [16.2653008, -61.53179932],
      year_2019: {
        name: "PTP",
        flights: 12
      },
      year_2020: {
        name: "PTP",
        flights: 0.0
      }
    },
    {
      coordinates: [9.071359634, -79.38349915],
      year_2019: {
        name: "PTY",
        flights: 184
      },
      year_2020: {
        name: "PTY",
        flights: 0.0
      }
    },
    {
      coordinates: [18.5674, -68.36340332],
      year_2019: {
        name: "PUJ",
        flights: 804
      },
      year_2020: {
        name: "PUJ",
        flights: 95
      }
    },
    {
      coordinates: [20.6800995, -105.2539978],
      year_2019: {
        name: "PVR",
        flights: 509
      },
      year_2020: {
        name: "PVR",
        flights: 230
      }
    },
    {
      coordinates: [20.6173, -100.185997],
      year_2019: {
        name: "QRO",
        flights: 267
      },
      year_2020: {
        name: "QRO",
        flights: 84
      }
    },
    {
      coordinates: [16.316799, -86.523003],
      year_2019: {
        name: "RTB",
        flights: 39
      },
      year_2020: {
        name: "RTB",
        flights: 2
      }
    },
    {
      coordinates: [13.4409, -89.055702],
      year_2019: {
        name: "SAL",
        flights: 242
      },
      year_2020: {
        name: "SAL",
        flights: 0.0
      }
    },
    {
      coordinates: [15.45259953, -87.92359924],
      year_2019: {
        name: "SAP",
        flights: 230
      },
      year_2020: {
        name: "SAP",
        flights: 8
      }
    },
    {
      coordinates: [-33.3930016, -70.78579712],
      year_2019: {
        name: "SCL",
        flights: 184
      },
      year_2020: {
        name: "SCL",
        flights: 16
      }
    },
    {
      coordinates: [19.9698001, -75.83540344],
      year_2019: {
        name: "SCU",
        flights: 92
      },
      year_2020: {
        name: "SCU",
        flights: 0.0
      }
    },
    {
      coordinates: [18.4297009, -69.66889954],
      year_2019: {
        name: "SDQ",
        flights: 438
      },
      year_2020: {
        name: "SDQ",
        flights: 168
      }
    },
    {
      coordinates: [23.1518002, -109.7210007],
      year_2019: {
        name: "SJD",
        flights: 750
      },
      year_2020: {
        name: "SJD",
        flights: 476
      }
    },
    {
      coordinates: [9.99386025, -84.20880127],
      year_2019: {
        name: "SJO",
        flights: 453
      },
      year_2020: {
        name: "SJO",
        flights: 2
      }
    },
    {
      coordinates: [17.31119919, -62.71870041],
      year_2019: {
        name: "SKB",
        flights: 176
      },
      year_2020: {
        name: "SKB",
        flights: 0.0
      }
    },
    {
      coordinates: [22.25429916, -100.9309998],
      year_2019: {
        name: "SLP",
        flights: 265
      },
      year_2020: {
        name: "SLP",
        flights: 106
      }
    },
    {
      coordinates: [22.49220085, -79.94360352],
      year_2019: {
        name: "SNU",
        flights: 179
      },
      year_2020: {
        name: "SNU",
        flights: 0.0
      }
    },
    {
      coordinates: [19.40609932, -70.60469818],
      year_2019: {
        name: "STI",
        flights: 167
      },
      year_2020: {
        name: "STI",
        flights: 56
      }
    },
    {
      coordinates: [13.163913016679832, -61.15105791813816],
      year_2019: {
        name: "SVD",
        flights: 14
      },
      year_2020: {
        name: "SVD",
        flights: 8
      }
    },
    {
      coordinates: [18.04100037, -63.10889816],
      year_2019: {
        name: "SXM",
        flights: 329
      },
      year_2020: {
        name: "SXM",
        flights: 46
      }
    },
    {
      coordinates: [14.06089973, -87.21720123],
      year_2019: {
        name: "TGU",
        flights: 205
      },
      year_2020: {
        name: "TGU",
        flights: 6
      }
    },
    {
      coordinates: [25.56830025, -103.4110031],
      year_2019: {
        name: "TRC",
        flights: 180
      },
      year_2020: {
        name: "TRC",
        flights: 59
      }
    },
    {
      coordinates: [-0.12916667, -78.3575],
      year_2019: {
        name: "UIO",
        flights: 181
      },
      year_2020: {
        name: "UIO",
        flights: 71
      }
    },
    {
      coordinates: [13.7332, -60.952599],
      year_2019: {
        name: "UVF",
        flights: 242
      },
      year_2020: {
        name: "UVF",
        flights: 46
      }
    },
    {
      coordinates: [23.03440094, -81.43530273],
      year_2019: {
        name: "VRA",
        flights: 92
      },
      year_2020: {
        name: "VRA",
        flights: 0.0
      }
    },
    {
      coordinates: [-17.6448002, -63.13539886],
      year_2019: {
        name: "VVI",
        flights: 57
      },
      year_2020: {
        name: "VVI",
        flights: 0.0
      }
    },
    {
      coordinates: [22.8971005, -102.686996499999],
      year_2019: {
        name: "ZCL",
        flights: 63
      },
      year_2020: {
        name: "ZCL",
        flights: 23
      }
    },
    {
      coordinates: [17.6016007, -101.4609985],
      year_2019: {
        name: "ZIH",
        flights: 12
      },
      year_2020: {
        name: "ZIH",
        flights: 3
      }
    }
  ];
  
  // Define arrays to hold created city and state markers
  var year_2020Markers = [];
  var year_2019Markers = [];
  
  // Loop through locations and create city and state markers
  for (var i = 0; i < locations.length; i++) {
    //Setting the marker radius for the state by passing population into the markerSize function
    year_2019Markers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "#1555F3",
        fillColor: "#1555F3",
        radius: 250 * markerSize(locations[i].year_2019.flights)
      })
    );
    // year_2019Markers.push(
    //   L.cirlce(
    //     L.latLng(
    //       parseFloat(locations[i].coordinates[0]),
    //       parseFloat(locations[i].coordinates[1])
    //     )
    //   )
    // );
    // Setting the marker radius for the city by passing population into the markerSize function
    year_2020Markers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "#D62336",
        fillColor: "#D62336",
        radius: 250 * markerSize(locations[i].year_2020.flights)
      })
    );
  }
  
  // Define variables for our tile layers
  var light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox/light-v10",
    accessToken: 'code here'
  });
  
  var dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox/dark-v10",
    accessToken: 'code here'
  });
  
  var cityview = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken: 'code here'
  });
  
  
  // Create two separate layer groups: one for cities and one for states
  var year_2019 = L.layerGroup(year_2019Markers);
  var year_2020 = L.layerGroup(year_2020Markers);
  
  // Only one base layer can be shown at a time
  var baseMaps = {
    "Light": light,
    "Dark": dark,
    "CityView": cityview
  };
  
  // Create an overlay object
  var overlayMaps = {
    "2019": year_2019,
    "2020": year_2020
  };
  
  // Create map object and set default layers
  var myMap = L.map("map", {
    center: [11.740821, -71.563708],
    zoom: 4,
    layers: [dark, year_2019, year_2020]
  });
  
  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
  
