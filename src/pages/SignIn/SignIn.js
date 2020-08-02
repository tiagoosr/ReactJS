import React from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css';

import PageContainer from '../../components/mainComponents/PageContainer';
import PageTitle from '../../components/mainComponents/PageTitle';

function SignIn() {
    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <div>
                <form>
                    <label className="area">
                        <div className="area-title">E-mail</div>
                        <div className="area-input">
                            <input type="email" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Senha</div>
                        <div className="area-input">
                            <input type="password" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Lembrar Senha</div>
                        <div className="area-input">
                            <input type="checkbox" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </div>
        </PageContainer>
    );
}
export default SignIn;