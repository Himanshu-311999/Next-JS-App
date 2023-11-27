import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetchRepos() {
  const response = fetch('https://api.github.com/users/bradtraversy/repos', 
  {
    next: {
      revalidate: 60,   // revalidate api every 60 sec ( we use this for data that ofen changing)
    }
  })
  // await new Promise((res) => setTimeout(res,2000)); // Intilally waiting to see loader from loader.js file
  const repos = (await response).json();
  return repos;
}

const ReposPage = async() => {
  const repos = await fetchRepos();

  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        {
          repos.map((repo) => (
            <li key={repo.id}>
              <Link href={`code/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className='repo-details'>
                  <span>
                    <FaStar />{repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch />{repo.forks_count}
                  </span>
                  <span>
                    <FaEye />{repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ReposPage;