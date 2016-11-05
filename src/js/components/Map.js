/**
 * Created by huling on 11/5/2016.
 */

import 'react-d3/node_modules/d3/d3.js';
import React, { Component } from 'react';
import {getMapJson/*, getUKMap*/} from '../actions/map.js';

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      finished: false
    };
  }
  componentDidMount() {
    const width = 960, height = 1160;

    const mapContainer = d3.select("#map").append("svg")
      .attr("width", width)
      .attr("height", height);

    const projection = d3.geo.mercator()
      .center([107, 31])
      .scale(850)
      .translate([width/2, height / 2]);

    const path = d3.geo.path().projection(projection);

    getMapJson('china').then((place) => {
      const feature = place.features;

      // draw subunit
      mapContainer.selectAll("path")
        .data(feature)
        .enter().append("path")
        .attr("class", 'subunit')
        .attr("d", path)
        .on("mouseenter", (d, a) => {
          mapContainer.select(".place-label_" + a).style("opacity", 1);
        })
        .on("mouseout", (d, a) => {
          mapContainer.select(".place-label_" + a).style("opacity", 0);
        })
        .on('click', (d, a) => {
          console.log(d);
        });


      // draw tooltip
      mapContainer.selectAll(".place-label")
        .data(feature)
        .enter().append("text")
        .attr("class", (d, index) => "place-label place-label_" + index)
        .attr("transform", d => `translate(${projection(d.properties.cp)})`)
        .attr("dy", ".35em")
        .text(d => d.id)
        .attr("x", d => d.geometry.coordinates[0] > -1 ? 6 : -6)
        .style("text-anchor", d => d.geometry.coordinates[0] > -1 ? "start" : "end")
        .style("opacity", 0)
        .on("mouseenter", (d, a) => {
          mapContainer.select(".place-label_" + a).style("opacity", 1);
        })
        .on("mouseout", (d, a) => {
          mapContainer.select(".place-label_" + a).style("opacity", 0);
        });


      // draw point
      const geometryCollection = {
        type: "GeometryCollection",
        geometries: feature.map(f => ({
          type: "Point",
          coordinates: f.properties.cp
        }))
      };

      mapContainer.append("path")
        .datum(geometryCollection)
        .attr("d", path)
        .attr("class", "place");

    });
  }

  render() {
    return <div id='map'/>;
  }
}
