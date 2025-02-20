import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Task_card from './Task_card';
import Add_taskButton from './Add_taskButton';
import CreateDivButton from './CreateDivButton';

const TASK_Table = () => {
    
    return (
        <div className="p-4">
         
                {/* <Add_taskButton></Add_taskButton> */}
                <CreateDivButton></CreateDivButton>
            
            
        </div>
    );
};

export default TASK_Table;
