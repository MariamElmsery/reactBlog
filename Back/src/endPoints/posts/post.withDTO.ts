import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class postWithDto{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    description:string;

    @IsString()
    image:string;


}