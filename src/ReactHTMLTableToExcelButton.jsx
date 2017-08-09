import React from 'react';
import PropTypes from 'prop-types';

import withReactHTMLTableToExcel from './ReactHTMLTableToExcel';

const Button = (props) => (
     <button
 		id={props.id}
 		className={props.className}
 		onClick={props.onClick}
     >
     	{props.buttonText}
     </button>
);

Button.propTypes = {
 	// because of ReactHTMLTableToExcel HOC
  	table: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    sheet: PropTypes.string.isRequired,

	id: PropTypes.string,
	className: PropTypes.string,
	buttonText: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  	id: 'button-download-as-xls',
  	className: 'button-download',
	buttonText: 'Download',
};

const ReactHTMLTableToExcelButton = withReactHTMLTableToExcel(Button);

export { ReactHTMLTableToExcelButton }; 
