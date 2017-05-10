import React, {Component, PropTypes} from 'react';

class ReactHTMLTableToExcel extends Component {

    constructor(props) {
        super(props);
        this.download = this
            .download
            .bind(this);
    }

    base64(s) {
        return window.btoa(unescape(encodeURIComponent(s)))
    }

    format(s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) {
            return c[p];
        })
    }

    download() {
        let table = document
            .getElementById(this.props.table)
            .outerHTML;
        let sheet = String(this.props.sheet);
        let filename = String(this.props.filename) + '.xls';

        let uri = 'data:application/vnd.ms-excel;base64,';
        let template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
                'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
                'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
                'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' +
                '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' +
                'xml><![endif]--></head><body>{table}</body></html>';

        let context = {
            worksheet: sheet || 'Worksheet',
            table: table
        }

        // If IE11
        if (window.navigator.msSaveOrOpenBlob) {
            let fileData = ['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
                    'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
                    'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
                    'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' +
                    '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' +
                    'xml><![endif]--></head><body>' + table + '</body></html>'];
            let blobObject = new Blob(fileData);
            let elem = window
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

        let element = window
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
                onClick={this.download}>{this.props.buttonText || 'Download'}</button>
        )
    }
}

ReactHTMLTableToExcel.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    table: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    sheet: PropTypes.string.isRequired,
    buttonText: PropTypes.string
};

export default ReactHTMLTableToExcel