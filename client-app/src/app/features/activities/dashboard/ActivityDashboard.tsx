import React from "react";
import { Grid, List, ListItem } from "semantic-ui-react";
import { IActivity } from "../../../models/activity";
import { ActivityList } from "./ActivityList";

interface IProps {
    activities: IActivity[]
}
const ActivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities}/>
        {/* <List>
          {activities.map(activity => (
            <ListItem key={activity.id}>{activity.title}</ListItem>
          ))}
        </List> */}
        </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
