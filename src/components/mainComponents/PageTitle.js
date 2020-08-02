import React from 'react';

function PageTitle(props) {
    return (
        // <Suspense fallback={<div>Loading...</div>}>
        <h1 style={style.container}>
            {props.children}
        </h1>
        // </Suspense>
    );

}
export default PageTitle;

const style = ({
    container: {
        fontSize: '27px',
    }

});