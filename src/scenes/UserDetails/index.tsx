import { useCallback, useEffect, useState } from "react";
import { User } from "../../types/user";

type UserDetailsProps = {
  id: string;
};

type ApiError = {
  code: number;
  message?: string;
};

const UserDetails = ({ id }: UserDetailsProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<ApiError | Error | null>(null);

  const fetchUser = useCallback(async (id: string) => {
    try {
      const response = await fetch(`user/${id}`);
      const data = await response.json();
      setUser(data);
    } catch (e: any) {
      setError(e);
    }
  }, []);

  useEffect(() => {
    fetchUser(id);
  }, [fetchUser, id]);

  if (error)
    return <div> Error occurred while loading {error.message ?? ""}</div>;

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <div>First Name:</div> <div>{user.firstName}</div>
      <div>Last Name:</div> <div>{user.lastName}</div>
    </div>
  );
};

export { UserDetails };
