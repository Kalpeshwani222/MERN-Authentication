import React from 'react'

const ErrorMessage = ({variant="info",children}) => {
    return (
        // <Alert variant ={variant} style={{fontSize:20}}>
        //     <strong>{children}</strong>
        // </Alert>

        <div className="alert alert-danger" role="alert">
            <strong>{children}</strong>
        </div>
    );
};

export default ErrorMessage
