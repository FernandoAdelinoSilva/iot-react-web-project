import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth';
import Sidebar from '../components/sidebar/Sidebar';

export function NewRoom() {
	const { user } = useAuth();
	console.log(user.email);

	return (
		<Sidebar />
	)
}