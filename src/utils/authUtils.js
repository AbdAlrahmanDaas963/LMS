import { useSelector } from "react-redux";
import { USER_ROLES } from "../config/constants";

export const useAuth = () => {
  const userRole = useSelector((state) => state.auth.userRole);

  console.log("userRole :>> ", userRole);

  const isStudent = userRole === USER_ROLES.STUDENT;
  const isAdmin = userRole === USER_ROLES.ADMIN;
  const isInstructor = userRole === USER_ROLES.INSTRUCTOR;

  return { isStudent, isAdmin, isInstructor };
};
