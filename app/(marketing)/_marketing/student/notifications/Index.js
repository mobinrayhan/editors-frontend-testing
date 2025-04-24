"use client";

// import node module libraries
import { usePathname } from "next/navigation";

// import profile layout wrapper
import ProfileLayoutWrap from "layouts/marketing/ProfileLayoutWrap";
import ACNotificationsPage from "widgets/account-settings/Notifications";
// import widget/custom components
// import { ACNotificationsPage } from 'widgets';

const Notifications = () => {
  const location = usePathname();
  return (
    <ProfileLayoutWrap pathpara={location}>
      <ACNotificationsPage />
    </ProfileLayoutWrap>
  );
};

export default Notifications;
