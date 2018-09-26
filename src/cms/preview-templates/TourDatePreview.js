import React from 'react';
import PropTypes from 'prop-types';
import { TourDateTemplate } from '../../templates/tour-date';

const TourDatePreview = ({ entry, widgetFor }) => (
  <TourDateTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

TourDatePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default TourDatePreview;
