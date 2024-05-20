import { NextPageContext } from "next";
import { getSession, signOut} from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { permanentRedirect } from "next/navigation";
 
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return{
    props: {}
  }
  
}

export default function Home() {
  return (
    <h1 className ="text-2xl text-green-500">Hello</h1>
  );
}
