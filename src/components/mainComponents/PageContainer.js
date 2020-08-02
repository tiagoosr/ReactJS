import React from 'react';

function PageContainer(props) {
    return (
        // <Suspense fallback={<div>Loading...</div>}>
        <div style={style.Container}>
            {props.children}
        </div>
        // </Suspense>
    );

}
export default PageContainer;

const style = ({
    Container: {
        maxWidth: '1000px',
        backgroundColor: '#FFF',
        margin: 'auto',
    }
});