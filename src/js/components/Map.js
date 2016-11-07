/**
 * Created by huling on 11/5/2016.
 */

import 'd3';
import React, { Component, PropTypes } from 'react';
import {getMapJson} from '../actions/map.js';

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      features: null,
      points: null
    };
  }
  componentDidMount() {
    const width = 800, height = 600;

    this.mapContainer = d3.select("#map").append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr('viewBox', '0 0 950 680');

    this.projection = d3.geo.mercator()
      .center([106, 31])
      .scale(850)
      .translate([500, 465]);

    this.path = d3.geo.path().projection(this.projection);

    getMapJson('china').then((place) => {
      const features = place.features;
      const points = {
        type: "GeometryCollection",
        geometries: features.map(f => ({
          type: "Point",
          coordinates: f.properties.cp
        }))
      };

      this.setState({
        features,
        points
      });
    });
  }

  renderMap() {
    const {mapContainer, path, projection} = this;
    const features = this.state.features;
    if (features) {
      const events = this.props.events;
      // draw subunit
      let subunit = mapContainer.selectAll("path")
        .data(features)
        .enter().append("path")
        .attr("class", 'subunit')
        .attr("d", path)
        .on('click', (d, a) => {
          console.log(d);
        });
      events.map((pre, curent) => {
        subunit.on(pre.name, (d, a) => pre.func(subunit, d, a));
      });
    }
  }

  renderPoints() {  
    if (this.state.points) {
       const {mapContainer, path} = this;
       mapContainer.append("path")
         .datum(this.state.points)
         .attr("d", path)
         .attr("class", "place")
         .on("mouseenter", (d, a) => {
           mapContainer.select(".place-label_" + a)[0][0].style.opacity = 1;
         })
         .on("mouseout", (d, a) => {
           mapContainer.select(".place-label_" + a)[0][0].style.opacity = 0;
         });
    }
  }

  renderLabel() {
    if (this.state.features) {
      const {mapContainer, projection} = this;
      // draw tooltip
      mapContainer.selectAll(".place-label")
        .data(this.state.features)
        .enter().append("text")
        .attr("class", (d, index) => "place-label place-label_" + index)
        .attr("transform", d => `translate(${projection(d.properties.cp)})`)
        .attr("dy", ".35em")
        .text(d => d.id)
        .attr("x", d => d.geometry.coordinates[0] > -1 ? 6 : -6)
        .style("text-anchor", d => d.geometry.coordinates[0] > -1 ? "start" : "end")
        .style("opacity", 0)
        .on("mouseenter", (d, a) => {
          mapContainer.select(".place-label_" + a)[0][0].style.opacity = 1;
        })
        .on("mouseout", (d, a) => {
          mapContainer.select(".place-label_" + a)[0][0].style.opacity = 0;
        });
    }
  }

  render() {
    const {showLabel, showPoints, events} = this.props;
    this.renderMap();
    if (showPoints) {
      this.renderPoints();
    }

    if (showLabel) {
      this.renderLabel();
    }
    return <div id='map'/>;
  }
}

Map.propTypes = {
  showPoints: PropTypes.bool,
  showLabel: PropTypes.bool,
  events: PropTypes.array
};

Map.defaultProps = {
  showPoints: true,
  showLabel: true
};
