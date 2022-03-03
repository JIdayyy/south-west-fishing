import { useRouter } from 'next/router';

const CustomToast = ({ message }: { message: string }) => {
    const router = useRouter();

    return (
        <>
            <div>{message}</div>
            <button
                type="button"
                onClick={() => router.push('/')}
                className="border-gray-200 border p-1 rounded-sm hover:bg-gray-200"
            >
                BACK HOME
            </button>
        </>
    );
};
export default CustomToast;
