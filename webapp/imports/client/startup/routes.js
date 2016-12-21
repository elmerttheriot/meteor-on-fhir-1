import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from '/imports/ui/layouts/App';
import { AboutPage } from '/imports/ui/pages/AboutPage';
import { PrivacyPage } from '/imports/ui/pages/PrivacyPage';
import { DashboardPage } from '/imports/ui/pages/DashboardPage';
import { ForumPage } from '/imports/ui/pages/ForumPage';
import { Signin } from '/imports/ui/pages/Signin';
import { MyProfilePage } from '/imports/ui/pages/MyProfilePage';
import { PatientsPage } from '/imports/ui/workflows/patients/PatientsPage';
import { PractitionersPage } from '/imports/ui/workflows/practitioners/PractitionersPage';
import { Signup } from '/imports/ui/pages/Signup';
import { ThemePage } from '/imports/ui/pages/ThemePage';
import { UsersPage } from '/imports/ui/pages/UsersPage';
import { Healthlog } from '/imports/ui/pages/Healthlog';
import { NotFound } from '/imports/ui/pages/NotFound';
import { RecoverPassword } from '/imports/ui/pages/RecoverPassword';
import { ResetPassword } from '/imports/ui/pages/ResetPassword';
import { WelcomePatientPage } from '/imports/ui/pages/WelcomePatientPage';

import { ConversationsPage } from '/imports/ui/pages/ConversationsPage';
import { NewTopicPage } from '/imports/ui/pages/NewTopicPage';

import { NeedToBeSysadmin } from '/imports/ui/pages/NeedToBeSysadmin';
import { NeedToBePractitioner } from '/imports/ui/pages/NeedToBePractitioner';

import { MainIndex } from '/imports/ui/pages/MainIndex';
import { AdminDashboard } from '/imports/ui/pages/AdminDashboard';
import { PractitionerDashboard } from '/imports/ui/pages/PractitionerDashboard';

import { HexGridPage } from '/imports/ui/pages/HexGridPage';
import { AppInfoPage } from '/imports/ui/pages/AppInfoPage';

import { InboundMessagesPage } from '/imports/ui/pages/InboundMessagesPage';
import { OutboundHeaderPage } from '/imports/ui/pages/OutboundHeaderPage';
import { DataManagementPage } from '/imports/ui/pages/DataManagementPage';

import { ObservationsPage } from '/imports/ui/pages/ObservationsPage';


// we're storing the current route URL in a reactive variable
// which will be used to update active controls
// mostly used to toggle header and footer buttons
Session.setDefault('pathname', '/');
browserHistory.listen(function(event) {
  Session.set('pathname', event.pathname);
});

// patient authentication function
const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};



// practitioner authentication function
const requirePractitioner = (nextState, replace) => {
  if (!Roles.userIsInRole(Meteor.userId(), 'practitioner')) {
    replace({
      pathname: '/need-to-be-practitioner',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};
// practitioner authentication function
const requreSysadmin = (nextState, replace) => {
  if (!Roles.userIsInRole(Meteor.userId(), 'sysadmin')) {
    replace({
      pathname: '/need-to-be-sysadmin',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};


Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ MainIndex } onEnter={ requireAuth } />

        <Route name="sysadmin" path="/sysadmin" component={ AdminDashboard } onEnter={ requreSysadmin } />
        <Route name="practitioner" path="/practitioner" component={ PractitionerDashboard } onEnter={ requireAuth } />

        <Route name="signin" path="/signin" component={ Signin } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />

        <Route name="about" path="/about" component={ AboutPage } />
        <Route name="privacy" path="/privacy" component={ PrivacyPage } />

        <Route name="dashboard" path="/dashboard" component={ DashboardPage } onEnter={ requireAuth } />
        <Route name="theming" path="/theming" component={ ThemePage } onEnter={ requireAuth } />
        <Route name="myprofile" path="/myprofile" component={ MyProfilePage } onEnter={ requireAuth } />

        <Route name="practitioners" path="/practitioners" component={ PractitionersPage } />
        <Route name="patients" path="/patients" component={ PatientsPage } onEnter={ requireAuth } />
        <Route name="users" path="/users" component={ UsersPage } onEnter={ requireAuth } />

        <Route name="support" path="/support" component={ ForumPage } />
        <Route name="forum" path="/forum" component={ ForumPage } onEnter={ requireAuth } />

        <Route name="topicById" path="/topic/:topicId" component={ ConversationsPage } onEnter={ requireAuth } />
        <Route name="newTopic" path="/new/topic" component={ NewTopicPage } onEnter={ requireAuth } />

        <Route name="weblog" path="/weblog" component={ Healthlog } />
        <Route name="weblogByUserId" path="/weblog/:userId" component={ Healthlog } />

        <Route name="welcomePatient" path="/welcome/patient" component={ WelcomePatientPage } onEnter={ requireAuth }/>

        <Route name="needToBeSysadmin" path="/need-to-be-sysadmin" component={ NeedToBeSysadmin } />
        <Route name="needToBePractitioner" path="/need-to-be-practitioner" component={ NeedToBePractitioner }  />

        <Route name="hexGrid" path="/hex" component={ HexGridPage } />
        <Route name="appInfoPage" path="/info" component={ AppInfoPage } />

        <Route name="appInfoPage" path="/info" component={ AppInfoPage } />

        <Route name="inboundHeaderPage" path="/inbound" component={ InboundMessagesPage } />
        <Route name="outboundHeaderPage" path="/outbound" component={ OutboundHeaderPage } />
        <Route name="dataManagementPage" path="/data-management" component={ DataManagementPage } />

        <Route name="observationPage" path="/observations" component={ ObservationsPage } />

        <Route path="*" component={ NotFound } />

      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
