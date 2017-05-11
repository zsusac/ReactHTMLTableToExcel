/* global window, document */
import React, {Component, PropTypes} from 'react';

propTypes = {
    table: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    sheet: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    buttonText: PropTypes.string
};

class ReactHTMLTableToExcel extends Component {

    constructor(props) {
        super(props);
        this.handleDownload = this
            .handleDownload
            .bind(this);
    }

    static base64(s) {
        return window.btoa(unescape(encodeURIComponent(s)))
    }

    static format(s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) {
            return c[p];
        })
    }

    handleDownload() {
        if (!document) {
            return null;
        }

        const table = document
            .getElementById(this.props.table)
            .outerHTML;
        const sheet = String(this.props.sheet);
        const filename = String(this.props.filename) + '.xls';

        const uri = 'data:application/vnd.ms-excel;base64,';
        const template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
                'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
                'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
                'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' +
                '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' +
                'xml><![endif]--></head><body>{table}</body></html>';

        const context = {
            worksheet: sheet || 'Worksheet',
            table: table
        }

        // If IE11
        if (window.navigator.msSaveOrOpenBlob) {
            const fileData = ['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
                    'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
                    'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
                    'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' +
                    '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' +
                    'xml><![endif]--></head><body>' + table + '</body></html>'];
            const blobObject = new Blob(fileData);
            const elem = window
                .document
                .createElement('a');
            document
                .getElementById('react-html-table-to-excel')
                .click()(function () {
                    window
                        .navigator
                        .msSaveOrOpenBlob(blobObject, filename);
                });

            return;
        }

        const element = window
            .document
            .createElement('a');
        element.href = uri + this.base64(this.format(template, context));
        element.download = filename;
        document
            .body
            .appendChild(element);
        element.click();
        document
            .body
            .removeChild(element);

        return;
    }

    render() {
        return (
            <button
                id={this.props.id || ''}
                className={this.props.className || ''}
                type='button'
                onClick={this.handleDownload}>{this.props.buttonText || 'Download'}</button>
        )
    }
}

ReactHTMLTableToExcel.propTypes = propTypes

export default ReactHTMLTableToExcel