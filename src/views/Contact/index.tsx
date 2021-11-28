import React from 'react';

import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact</h1>
            <Link to="/">
                Voltar para home
            </Link>
        </div>
    );
}

export default Contact;