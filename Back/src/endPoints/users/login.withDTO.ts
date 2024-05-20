import { IsEmail, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class loginWithDto{
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    

}