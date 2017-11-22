/*
 *  Document   : base_comp_treeview.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Tree View Page
 */

var BaseCompTreeview = function() {
    // Bootstrap Tree View, for more examples you can check out https://github.com/jonmiles/bootstrap-treeview

    // Init Tree Views
    var initTreeViews = function(){
        // Set default example tree data for all Tree Views
        var $treeData = [
            {
                text: '<b>Problem</b> - Problem 1: Social Skills Operational Definition. Ut excepteur qui non ex aute ut labore cupidatat do irure ad dolor voluptate sit sit adipisicing in quis et id sit ut minim. Lorem ipsum culpa occaecat commodo dolor est cupidatat reprehenderit mollit et culpa magna id amet ullamco amet do sint ut mollit.',
                href: '#problem1',
                nodes: [
                    {
                        text: '<b>Goal</b> - Goal1 for Problem 1: Lorem ipsum esse consectetur consequat incididunt id anim est consectetur velit ad nisi dolore elit sit eu ut mollit ullamco dolore pariatur qui.',
                        href: '#goal11',
                        state: {
                            expanded: true
                        },
                        nodes: [
                            {
                                text: '<b>Objective</b> - Objective 1 for Goal 1: Mollit id eiusmod ullamco ut dolor nostrud ad sint commodo laborum deserunt adipisicing aute exercitation deserunt id anim sit deserunt fugiat dolore sunt elit',
                                href: '#objective111',
                                state: {
                                    expanded: true
                                },
                                nodes: [
                                {
                                    text: '<b>Intervention</b> - Intervention 1 for Objective 1: Monitor stuff Consectetur laboris irure ad in sunt mollit ut dolore aute exercitation sit quis occaecat anim reprehenderit irure dolore nostrud anim id adipisicing officia fugiat laborum ullamco eiusmod in tempor laborum',
                                    href: '#intervention1111'                                   
                                },
                                {
                                    text: '<b>Intervention</b> - Intervention 2 for Objective 1 - Sunt excepteur adipisicing qui do ut aliquip pariatur cillum anim laborum ea ut voluptate aliqua irure est cupidatat dolore',
                                    href: '#intervention1112'
                                }                                
                                ]
                            },
                            {
                                text: '<b>Objective</b> - Objective 2 for Goal 1: Mollit id eiusmod ullamco ut dolor nostrud ad sint commodo laborum deserunt adipisicing aute exercitation deserunt id anim sit deserunt fugiat dolore sunt elit.',
                                href: '#objective112',
                                state: {
                                    expanded: true
                                },                                
                                nodes: [
                                {
                                    text: '<b>Intervention</b> - Intervention 1 for Objective 2: Monitor stuff Consectetur laboris irure ad in sunt mollit ut dolore aute exercitation sit quis occaecat anim reprehenderit irure dolore nostrud anim id adipisicing officia fugiat laborum ullamco eiusmod in tempor laborum.',
                                    href: '#intervention1121'
                                },
                                {
                                    text: '<b>Intervention</b> - Intervention 2 for Objective 2 - Sunt excepteur adipisicing qui do ut aliquip pariatur cillum anim laborum ea ut voluptate aliqua irure est cupidatat dolore.',
                                    href: '#intervention1122'
                                }                                
                                ]
                            }                            
                        ]
                    },
                    {
                        text: '<b>Goal</b> - Goal2 for Problem 1: Lorem ipsum esse consectetur consequat incididunt id anim est consectetur velit ad nisi dolore elit sit eu ut mollit ullamco dolore pariatur qui.',
                        href: '#goal12',
                        state: {
                            expanded: true
                        },
                        nodes: [
                            {
                                text: '<b>Objective</b> - Objective 1 for Goal 2: Mollit id eiusmod ullamco ut dolor nostrud ad sint commodo laborum deserunt adipisicing aute exercitation deserunt id anim sit deserunt fugiat dolore sunt elit',
                                href: '#objective121',
                                state: {
                                    expanded: true
                                },
                                nodes: [
                                {
                                    text: '<b>Intervention</b> - Intervention 1 for Objective 1: Monitor stuff Consectetur laboris irure ad in sunt mollit ut dolore aute exercitation sit quis occaecat anim reprehenderit irure dolore nostrud anim id adipisicing officia fugiat laborum ullamco eiusmod in tempor laborum',
                                    href: '#intervention1211'                                   
                                },
                                {
                                    text: '<b>Intervention</b> - Intervention 2 for Objective 1 - Sunt excepteur adipisicing qui do ut aliquip pariatur cillum anim laborum ea ut voluptate aliqua irure est cupidatat dolore',
                                    href: '#intervention1212'
                                }                                
                                ]
                            },
                            {
                                text: '<b>Objective</b> - Objective 2 for Goal 1: Mollit id eiusmod ullamco ut dolor nostrud ad sint commodo laborum deserunt adipisicing aute exercitation deserunt id anim sit deserunt fugiat dolore sunt elit.',
                                href: '#objective122',
                                state: {
                                    expanded: true
                                },                                
                                nodes: [
                                {
                                    text: '<b>Intervention</b> - Intervention 1 for Objective 2: Monitor stuff Consectetur laboris irure ad in sunt mollit ut dolore aute exercitation sit quis occaecat anim reprehenderit irure dolore nostrud anim id adipisicing officia fugiat laborum ullamco eiusmod in tempor laborum.',
                                    href: '#intervention1221'
                                },
                                {
                                    text: '<b>Intervention</b> - Intervention 2 for Objective 2 - Sunt excepteur adipisicing qui do ut aliquip pariatur cillum anim laborum ea ut voluptate aliqua irure est cupidatat dolore.',
                                    href: '#intervention1222'
                                }                                
                                ]
                            }                            
                        ]
                    }
                ]
            },
            {
                text: '<b>Problem</b> - Problem 2: Life Skills Operational Definition. Ut excepteur qui non ex aute ut labore cupidatat do irure ad dolor voluptate sit sit adipisicing in quis et id sit ut minim. Lorem ipsum culpa occaecat commodo dolor est cupidatat reprehenderit mollit et culpa magna id amet ullamco amet do sint ut mollit.',
                href: '#problem2',
                nodes: [
                    {
                        text: '<b>Goal</b> - Goal1 for Problem 2: Lorem ipsum esse consectetur consequat incididunt id anim est consectetur velit ad nisi dolore elit sit eu ut mollit ullamco dolore pariatur qui.',
                        href: '#goal21',
                        state: {
                            expanded: true
                        },
                        nodes: [
                            {
                                text: '<b>Objective</b> - Objective 1 for Goal 1: Mollit id eiusmod ullamco ut dolor nostrud ad sint commodo laborum deserunt adipisicing aute exercitation deserunt id anim sit deserunt fugiat dolore sunt elit',
                                href: '#objective211',
                                state: {
                                    expanded: true
                                },
                                nodes: [
                                {
                                    text: '<b>Intervention</b> - Intervention 1 for Objective 1: Monitor stuff Consectetur laboris irure ad in sunt mollit ut dolore aute exercitation sit quis occaecat anim reprehenderit irure dolore nostrud anim id adipisicing officia fugiat laborum ullamco eiusmod in tempor laborum',
                                    href: '#intervention2111'                                   
                                },
                                {
                                    text: '<b>Intervention</b> - Intervention 2 for Objective 1 - Sunt excepteur adipisicing qui do ut aliquip pariatur cillum anim laborum ea ut voluptate aliqua irure est cupidatat dolore',
                                    href: '#intervention2112'
                                }                                
                                ]
                            },
                            {
                                text: '<b>Objective</b> - Objective 2 for Goal 1: Mollit id eiusmod ullamco ut dolor nostrud ad sint commodo laborum deserunt adipisicing aute exercitation deserunt id anim sit deserunt fugiat dolore sunt elit.',
                                href: '#objective212',
                                state: {
                                    expanded: true
                                },                                
                                nodes: [
                                {
                                    text: '<b>Intervention</b> - Intervention 1 for Objective 2: Monitor stuff Consectetur laboris irure ad in sunt mollit ut dolore aute exercitation sit quis occaecat anim reprehenderit irure dolore nostrud anim id adipisicing officia fugiat laborum ullamco eiusmod in tempor laborum.',
                                    href: '#intervention2121'
                                },
                                {
                                    text: '<b>Intervention</b> - Intervention 2 for Objective 2 - Sunt excepteur adipisicing qui do ut aliquip pariatur cillum anim laborum ea ut voluptate aliqua irure est cupidatat dolore.',
                                    href: '#intervention2122'
                                }                                
                                ]
                            }                            
                        ]
                    },
                    {
                        text: '<b>Goal</b> - Goal2 for Problem 1: Lorem ipsum esse consectetur consequat incididunt id anim est consectetur velit ad nisi dolore elit sit eu ut mollit ullamco dolore pariatur qui.',
                        href: '#goal22',
                        state: {
                            expanded: true
                        },
                        nodes: [
                            {
                                text: '<b>Objective</b> - Objective 1 for Goal 2: Mollit id eiusmod ullamco ut dolor nostrud ad sint commodo laborum deserunt adipisicing aute exercitation deserunt id anim sit deserunt fugiat dolore sunt elit',
                                href: '#objective221',
                                state: {
                                    expanded: true
                                },
                                nodes: [
                                {
                                    text: '<b>Intervention</b> - Intervention 1 for Objective 1: Monitor stuff Consectetur laboris irure ad in sunt mollit ut dolore aute exercitation sit quis occaecat anim reprehenderit irure dolore nostrud anim id adipisicing officia fugiat laborum ullamco eiusmod in tempor laborum',
                                    href: '#intervention2211'                                   
                                },
                                {
                                    text: '<b>Intervention</b> - Intervention 2 for Objective 1 - Sunt excepteur adipisicing qui do ut aliquip pariatur cillum anim laborum ea ut voluptate aliqua irure est cupidatat dolore',
                                    href: '#intervention2212'
                                }                                
                                ]
                            },
                            {
                                text: '<b>Objective</b> - Objective 2 for Goal 1: Mollit id eiusmod ullamco ut dolor nostrud ad sint commodo laborum deserunt adipisicing aute exercitation deserunt id anim sit deserunt fugiat dolore sunt elit.',
                                href: '#objective222',
                                state: {
                                    expanded: true
                                },                                
                                nodes: [
                                {
                                    text: '<b>Intervention</b> - Intervention 1 for Objective 2: Monitor stuff Consectetur laboris irure ad in sunt mollit ut dolore aute exercitation sit quis occaecat anim reprehenderit irure dolore nostrud anim id adipisicing officia fugiat laborum ullamco eiusmod in tempor laborum.',
                                    href: '#intervention2221'
                                },
                                {
                                    text: '<b>Intervention</b> - Intervention 2 for Objective 2 - Sunt excepteur adipisicing qui do ut aliquip pariatur cillum anim laborum ea ut voluptate aliqua irure est cupidatat dolore.',
                                    href: '#intervention2222'
                                }                                
                                ]
                            }                            
                        ]
                    }
                ]
            }            
        ];

        // Init Simple Tree
        jQuery('.js-tree-simple').treeview({
            data: $treeData,
            color: '#555',
            showBorder: true,
            showCheckbox: true,
            showIcon: false,
            selectedBackColor: '#428bca',
            selectedColor: '#ffffff',
            levels: 1
        });
    };

    return {
        init: function () {
            // Init all Tree Views
            initTreeViews();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BaseCompTreeview.init(); });