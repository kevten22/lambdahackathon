import React from 'react';
import { Container} from 'reactstrap';
import './Upload.scss';

const Upload = props => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <Container>
            <form onSubmit={handleSubmit} action="#" method="POST" encType="multipart/form-data">
                <div>Select images: <input type="file" name="img" multiple required/></div>
                <div>Dataset Name: <input type="text" name="name" multiple required/></div>
                <div>Dataset Description: <input type="text" name="description" multiple required/></div>
                <div>How should the data be labeled: <input type="text" name="label-params" multiple required/></div>
                <input type="submit"/>
            </form>
        </Container>
    );
};

export default Upload;
