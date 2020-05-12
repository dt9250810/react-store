import React from 'react';

class AddInventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <p className="title has-text-centered">Inventory</p>
        <div className="control">
          <button className="button" 
            onClick={() => { 
              this.props.close('add inventory datas'); 
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }
}

export default AddInventory;