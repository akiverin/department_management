import { useQuery } from '@tanstack/react-query'
import './Profile.scss'

function Profile() {
	useQuery({ queryKey: ['authUser'] })
	return <main className="profile">profile</main>
}

export default Profile
