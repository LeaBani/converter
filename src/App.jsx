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
      value: 1,
      isLiked: false,
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
    const { isLiked } = this.state;

    this.setState({
      isLiked: !isLiked,
    });
    // console.log("isLiked", isLiked);
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

  // TODO 
  changeValue = (newValue) => {
    this.setState({
      value: newValue,
    });
    console.log(newValue);
  };

  render() {
    const {
      isOpen, currency, value, isLiked,
    } = this.state;
    return (

      <div className="app">
        <Header
          title="Converter"
          value={value}
          isOpen={isOpen}
          toggle={this.toggleCurrencies}
          change={this.changeValue}
        />
        {isOpen && <CurrenciesList currenciesList={currenciesList} change={this.changeCurrency} />}

        <ConvertedValue
          currency={currency}
          value={value}
        />

        <Footer
          isLiked={isLiked}
          toggle={this.toggleLike}
        />

      </div>
    );
  }
}

export default App;