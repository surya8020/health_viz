import React, { useState } from 'react';
import Papa from 'papaparse';

const CSVReader = ({ onDataLoaded }) => {
    const [csvData, setCSVData] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        Papa.parse(file, {
            complete: (result) => {
                setCSVData(result.data);
                if (onDataLoaded) {
                    onDataLoaded(result.data);
                }
            },
            header: true, // Set to false if your CSV file doesn't have a header row
        });
    };

    return (
        <input type="file" onChange={handleFileChange} />
    );
};

export default CSVReader;
