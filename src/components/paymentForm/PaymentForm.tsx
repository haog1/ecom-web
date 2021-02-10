import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Input } from 'antd';
import styles from './PaymentForm.module.scss';

export class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: undefined,
    name: '',
    number: '',
  };

  handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm" style={{ marginTop: 50 }}>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className={styles['payment-form']}>
          <Input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
      </div>
    );
  }
}
