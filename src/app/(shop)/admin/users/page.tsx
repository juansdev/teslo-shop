import {redirect} from "next/navigation";
import {Pagination, Title} from "@/components";
import {getPaginatedUsers} from "@/actions";
import {UsersTable} from "@/app/(shop)/admin/users/ui/UsersTable";

export default async function UsersPage() {
  const {ok, users} = await getPaginatedUsers();
  if (!ok || !users) redirect("/auth/login");
  return (
    <>
      <Title title="Mantaiment of users"/>
      <div className="mb-10">
        <UsersTable users={users}/>
        <Pagination totalPages={1}/>
      </div>
    </>
  );
}