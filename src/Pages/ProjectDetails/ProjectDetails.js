import React from "react";
import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {

    const location = useLocation();
    const { card } = location.state || {};

    return (
        <div className=" p-10 w-full mx-auto flex justify-between items-center">
            <div className="grid grid-cols-1 m-12">
                <div 
                    className="rounded overflow-hidden shadow-lg">
                        <div className="font-bold text-xl mb-2 text-center p-2">
                            {card.title}
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <div dangerouslySetInnerHTML={{ __html: card.description }} />
                        </div>
                </div>
            </div>
        </div>
    );
};


export default ProjectDetails;