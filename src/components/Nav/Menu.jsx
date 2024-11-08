export const MenuList = [
    //Dashboard
    {
        title: 'Dashboard',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="material-symbols-outlined">home</i>,
        content: [
            {
                title: 'Dashboard Light',
                to: 'dashboard',					
            },
            {
                title: 'Dashboard Dark',
                to: 'dashboard-dark',
            },
            {
                title: 'Finance',
                to: 'finance',
            },
           
        ],
    },
    {
        title: 'Student',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="material-symbols-outlined">school</i>,
        content: [
            {
                title: 'Student',
                to: 'student',					
            },
            {
                title: 'Student Detail',
                to: 'student-detail',
            },
            {
                title: 'Add New Student',
                to: 'add-student',
            },
           
        ],
    },
    {
        title:'Teacher',
        classsChange: 'mm-collapse',		
        iconStyle: <i className="material-symbols-outlined">person</i>,
        content: [
            {
                title: 'Teacher',
                to: 'teacher',					
            },
            {
                title: 'Teacher Detail',
                to: 'teacher-detail',					
            },
            {
                title: 'Add New Teacher',
                to: 'add-teacher',					
            },
        ],
    },
    {
        title:'Food',
        classsChange: 'mm-collapse',		
        iconStyle: <i className="material-symbols-outlined">restaurant_menu</i>,
        content: [
            {
                title: 'Food menu',
                to: 'food',					
            },
            {
                title: 'Food Detail',
                to: 'food-details',					
            },
            
        ],
    },
    {
        title: 'File Manager',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="material-icons">folder</i>	,
        content: [
            {
                title: 'File Manager',
                to: 'file-manager',					
            },
            {
                title: 'User',
                to: 'user',
            },
            {
                title: 'Calendar',
                to: 'calendar',
            },            
            {
                title: 'Chat',
                to: 'chat',
            },
            {
                title: 'Activity',
                to: 'activity',
            },
        ],
    },        
    //Apps
    {
        title: 'Apps',	
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">app_registration </i>,
        content: [
            {
                title: 'Profile',
                to: 'app-profile'
            },
            {
                title: 'Edit Profile',
                to: 'edit-profile'
            },
            {
                title: 'Post Details',
                to: 'post-details'
            },
            {
                title: 'Email',
                //to: './',
                hasMenu : true,
                content: [
                    {
                        title: 'Compose',
                        to: 'email-compose',
                    },
                    {
                        title: 'Index',
                        to: 'email-inbox',
                    },
                    {
                        title: 'Read',
                        to: 'email-read',
                    }
                ],
            },
            {
                title:'Calendar',
                to: 'app-calender'
            },
            {
                title: 'Shop',
                //to: './',
                hasMenu : true,
                content: [
                    {
                        title: 'Product Grid',
                        to: 'ecom-product-grid',
                    },
                    {
                        title: 'Product List',
                        to: 'ecom-product-list',
                    },
                    {
                        title: 'Product Details',
                        to: 'ecom-product-detail',
                    },
                    {
                        title: 'Order',
                        to: 'ecom-product-order',
                    },
                    {
                        title: 'Checkout',
                        to: 'ecom-checkout',
                    },
                    {
                        title: 'Invoice',
                        to: 'ecom-invoice',
                    },
                    {
                        title: 'Customers',
                        to: 'ecom-customers',
                    },
                ],
            },
        ],
    },
    //Charts
    {
        title: 'Charts',	
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">assessment</i>,
        content: [
            
            {
                title: 'RechartJs',
                to: 'chart-rechart',					
            },
            {
                title: 'Chartjs',
                to: 'chart-chartjs',					
            },
            {
                title: 'Sparkline',
                to: 'chart-sparkline',					
            },
            {
                title: 'Apexchart',
                to: 'chart-apexchart',					
            },
        ]
    },
    //Boosttrap
    {
        title: 'Bootstrap',	
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">favorite</i>,	
        content: [
            {
                title: 'Accordion',
                to: 'ui-accordion',					
            },
            {
                title: 'Alert',
                to: 'ui-alert',					
            },
            {
                title: 'Badge',
                to: 'ui-badge',					
            },
            {
                title: 'Button',
                to: 'ui-button',					
            },
            {
                title: 'Modal',
                to: 'ui-modal',					
            },
            {
                title: 'Button Group',
                to: 'ui-button-group',					
            },
            {
                title: 'List Group',
                to: 'ui-list-group',					
            },
            {
                title: 'Cards',
                to: 'ui-card',					
            },
            {
                title: 'Carousel',
                to: 'ui-carousel',					
            },
            {
                title: 'Dropdown',
                to: 'ui-dropdown',					
            },
            {
                title: 'Popover',
                to: 'ui-popover',					
            },
            {
                title: 'Progressbar',
                to: 'ui-progressbar',					
            },
            {
                title: 'Tab',
                to: 'ui-tab',					
            },
            {
                title: 'Typography',
                to: 'ui-typography',					
            },
            {
                title: 'Pagination',
                to: 'ui-pagination',					
            },
            {
                title: 'Grid',
                to: 'ui-grid',					
            },
        ]
    },
    //plugins
    {
        title:'Plugins',
        classsChange: 'mm-collapse',
        iconStyle : <i className="material-icons">extension </i>,
        content : [
            {
                title:'Select 2',
                to: 'uc-select2',
            },
            {
                title:'Noui Slider',
                to: 'uc-noui-slider',
            },
            {
                title:'Sweet Alert',
                to: 'uc-sweetalert',
            },
            {
                title:'Toastr',
                to: 'uc-toastr',
            },           
            {
                title:'Light Gallery',
                to: 'uc-lightgallery',
            },
        ]
    },
    //Widget
    {   
        title:'Widget',        
        iconStyle: <i className="material-icons">widgets</i>,
        to: 'widget',
    },
    //Forms
    {
        title:'Forms',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">insert_drive_file</i>,
        content : [
            {
                title:'Form Elements',
                to: 'form-element',
            },
            {
                title:'Wizard',
                to: 'form-wizard',
            },
            {
                title:'CkEditor',
                to: 'form-ckeditor',
            },
            {
                title:'Pickers',
                to: 'form-pickers',
            },
            {
                title:'Form Validate',
                to: 'form-validation',
            },

        ]
    },
    //Table
    {
        title:'Table',
        classsChange: 'mm-collapse',
        iconStyle: <i className="material-icons">table_chart</i>,
        content : [
            {
                title:'Table Filtering',
                to: 'table-filtering',
            },
            {
                title:'Table Sorting',
                to: 'table-sorting',
            },
            {
                title:'Bootstrap',
                to: 'table-bootstrap-basic',
            },
           

        ]
    },
    //Pages
    {
        title:'Pages',
        classsChange: 'mm-collapse',
        iconStyle: <i className="merial-icons">article</i>,
        content : [
            {
                title:'Error',
                hasMenu : true,
                content : [
                    {
                        title: 'Error 400',
                        to : 'page-error-400',
                    },
                    {
                        title: 'Error 403',
                        to : 'page-error-403',
                    },
                    {
                        title: 'Error 404',
                        to : 'page-error-404',
                    },
                    {
                        title: 'Error 500',
                        to : 'page-error-500',
                    },
                    {
                        title: 'Error 503',
                        to : 'page-error-503',
                    },
                ],
            },
            {
                title:'Lock Screen',
                to: 'page-lock-screen',
            },

        ]
    },
    
]