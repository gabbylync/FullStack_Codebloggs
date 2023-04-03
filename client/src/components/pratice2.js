{/* <CDBSidebar
className="navigation"
backgroundColor="#9575CD"
style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
>
<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
  <img
    src={
      "https://i.ibb.co/dLBWqJG/codebloggs-logo2-removebg-preview.png"
    }
    alt=""
    style={{ width: 70 + "%" }}
  />
</CDBSidebarHeader>
<CDBSidebarContent className="sidebar-content">
  <CDBSidebarMenu>

  
    <NavLink to="/home" className="activeClicked">
      
      <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
    </NavLink>
    <NavLink to="/bloggs" className="activeClicked">
      <CDBSidebarMenuItem icon="table">Bloggs</CDBSidebarMenuItem>
    </NavLink>
    <NavLink to="/network" className="activeClicked">
      <CDBSidebarMenuItem icon="user">Network</CDBSidebarMenuItem>
    </NavLink>

   {userAuth === 'admin' ?
    <NavLink to="/admin" className= 'activeClicked' >
    
     <CDBSidebarMenuItem icon="user">Admin</CDBSidebarMenuItem>
     </NavLink>
     : <NavLink></NavLink>
  }
     
  </CDBSidebarMenu>
</CDBSidebarContent>

{/* <CDBSidebarFooter style={{ textAlign: "center" }}>
  <div
    className="sidebar-btn-wrapper"
    style={{
      padding: "20px 5px",
    }}
  >
    Codebloggs ™
  </div>
</CDBSidebarFooter> */}



