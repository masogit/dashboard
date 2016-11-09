/**
 * Created by huling on 11/5/2016.
 */

import 'd3';
import React, { Component, PropTypes } from 'react';
import { Box } from 'grommet';
import {getMapJson} from '../actions/map.js';

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      features: null,
      points: null,
      showLayer: false
    };
  }
  componentDidMount() {
    const width = 950, height = 680;

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
      const features = place.features.slice(0, 3);
      const points = features.map(f => ({
          type: "Point",
          coordinates: f.properties.cp
        }));

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
      // draw subunit
      let subunit = mapContainer.selectAll("path")
        .data(features)
        .enter().append("path")
        .attr("class", 'subunit')
        .attr("d", path)
        .style("fill", (d, a) => d.properties.color)
        .on('click', (d, a) => {
          const layer = this.layer.boxContainerRef;
          layer.style.left = d3.event.pageX + "px";
          layer.style.top = (d3.event.pageY - 60) + "px";

          this.setState({ showLayer: true }/*, () =>
            setTimeout(() => this.setState({ showLayer: false }), 3000)*/);
        });
        
      const events = this.props.events;
      if (events) {
        events.map((pre, curent) => {
          subunit.on(pre.name, (d, a) => pre.func(subunit, d, a));
        });
      }
    }
  }

  renderPoints() {  
    if (this.state.points) {
       const {mapContainer, path} = this;
       mapContainer.selectAll('point')
         .data(this.state.points)
         .enter().append("path")
         .attr("d", path)
         .style("fill", (d, a) => 'yellow')
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
    const {showLabel, showPoints, events, children} = this.props;
    this.renderMap();
    if (showPoints) {
      this.renderPoints();
    }

    if (showLabel) {
      this.renderLabel();
    }
    return (
      <Box className='map'>0
        <div id='map' />
        <Box className='layer' ref={node => this.layer = node}>
          {this.state.showLayer && children}
        </Box>
      </Box>  
    );
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