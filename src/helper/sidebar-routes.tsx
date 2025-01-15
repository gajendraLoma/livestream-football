


import HomeIcon from '@heroicons/react/24/outline/HomeIcon'; 
import TvIcon from '@heroicons/react/24/outline/TvIcon'; 
import GlobeAltIcon from '@heroicons/react/24/outline/GlobeAltIcon'; 
import TrophyIcon from '@heroicons/react/24/outline/TrophyIcon';
import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon'; 
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';

import { SidebarMenuObj } from './types';

const iconClasses = `h-6 w-6`;


const routes: SidebarMenuObj[] = [
    {
        path: '/home',
        icon: <HomeIcon className={iconClasses} />,
        pageName: 'Home',
        pageTitle: 'Home',
    },
    {
        path: '/matches',
        icon: <TvIcon className={iconClasses} />,
        pageName: 'Matches',
        pageTitle : "Matches"
    },
    {
        path: '/soccer',
        icon: <GlobeAltIcon className={iconClasses} />,
        pageName: 'Soccer',
        pageTitle : "Soccer"
    },
    
    {
        path: '/leagues',
        icon: <TrophyIcon className={iconClasses} />,
        pageName: 'Leagues',
        pageTitle: 'Leagues',
    },
    {
        path: '/teams',
        icon: <UserGroupIcon className={iconClasses} />,
        pageName: 'Teams',
        pageTitle: 'Teams',
    },
    
    {
        path: '/players',
        icon: <UsersIcon className={iconClasses} />,
        pageName: 'Players',
        pageTitle: 'Players',
    },
  
];

export default routes;
