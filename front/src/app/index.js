// pages/auth/index.js
import AuthForms from '@/components/AuthForms';

export default function AuthPage() {
    return <AuthForms />;
}
export const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/data',{
        // const response = await fetch(`${API_BASE_URL}/api/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key: 'value' }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);

        }
        return await response.json();
    } catch (error) {
        console.error('API 호출 중 에러 발생:', error);
        throw error;
    }
};
