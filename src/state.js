const initialState = {
  BodyRdx: {
    element: null,
  },
  AppBarRdx: { 
    opened: false, 
    simplebar: false, 
    showMenu: false,
    logged: true,
    anchorEl: null,
  },
  LoginPageRdx: { 
    register: false 
  },
  NotificationRdx: {
    all: true,
    chat: true,
    email: true,
    gearwatch: true,
    total: 3,
    list: [
      {text:"test notification 1", status:"loading", checked: false},
      {text:"test notification 2", status:"done", checked: true},
      {text:"test notification 3", status:"done", checked: true},
    ],
  },
  GridRdx: {
    list: [
      { cardHeader: 
        { 
          title: "Simmer Quantum",
          profile: "wind85",
          avatar: "images/avatar.jpg",
          timeAdded: "4 hours ago",
        }, 
        videoId: "6xZqqZs4Gjk",
        likes: 1,
        itemChips:
        {
          conditions: "good",
          size: "236x85",
          liters: "85",
          price: "1800",
        },
      },
    ]
  },
  SideBarRdx: {
    logoutShow: false,
  },
}

export default initialState
