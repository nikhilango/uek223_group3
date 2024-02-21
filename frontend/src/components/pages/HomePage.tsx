import { Box } from '@mui/system';
import logo from "../../images/team-placeholder.png";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Group } from '../../types/models/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsService from '../../Services/GroupsService';

export default function HomePage() {

  const [groupsList, setGroupsList] = useState<Group[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    GroupsService().getAllGroups().then((data) => {
      setGroupsList(data.data);
    });
  })

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection={'column'}
    >
      <h1>Welcome to the Homepage</h1>
      {/* <img
        src={logo}
        style={{ filter: 'invert(100%)' }}
        className='App-logo'
        alt='logo'
      /> */}
      <div>
          {/* {groupsList.map((group) =>
            (
            <>
              <img src={logo} alt="" />
              <h1>{group.name}</h1>
              <h2>{group.motto}</h2>
              <p>{group.users.length}</p>
              <Button onClick={() => navigate("/some/link")}>View Users</Button>
            </>
            )
          )} */}
          <img src={logo} alt="" />
          <h1>Group Name</h1>
          <h2>Group Motto</h2>
          <p>10 Users</p>
          <Button onClick={() => navigate("/some/link")}>View Users</Button>
      </div>

      <Button onClick={() => navigate('/login')}>
        <LogoutIcon  
          sx={{position: "fixed", top: 0, right: 0, zIndex: 2000, height: 50, width: 50, marginRight: 5}}>
        </LogoutIcon>
      </Button>

    </Box>
  );
}
