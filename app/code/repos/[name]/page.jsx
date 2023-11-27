import Repo from "@/app/component/Repo";
import RepoDirs from "@/app/component/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params }) => {  //In NextJS -> destructure params from URL
  return (
    <div className="card">
      <Link href='/code/repos' className="btn btn-back">Back To Repositories</Link>
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  )
}

export default RepoPage;