import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "Styles/ThemeProvider";
import { DashboardController } from "Components/DashboardController";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DashboardController />
      </BrowserRouter>
    </ThemeProvider>
  );
}

// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>

//       <Routes>
//         <Route path=":id" element={<UserProfile />} />
//         <Route path="me" element={<OwnUserProfile />} />
//       </Routes>
//     </div>
//   );
// }

// const UserProfile = () => {
//   return <div>User Profile</div>;
// };

// const OwnUserProfile = () => {
//   return <div>OwnUserProfile</div>;
// };
