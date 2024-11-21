// app/after-login/page.js
"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function AfterLogin() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window !== 'undefined') {  // 클라이언트 사이드 체크
            const token = searchParams.get('token');

            if (token) {
                // 토큰을 localStorage에 저장
                localStorage.setItem('token', token);
                // 홈페이지로 리다이렉트
                router.push('/');
            }
        }
    }, [searchParams, router]);

    return <div>Loading...</div>;
}