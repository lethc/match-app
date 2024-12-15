import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from "next-auth/react";
import { Button } from '@nextui-org/react';

export default function SocialLogin() {
    const providers = [
        {
            name: 'Google',
            icon: <FcGoogle size={20} />,
            url: 'https://www.google.com',
        },
        {
            name: 'Facebook',
            icon: <FaGithub size={20} />,
            url: 'https://www.facebook.com',
        },
    ]
    // const onClick = (
    //     provider: "google" | "github", 
    // ) => {
    //     SignIn(provider, {
    //         callbackUrl: "/members",
    //     })
    // }
    return (
    <div className='flex items-center w-full gap-2'>
            {providers.map((provider) => 
                <Button
                    key={provider.name}
                    size='lg'
                    fullWidth
                    variant='bordered'
                >
                    {provider.icon}
                </Button>
            )}
        </div>
    )
}
