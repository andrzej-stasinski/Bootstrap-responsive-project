import React from 'react';

const PageWrapper = ({title, children}) => (
        <div style={{textAlign: 'center', paddingTop: '70px'}}>
            <h2>{title}</h2>
            {children}
        </div>
);
 
export default PageWrapper;