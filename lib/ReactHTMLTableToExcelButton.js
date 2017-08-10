'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactHTMLTableToExcelButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ReactHTMLTableToExcel = require('./ReactHTMLTableToExcel');

var _ReactHTMLTableToExcel2 = _interopRequireDefault(_ReactHTMLTableToExcel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  return _react2.default.createElement(
    'button',
    {
      id: props.id,
      className: props.className,
      onClick: props.onClick
    },
    props.buttonText
  );
};

Button.propTypes = {
  // because of ReactHTMLTableToExcel HOC
  table: _propTypes2.default.string.isRequired,
  filename: _propTypes2.default.string.isRequired,
  sheet: _propTypes2.default.string.isRequired,

  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  buttonText: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired
};

Button.defaultProps = {
  id: 'button-download-as-xls',
  className: 'button-download',
  buttonText: 'Download'
};

var ReactHTMLTableToExcelButton = (0, _ReactHTMLTableToExcel2.default)(Button);

exports.ReactHTMLTableToExcelButton = ReactHTMLTableToExcelButton;