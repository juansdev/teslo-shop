import {Title} from "@/components";
import {auth} from "@/auth.config";

export default async function ProfilePage() {
  const session = await auth();
  return (
    <div>
      <Title title={"Profile"}/>
      <pre>
        {
          JSON.stringify(session?.user, null, 2)
        }
      </pre>
    </div>
  );
}