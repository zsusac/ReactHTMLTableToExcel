/* global window, document, Blob */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  table: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  sheet: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string,
};

const defaultProps = {
  id: 'button-download-as-xls',
  className: 'button-download',
  buttonText: 'Download',
};

class ReactHTMLTableToExcel extends Component {
  constructor(props) {
    super(props);
    this.handleDownload = this.handleDownload.bind(this);
  }

  static base64(s) {
    return window.btoa(unescape(encodeURIComponent(s)));
  }

  static format(s, c) {
    return s.replace(/{(\w+)}/g, (m, p) => c[p]);
  }

  handleDownload() {
    if (!document) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Failed to access document object');
      }

      return null;
    }

    if (document.getElementById(this.props.table).nodeType !== 1 || document.getElementById(this.props.table).nodeName !== 'TABLE') {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Provided table property is not html table element');
      }

      return null;
    }

    const table = document.getElementById(this.props.table).outerHTML;
    const sheet = String(this.props.sheet);
    const filename = `${String(this.props.filename)}.xls`;

    const uri = 'data:application/vnd.ms-excel;base64,';
    const template =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
      'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
      'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
      'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' +
      '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' +
      'xml><![endif]--></head><body>{table}</body></html>';

    const context = {
      worksheet: sheet || 'Worksheet',
      table,
    };

    // If IE11
    if (window.navigator.msSaveOrOpenBlob) {
      const fileData = [
        `${'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' + 'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' + 'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' + 'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' + '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' + 'xml><![endif]--></head><body>'}${table}</body></html>`,
      ];
      const blobObject = new Blob(fileData);
      document.getElementById('react-html-table-to-excel').click()(() => {
        window.navigator.msSaveOrOpenBlob(blobObject, filename);
      });

      return true;
    }

    const element = window.document.createElement('a');
    element.href =
      uri +
      ReactHTMLTableToExcel.base64(
        ReactHTMLTableToExcel.format(template, context),
      );
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    return true;
  }

  render() {
    return (
      <button
        id={this.props.id}
        className={this.props.className}
        type="button"
        onClick={this.handleDownload}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

ReactHTMLTableToExcel.propTypes = propTypes;
ReactHTMLTableToExcel.defaultProps = defaultProps;

export default ReactHTMLTableToExcel;
