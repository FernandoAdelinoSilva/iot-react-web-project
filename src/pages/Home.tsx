import '../styles/auth.scss';
import Sidebar from '../components/sidebar/Sidebar';
import { useAuth } from '../hooks/useAuth';

export function Home() {
	const { user } = useAuth();
	console.log(user.email);

	return (
		<Sidebar />
	)
}