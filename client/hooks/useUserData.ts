import { useQuery } from "@apollo/client";
import { GET_USER } from "graphql/client/users";
import { useSession } from "next-auth/react";
import { extendedUser } from "types";

const useUserData = () => {
    const {data:session,status} = useSession();
    const userEmail = session?.user?.email;

    const {data: userData,loading} = useQuery<{user:extendedUser}>(GET_USER,{
        variables : {
            email: userEmail,
        }
    })
    return {session, status, userData, loading,  role: userData?.user.role.name};
}

export default useUserData;