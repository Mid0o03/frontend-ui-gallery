import React from 'react';
import CareChart from '../../components/CareChart';
import BonsaiAI from '../../components/BonsaiAI';

const AIAdvice: React.FC = () => {
    return (
        <div className="pt-20">
            <CareChart />
            <BonsaiAI />
        </div>
    );
};

export default AIAdvice;
