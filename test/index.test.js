import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ReactHTMLTableToExcel from '../src/ReactHTMLTableToExcel';

chai.use(chaiEnzyme());

const props = {
  id: 'test-table-xls-button',
  className: 'download-table-xls-button',
  table: 'table-to-xls',
  filename: 'tablexls',
  sheet: 'tablexls',
  buttonText: 'Download as XLS',
};

const container = shallow(<ReactHTMLTableToExcel {...props} />);

describe('tests for <ReactHTMLTableToExcel> container', () => {
  it('should render one button', () => {
    expect(container.find('button').length).to.equal(1);
  });

  it('should render one button with the correct class applied', () => {
    expect(container.find('button').hasClass(props.className)).to.equal(true);
  });
});
