# GoogleMapsText

Given a string, this hits the Google Places API and returns a JSON object of results.

[Don't have a key?](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Usage

```
var googlemapstext = require('googlemapstext');
key = ':^)'; //your API key here

var maps = new googlemapstext(key);
maps.get('eiffel', function(err ,res){
    /* res =
    {
      "html_attributions": [],
      "results": [
        {
          "formatted_address": "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
          "geometry": {
            "location": {
              "lat": 48.85837009999999,
              "lng": 2.2944813
            },
            "viewport": {
              "northeast": {
                "lat": 48.85954515,
                "lng": 2.2961188
              },
              "southwest": {
                "lat": 48.85724494999999,
                "lng": 2.2925028
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
          "id": "fd0cfb424bbd79bf28a832e1764f1c2aa5927714",
          "name": "Eiffel Tower",
          "opening_hours": {
            "open_now": true,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 3072,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/116854891905978971156/photos\">Галина П</a>"
              ],
              "photo_reference": "CoQBdwAAAFokRGu36DWTzA-QNB4L4Ci1t_0TR3D3XMXBARF6WS8ega3H1VDfeadCPtiiFC_ztKEnBiLiAl1onRBXx9Ob6DbjAp7nKcmQE83gCDFeJnVIV6SM6YHJmRtE6hxJeqwPVxCuX1KL5uao5NDqSHwDlVqwLhUrf5hPd6MD8unjQNWiEhCa3acSAZOqCrAD7G4hJMHrGhR6nQXK7gb6yRHWFGSNxgiSvNBI3w",
              "width": 4608
            }
          ],
          "place_id": "ChIJLU7jZClu5kcR4PcOOO6p3I0",
          "rating": 4.7,
          "reference": "CmRSAAAAeXihHmYqMIiddh3giN76kMT6oEI4Xf82S4Bd1u6rQWYBCFCB-oOxNwy5dLLUaJM4wWnrBTCtFObWh4gqzwm-XlxifX5MSSrrv_-cLejJXikoyR_J0SHBiuRvCCcg6KVAEhDbrP_gKxkdp8-gpUNyBEmjGhQI5V8YTtOUzWGC-Orvv_zKXhM2PA",
          "types": [
            "premise",
            "point_of_interest",
            "establishment"
          ]
        }
      ],
      "status": "OK"
    }
    */
});
```
