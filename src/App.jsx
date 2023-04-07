import React from 'react';
import './App.css';
import Header from './components/Header';
import ConvertedValue from './components/ConvertedValue';
import Footer from './components/Footer';

import currenciesList from './data/currencies';
import CurrenciesList from './components/CurrenciesList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      currency: {
        name: 'Australian Dollar',
        rate: 1.665247,
      },
      value: 10,
      isLike: false,
    };

    /*     this.defaultCurrency = {
      name: 'United State Dollar',
      rate: 1.09,
    }; */

    this.toggleCurrencies = this.toggleCurrencies.bind(this);
  }

  toggleCurrencies = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  };

  toggleLike = () => {
    const { isLike } = this.state;

    this.setState({
      isLike: !isLike,
    });
  };

  changeCurrency = (newCurrency) => {
    /*     this.setState({
      currency: {
        name: 'Swiss Franc',
        rate: 1.06,
      },
    }); */

    this.setState({
      currency: newCurrency,
    });
  };

  render() {
    const {
      isOpen, currency, value, isLike,
    } = this.state;
    return (

      <div className="app">
        <Header
          title="Converter"
          value={value}
          isOpen={isOpen}
          toggle={this.toggleCurrencies}
        />
        {isOpen && <CurrenciesList currenciesList={currenciesList} change={this.changeCurrency} />}

        <ConvertedValue
          currency={currency}
          value={value}
        />

        <Footer
          isLike={isLike}
          toggle={this.toggleLike}
        />

      </div>
    );
  }
}

export default App;