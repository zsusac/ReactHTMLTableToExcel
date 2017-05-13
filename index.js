'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window, document, Blob */


var propTypes = {
  table: _react.PropTypes.string.isRequired,
  filename: _react.PropTypes.string.isRequired,
  sheet: _react.PropTypes.string.isRequired,
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  buttonText: _react.PropTypes.string
};

var defaultProps = {
  id: 'button-download-as-xls',
  className: 'button-download',
  buttonText: 'Download'
};

var ReactHTMLTableToExcel = function (_Component) {
  _inherits(ReactHTMLTableToExcel, _Component);

  function ReactHTMLTableToExcel(props) {
    _classCallCheck(this, ReactHTMLTableToExcel);

    var _this = _possibleConstructorReturn(this, (ReactHTMLTableToExcel.__proto__ || Object.getPrototypeOf(ReactHTMLTableToExcel)).call(this, props));

    _this.handleDownload = _this.handleDownload.bind(_this);
    return _this;
  }

  _createClass(ReactHTMLTableToExcel, [{
    key: 'handleDownload',
    value: function handleDownload() {
      if (!document) {
        return null;
      }

      var table = document.getElementById(this.props.table).outerHTML;
      var sheet = String(this.props.sheet);
      var filename = String(this.props.filename) + '.xls';

      var uri = 'data:application/vnd.ms-excel;base64,';
      var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' + 'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' + 'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' + 'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' + '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' + 'xml><![endif]--></head><body>{table}</body></html>';

      var context = {
        worksheet: sheet || 'Worksheet',
        table: table
      };

      // If IE11
      if (window.navigator.msSaveOrOpenBlob) {
        var fileData = ['' + ('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' + 'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' + 'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' + 'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' + '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' + 'xml><![endif]--></head><body>') + table + '</body></html>'];
        var blobObject = new Blob(fileData);
        document.getElementById('react-html-table-to-excel').click()(function () {
          window.navigator.msSaveOrOpenBlob(blobObject, filename);
        });

        return true;
      }

      var element = window.document.createElement('a');
      element.href = uri + ReactHTMLTableToExcel.base64(ReactHTMLTableToExcel.format(template, context));
      element.download = filename;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          id: this.props.id,
          className: this.props.className,
          type: 'button',
          onClick: this.handleDownload
        },
        this.props.buttonText
      );
    }
  }], [{
    key: 'base64',
    value: function base64(s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    }
  }, {
    key: 'format',
    value: function format(s, c) {
      return s.replace(/{(\w+)}/g, function (m, p) {
        return c[p];
      });
    }
  }]);

  return ReactHTMLTableToExcel;
}(_react.Component);

ReactHTMLTableToExcel.propTypes = propTypes;
ReactHTMLTableToExcel.defaultProps = defaultProps;

exports.default = ReactHTMLTableToExcel;
