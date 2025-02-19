import { Outlet } from 'react-router-dom';
import Sidebars from '../Components/Taskpage/Sidebars';

const TaskPage = () => {
    return (
        <div className='flex'>
            <Sidebars></Sidebars>
            <Outlet></Outlet>
        </div>
    );
};

export default TaskPage;