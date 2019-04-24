import React, { PureComponent } from 'react';

class JobInfo extends PureComponent {

  render() {
    const { info } = this.props;
    console.log(info);
    
    const displayName = `${info.facility_name}
    ${info.street_address}
    
    `;

    return (
      <div>
        <div>{displayName}</div>
        {/* <img width={20} src={info.imag}/> */}
      </div>
    )

  }
}

export default JobInfo;
