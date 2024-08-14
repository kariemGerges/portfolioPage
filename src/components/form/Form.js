import React, { useState, useEffect } from "react";
import useEmailSender  from '../../Hooks/useEmailSender'
import { useTranslation  } from "react-i18next";


const From = ({ onSearch }) => {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [triggerSend, setTrigger] = useState(false);

    const { data, loading, error } = useEmailSender(triggerSend ? FirstName : null, triggerSend ? LastName : null, triggerSend ? Email : null, triggerSend ? Message : null);

    const { t } = useTranslation ();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!FirstName || !LastName || !Email || !Message) {
            alert("Please fill out all the fields before submitting.");
            return;
        }
        onSearch(FirstName, LastName, Email, Message);
        setTrigger(true);
    };

    useEffect(() => {
        if (data) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
            setTrigger(false);
        }
    }, [data]);

    return (
        <form noValidate onSubmit={handleSubmit} >
            
            <div className="space-y-12" >
                <div >
                    <h2 className="text-base font-semibold leading-7" id="contact-info">{t('contact.contact_info')}</h2>
                    <p className="mt-1 text-sm leading-6 ">{t('contact.share_thoughts')}</p>
                </div>
                <div className="border-b border-white/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* Name */}
                        <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                            {t('contact.first_name')}
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="pl-4 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                                value={FirstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="John"
                                required
                            />  
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6">
                            {t('contact.last_name')}
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="pl-4 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={LastName}
                                placeholder="Doe"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        </div>
                        {/* Email */}
                        <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6">
                            {t('contact.email_address')}
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="pl-4 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={Email}
                                placeholder="example@me.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        </div>
                        {/* Message */}
                        <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6">
                            {t('contact.message')}
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="about"
                                name="about"
                                rows={5}
                                className="pl-4 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                value={Message}
                                placeholder="Type your message here..."
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 "
                            id="contact-info"
                        >
                            {t('contact.get_in_touch')}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                type="submit"
                className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-blue-950 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={loading}
                >
                {loading ? 'Sending...' : t('contact.send') }
                </button>
            </div>
    </form>
    )

};

export default From;