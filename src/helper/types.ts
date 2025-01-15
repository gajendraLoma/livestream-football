// Routes Interface Starts ------------------------

// Interface for sidebar menu items.

export interface SidebarMenuObj {
    path: string;
    icon: JSX.Element; 
    pageName: string;
    pageTitle: string;
    submenu?: SubmenuItem[];
}

//  Interface for submenu items.

export interface SubmenuItem {
    path: string;
    icon: any;
    pageName: string;
    pageTitle: string;
}


// Routes Interface End ------------------------


//  Interface for LiveFootball data.
 
export interface livefootball {
    first_name: string;
    last_name: string;
    description: string;
    email: string;
    avatar: string;
    id?: number;
}
