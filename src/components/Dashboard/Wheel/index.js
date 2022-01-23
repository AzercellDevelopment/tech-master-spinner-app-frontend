import React from "react";
import SuccessModal from "../SuccessModal";

import "./index.css";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      isSuccess: false,
      gift: null
    };
    this.selectItem = this.selectItem.bind(this);
    this.setSuccess = this.setSuccess.bind(this);
    this.setGift = this.setGift.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      const gift = this.props.items[selectedItem];
      this.setGift(gift);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
    setTimeout(this.setSuccess, 4500);
  }

  setGift(gift){
    this.setState({gift: gift })
  }

  setSuccess() {
    // Changing state
    this.setState({ isSuccess: true });
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";

    return (
      <>
        <div className="wheel-container">
          <div
            className={`wheel ${spinning}`}
            style={wheelVars}
            onClick={this.selectItem}
          >
            {items.map((item, index) => (
              <div
                className="wheel-item"
                key={index}
                style={{ "--item-nb": index }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <SuccessModal
          earnedGift={this.state.gift}
          isOpen={this.state.isSuccess}
        />
      </>
    );
  }
}
