import React from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t } = useTranslation ();

    return (
        <div className="">
            <h1 className="text-3xl  m-8 pl-8" id='hello'>{t('home.hello')}</h1>
                <h2 className="text-8xl font-semibold m-8 pl-8 " id='name'>{t('home.name')}</h2>
                    <h3 className="text-5xl font-medium m-8 pl-8 " id='title'>{t('home.title')}</h3>
                        <p className="m-8 pl-8 leading-relaxed " id='description'>
                            {t('home.description')}<br />
                        {t('home.description1')} <br />
                    {t('home.description2')}<br />
                {t('home.description3')}
            </p>
        </div>
    );
}

export default Home;