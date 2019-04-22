import React, { PureComponent } from 'react';

class JobInfo extends PureComponent {

  render() {
    const { info } = this.props;
    console.log(info);
    
    const displayName = `${info.facility_name}`;

    return (
      <div>
        <div>{displayName}</div>
      </div>
    )

  }
}

export default JobInfo;
