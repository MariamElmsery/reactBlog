import { IsArray, IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, Min, MinLength, isEmpty } from "class-validator"

export class userWithDto{
   
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    firstName:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    lastName:string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;

   

} 