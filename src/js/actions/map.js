/**
 * Created by huling on 11/5/2016.
 */
import { Rest } from 'grommet';
import { URL } from '../constants';

export function getMapJson(place) {
  return Rest.default.get(URL.MAP_DATA + place).then((res) => {
    return res.body;
  });
}

export function getUKMap(mapContainer, place, path, projection) {
  mapContainer.selectAll(".subunit")
    .data(topojson.feature(place, place.objects.subunits).features)
    .enter().append("path")
    .attr("class", d => "subunit " + d.id)
    .attr("d", path);

  mapContainer.append("path")
    .datum(topojson.mesh(place, place.objects.subunits, (a, b) => a !== b && a.id !== "IRL"))
    .attr("d", path)
    .attr("class", "subunit-boundary");

  mapContainer.append("path")
    .datum(topojson.mesh(place, place.objects.subunits, (a, b) => a === b && a.id === "IRL"))
    .attr("d", path)
    .attr("class", "subunit-boundary IRL");

  mapContainer.append("path")
    .datum(topojson.feature(place, place.objects.places))
    .attr("d", path)
    .attr("class", "place");

  mapContainer.selectAll(".place-label")
    .data(topojson.feature(place, place.objects.places).features)
    .enter().append("text")
    .attr("class", "place-label")
    .attr("transform", d => `translate(${projection(d.geometry.coordinates)})`)
    .attr("dy", ".25em")
    .attr("dx", d => d.geometry.coordinates[0] > -1 ? '.25em' : '-.25em')
    .text(d => d.properties.name)
    .attr("x", d => d.geometry.coordinates[0] > -1 ? 6 : -6)
    .style("text-anchor", d => d.geometry.coordinates[0] > -1 ? "start" : "end");
}
