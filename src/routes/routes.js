// import AccountSetting from "~/features/accountSetting/accountSetting";
// import ForgotPassword from "~/features/forgotPassword/forgotPassword";
// import Home from "~/features/home/home";
// import Login from "~/features/login/login";
// import Register from "~/features/register/register";
// import SendInvites from "~/features/sendInvites/sendInvites";
// import SetPassword from "~/features/setPassword/setPassword";
// import Unauthorized from "~/features/unauthorized/unauthorized";
// import Users from "~/features/users/users";
// import VerifyEmail from "~/features/verifyEmail/verifyEmail";
// import GuestPageLayout from "~/layout/guestPageLayout";
// import LoggedInPageLayout from "~/layout/loggedInPageLayout";
// import JobPreviewLayout from "~/layout/jobPreviewLayout";
// import JobPreview from "~/features/jobPreview/jobPreview";
// import { useDispatch } from "react-redux";
// import Job from "~/models/job";
// import { json } from "react-router-dom";
import BulkDelete from "../features/tasks/bulkDeleteTask";
import CreateTask from "../features/tasks/createTask";
import TaskList from "../features/tasks/tasksList";
import NotFound from "../features/notFound/notFound";
import { Navigate } from "react-router-dom";
import GlobalLayout from "../features/layout/layout";

/* 
  * Template for a route
  {
    path: '/login',
    name: "Login",
    component: Login,
    authenticated: false,
    permission: [],
    children: [],
    exact: true,
    layout: LoggedInPageLayout
  }
*/

/* const defaultCrudChildren = [
  {
    path: "store/create",
    name: "Create",
    // component: CreateProjects,
    // layout: LoggedInPageLayout,
  },
]; */

const routes = [
  //   {
  //     path: "/login",
  //     name: "Login",
  //     component: Login,
  //     layout: GuestPageLayout,
  //   },
  //   {
  //     path: "/register",
  //     name: "Register",
  //     component: Register,
  //     layout: GuestPageLayout,
  //   },
  {
    path: "/",
    redirect: <Navigate to="list-tasks" />,
  },
  {
    path: "list-tasks",
    exact: true,
    name: "taskList",
    component: TaskList,
    layout: GlobalLayout,
  },
  {
    path: "/create-task",
    name: "createTask",
    component: CreateTask,
    layout: GlobalLayout,
  },
  {
    path: "/bulk-delete",
    name: "bulkDelete",
    component: BulkDelete,
    layout: GlobalLayout,
  },
  //   {
  //     id: "job_preview",
  //     path: "/job-preview/:jobId",
  //     loader: async ({ params }) => {
  //       let jobData = await Job.getSingleJob(params.jobId);
  //       return jobData;
  //     },
  //     name: "Job Preview",
  //     component: JobPreview,
  //     layout: JobPreviewLayout,
  //   },
  //   {
  //     path: "/users",
  //     name: "Users",
  //     component: Users,
  //     authenticated: true,
  //     permission: [],
  //     layout: LoggedInPageLayout,
  //   },
  //   {
  //     path: "/",
  //     name: "Home",
  //     component: Home,
  //     authenticated: true,
  //     layout: LoggedInPageLayout,
  //   },
  //   {
  //     path: "/send-invite",
  //     name: "Send Invites",
  //     component: SendInvites,
  //     authenticated: true,
  //     layout: LoggedInPageLayout,
  //   },
  //   {
  //     path: "/profile",
  //     name: "Account Setting",
  //     component: AccountSetting,
  //     authenticated: true,
  //     layout: LoggedInPageLayout,
  //   },

  //   {
  //     path: "/unauthorized",
  //     name: "Unauthorized",
  //     component: Unauthorized,
  //     authenticated: true,
  //     layout: GuestPageLayout,
  //   },
  {
    path: "*",
    name: "Not Found",
    component: NotFound,
    // layout: GuestPageLayout,
  },
];

export default routes;
