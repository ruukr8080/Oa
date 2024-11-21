import { useState } from 'react';
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/card";
import { Alert, AlertDescription } from "@/components/alert";

const AuthForms = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [error, setError] = useState("");

    const handleGoogleSignIn = async () => {
        try {
            // Google OAuth2.0 로그인 로직 구현
            window.location.href = "http://localhost:8080/oauth2/authorization/google";
        } catch (err) {
            setError("Google 로그인 중 오류가 발생했습니다.");
        }
    };
    const SignInForm = () => (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" type="password" required />
            </div>
            <Button className="w-full">로그인</Button>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">또는</span>
                </div>
            </div>
            <Button
                variant="outline"
                className="w-full"
                onClick={handleGoogleSignIn}
            >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                    />
                    <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                    />
                    <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                    />
                    <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                    />
                </svg>
                Google로 로그인
            </Button>
        </form>
    );

    const SignUpForm = () => (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="signup-email">이메일</Label>
                <Input id="signup-email" type="email" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="signup-password">비밀번호</Label>
                <Input id="signup-password" type="password" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password-confirm">비밀번호 확인</Label>
                <Input id="password-confirm" type="password" required />
            </div>
            <Button className="w-full">회원가입</Button>
        </form>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>{isSignIn ? "로그인" : "회원가입"}</CardTitle>
                </CardHeader>
                <CardContent>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {isSignIn ? <SignInForm /> : <SignUpForm />}
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button
                        variant="link"
                        onClick={() => setIsSignIn(!isSignIn)}
                    >
                        {isSignIn ? "계정이 없으신가요? 회원가입" : "이미 계정이 있으신가요? 로그인"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AuthForms;