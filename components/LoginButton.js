import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
export default function LoginButton() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>
          <div
            title={session.user.name}
            className="h-10 w-10 rounded-full bg-zinc-200 bg-cover bg-center shadow-inner dark:bg-zinc-800"
            style={{
              backgroundImage: `url(${session.user.image})`,
            }}
          />
        </button>
      </>
    )
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className="rounded py-1 px-2 font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
      >
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0v9H7V0h1zm4.387 1.792l.358.35A7.468 7.468 0 0115 7.494C15 11.635 11.644 15 7.5 15 3.358 15 0 11.635 0 7.495a7.46 7.46 0 012.269-5.354l.357-.35.7.716-.359.35A6.463 6.463 0 001 7.494 6.506 6.506 0 007.5 14c3.59 0 6.5-2.917 6.5-6.505a6.464 6.464 0 00-1.955-4.639l-.357-.35.7-.714z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </>
  )
}
