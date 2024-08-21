import React from "react";
import './Bio.css';
import { useTranslation } from "react-i18next";

const Bio = ()  => {

    const { t } = useTranslation ();

    return (
        <div className="mx-auto justify-center flex">
            <div className="pl-8 ml-8 pr-8 mr-8">
                <h1 className="text-3xl font-bold mb-4">{t('bio.about_me')}</h1>
                    <p className=" mb-4">{t('bio.paragraph1')}</p>
                        <p className=" mb-4">{t('bio.paragraph2')}</p>
                            <p className=" mb-4">{t('bio.paragraph3')}</p>
                    <p className=" mb-4">{t('bio.paragraph4')}</p>
                <p className="">{t('bio.paragraph5')}</p>
            </div>
        </div>
    );
}

export default Bio;
