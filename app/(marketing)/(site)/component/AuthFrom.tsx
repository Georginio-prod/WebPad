'use client';
import React, {useCallback, useState} from "react";
import {useAmp} from "next/amp";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/Button";
import AuthSocial from "@/app/(marketing)/(site)/component/AuthSocial";

import {BsGithub, BsGoogle} from "react-icons/bs";


type Variant = 'LOGIN ' | 'REGISTER';
const AuthFrom = () => {
    const [variant , setVariant] = useState<Variant>('LOGIN ');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN '){
            setVariant('REGISTER');
        }else {
            setVariant('LOGIN ');
        }
    }, [variant]);



    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant ==='REGISTER'){
            //créer une première action
        }
        if(variant=== 'LOGIN '){
            //connexion a la base de donné
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        //connexion aves les compte
    }
    return (
        <div
            className="
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            "
        >
            <div
                className="
                    bg-white
                    px-4
                    py-8
                    shadow
                    sm:rounded-lg
                    sm:px-10

                "
            >

                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                    <Input
                        id="name"
                        label="Name"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    )}
                    <Input
                        id="email"
                        label="Email Address"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        id="password"
                        label="password"
                        type="password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />

                    <div>
                        <Button
                            disabled = {isLoading}
                            fullWidth
                            type= "submit"
                        >
                            {variant === 'LOGIN '? 'Sign in ': 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="
                        absolute
                        inset-0
                        flex
                        items-center
                    ">
                        <div className="
                            w-full
                            border-t
                            border-gray-300
                        "/>

                    </div>
                    <div className="
                        relative
                        flex
                        justify-center
                        text-sm
                    ">
                        <span className="
                            bg-white
                            px-2
                            text-gray-500
                        ">
                            Or continue with

                        </span>

                    </div>

                </div>

                <div className="mt-6 flex gap-2">
                    <AuthSocial
                        icon={BsGithub}
                        onClick={()=> socialAction('github')}
                    />
                    <AuthSocial
                        icon={BsGoogle}
                        onClick={()=> socialAction('google')}
                    />

                </div>

            </div>

            <div className="
                flex
                gap-2
                justify-center
                text-sm
                mt-6
                px-2
                text-gray-500
            ">
                <div>
                    {variant === 'LOGIN '? 'New to Messenger?': 'Already have an account?'}
                </div>
                <div
                    onClick={toggleVariant}
                    className="underline cursor-pointer"
                >
                    {variant === 'LOGIN '? 'Create an account': 'login'}

                </div>

            </div>
            <div>

            </div>

        </div>
    )
}

export default AuthFrom;